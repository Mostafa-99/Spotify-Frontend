import React ,{ Component }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';
import axios from 'axios'
import {Link} from 'react-router-dom';
import './Profile.css';
import { ConfigContext } from '../../Context/ConfigContext'
import { responseHandler } from '../../ReduxStore/Shared';
/** Class of ChangePassword page in account settings.
 * @extends Component
 */
class ChangePassword extends Component {
    /**Gets the baseURL from configrations context of the user
   * @memberof ChangePassword
   */
    static contextType=ConfigContext;
    constructor() {
        super()
        this.state = {
            /**
             * User object that have the user image
             * @memberof ChangePassword
             * @type {{image: string}}
             */  
          user:{
              image:"",
          },
            /**
             * success message show bollean
             * @memberof ChangePassword
             * @type {boolean}
             */            
          successMessage: false,
          /**
          * fail message show bollean
          * @memberof ChangePassword
          * @type {boolean}
          */  
          failMessagee: false
        }
    }
    /**
     * @property {Function} componentDidMount Fetch the data of the user and put it in the state
     */
    componentDidMount(){
        window.scrollTo(0, 0);
        axios.get(this.context.baseURL+"/me", {
            headers: {
                'authorization': "Bearer "+localStorage.getItem("token"),
            },
        })
            .then(res => {
                if(res.status===200)
                {
                    this.setState(prevState => (
                        {
                        user: {                   
                            ...prevState.user,    
                            image: res.data.images    
                        }
                    }))
                }
                responseHandler(res);
            })
    }
    /**
     * @property {Function} changePasswordHandle Function that take the old password and the new password and it's repeat to check on them and change it
     * @param {string} currentPassword User current password
     * @param {string} newPassword new password
     * @param {string} repeatPassword repeat of new password
     */
    changePasswordHandle(currentPassword,newPassword,repeatPassword){
        if(newPassword===repeatPassword)
        {
            axios.put(this.context.baseURL+'/me/changePassword',{
                "newPassword": newPassword,
                "passwordConfirmation": currentPassword
            },
            {
                headers: {
                    'authorization': "Bearer "+localStorage.getItem("token"),
            }
        }
        )   
        .then(res => {
            if(res.status === 204 || res.status === 200)
            {
                this.setState({
                    successMessage: true,
                    failMessage: false
                })
            }else
            responseHandler(res);
        }) 
        .catch(res => {this.setState({
            failMessage: true,
            successMessage: false
        })})
        }
    else{
        this.setState({
            successMessage: false,
            failMessage: true
        })
    }
    }

    render()
    {
        {document.title ="Edit profile - Spotify"}

    return(
        <div className="bg-dark-clr">
            
        
        <div id="change-password" className="container editProfile">
            <div className="row">
                <SideBar img={this.state.user.image}/>
                <div className="col-lg-9 password-section">
                    <div className="password-div">
                        { this.state.successMessage && <div class="alert alert-success">
                        <p>Password changed</p>
                        </div> }
                        { this.state.failMessage && <div class="alert alert-danger">
                        <p>Error</p>
                        </div> }
                        <h1 className="page-header">Change your password</h1>
                        <div className="password-info">  
                        <   div className="current-password">
                                <label className="labels">Current password</label>
                                <input type="password" ref="current" className="current-password-text-box"></input>
                            </div>   
                            <div className="new-password">
                                <label className="labels">New password</label>
                                <input type="password" ref="new" className="new-password-text-box"></input>
                            </div>
                            <div className="repeat-password">
                                <label className="labels">Repeat new Password</label>
                                <input type="password" ref="repeat" className="repeat-password-text-box"></input>
                            </div>
                            <div className="buttons">
                                <Link to="/account-overview" className="cancel-button">CANCEL</Link>
                                <button onClick={()=>{this.changePasswordHandle(this.refs.current.value,this.refs.new.value,this.refs.repeat.value)}}className="btn-sm btn btn-success set-new-password-button">SET NEW PASSWORD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
    }
}

export default ChangePassword;
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';
import AccountOverview from './AccountOverview';
import AccountHeading from './AccountHeading';
import axios from 'axios'
import './Profile.css';
import { ConfigContext } from '../../Context/ConfigContext'
import { responseHandler } from '../../ReduxStore/Shared';
/** Class of AccountSettings.
 * @extends Component
 */
class AccountSettings extends Component {
   /**Gets the baseURL from configrations context of the user
   * @memberof AccountSettings
   */
    static contextType=ConfigContext;
    constructor(){
        super()
        this.state = {
            /**
             * User object that have the user Date of birth and email and image
             * @memberof AccountSettings
             * @type {{dateOfBirth: string, email: string, image: string}}
             */
            user:{
                dateOfBirth:"",
                email:"",
                image:"",
            },
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
                console.log(res)
                if(res.status===200)
                {
                    this.setState(prevState => (
                        {
                        user: {                   
                            ...prevState.user,    
                            dateOfBirth: res.data.dateOfBirth,
                            email: res.data.email,
                            image: res.data.images    
                        }
                    }))
                    console.log(localStorage)
                }else
                responseHandler(res);
            })
    }

    render()
    {
        {document.title ="Account overview - Spotify"}

        return(
            <div className="bg-dark-clr">

                <AccountHeading />
                <div className="container settings">
                    <div className="row">
                        <SideBar img={this.state.user.image}/>
                        <AccountOverview info={this.state.user}/>
                    </div>
                </div>

            </div>
        )
    }
}
export default AccountSettings;
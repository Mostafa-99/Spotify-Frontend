import React ,{ Component }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';
import axios from 'axios'
import {Link} from 'react-router-dom';
import './Profile.css';


class ChangePassword extends Component {
    constructor() {
        super()
        this.state = {
          user:{
              image:"",
          },
          successMessage: false,
          failMessgae: false
        }
    }

    componentDidMount(){
        axios.get("http://138.91.114.14/api/me", {
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
                            image: res.data.images    
                        }
                    }))
                }
                else if(res.status === 401)
                {
                    localStorage.removeItem("loginType");
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("token");
                    localStorage.removeItem("userID");
                    console.log("fail")
                }
            })
    }
    changePasswordHandle(currentPassword,newPassword,repeatPassword){
        if(newPassword===repeatPassword)
        {
            axios.put('http://138.91.114.14/api/me/changePassword',{
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
            }
            else if(res.status === 401)
            {
                localStorage.removeItem("loginType");
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("token");
                localStorage.removeItem("userID");
            }
            else{
                this.setState({
                    successMessage: false,
                    failMessage: true
                })
            }

        }) 
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
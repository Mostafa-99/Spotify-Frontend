import React, { Component } from 'react';
import '../Authentication/SignUp.css';
import spotify_black_logo from '../../Images/spotify_logo_black.png';
import '../Button/SpotifyButton.css';
import {ConfigContext} from '../../Context/ConfigContext'
import axios from 'axios'
import {Link,Redirect} from 'react-router-dom'
import { checkValidity, login } from '../../ReduxStore/Shared';
//import { buildQueries } from '@testing-library/react';


/**
 * Login Page Component
 * @extends Component
 */
class LogIn extends Component {
    static contextType=ConfigContext;


    constructor() {
        super()
        
    this.state ={
        user:{
            email:'',
            password:''
               },
        rememberme:false,
        emptypass:false,
        emptyemail:false,
        status: 'not connected',
        invalid:false
    }

    }
        /**
     * Function handling login request with Facebook
     * 
     */
    fbLogin = event=> {
        event.preventDefault();
        
        window.FB.login(function(response) {
            if (response.status === 'connected') {
                let fbtoken=response.authResponse.accessToken;
                let fbuserID=response.authResponse.userID;
                    axios.post(this.context.baseURL+'/loginWithFacebook',
                {
                "access_token":fbtoken,
                "facebook id":fbuserID
                }
                )   
                .then(res => {
                    if(res.status===200) // Successful
                    {
                        if(res.data.success===true || res.data.success==="true")
                        {
                            login("fb",res.data.token);
                            localStorage.setItem("userID", response.authResponse.userID);
                            this.setState({status: 'connected'});
                            
                        }
                    }
                    else // Unsuccessful
                    {
                        alert(res.data.message)
                    }   
                    }).catch(err =>
                    {
                        alert(err)
                    })
                    
              }
          }.bind(this), {scope: 'public_profile,email'});
    } 

     /**
     * Component Mount state Intialization
     * 
     */
    componentDidMount =()=>{

        this.setState(()=> ({}))
        
          let show=localStorage.getItem("isLoggedIn");
          
          if(show==="true")
          this.setState({status:"connected"})
            else  
          this.setState({status:"not connected"})
       
    }
     /**
     * Function to check the Email textbox has valid email format
     * @param {string} Email - user email.
     */
    validateEmail(email) {
        if(this.state.emptyemail===true)
            this.setState({emptyemail: false});
        return checkValidity(email,"email");
    }

    /**
     * Function to check the Password textbox has valid password criteria
     * @param {string} Password - user password.
     */
    validatePassword(psw) {
        if(this.state.emptypass===true)
         this.setState({emptypass: false});
         return checkValidity(psw,"pass");
    }
      /**
     * Function handling login request with Email and Password
     * 
     */
    handleLogin = event=> {   
        event.preventDefault();
        const user={email:this.state.email,password:this.state.password}
        const memail = user.email;
        const mpsw = user.password;
        const is_email_valid = this.validateEmail(memail);
        const is_psw_valid = this.validatePassword(mpsw);

        if((this.state.user.email==="" && this.state.emptyemail===false) || !is_email_valid)
            this.setState({emptyemail: true});
        if((this.state.user.password==="" && this.state.emptypass===false) || !is_psw_valid)
            this.setState({emptypass: true});

        if(is_email_valid && is_psw_valid)
        {
            
            axios.post(this.context.baseURL+'/signIn',
            {
            "email":memail,
            "password":mpsw
            }
            )   
            .then(res => {
                if(res.status===200) // Successful
                {
                    if(res.data.success===true)
                    {
                        login("email",res.data.token);
                        this.setState({status: 'connected'});
                       
                    }
                }
                else
                {            
                    this.setState({invalid: true});
                    alert(res.data.message)

                 }
                }).catch(err =>{
                alert(err)
                })
        } 
    }

     /**
     * Function handling change in password textbox to the page's state
     * 
     */
    handlePasswordChange = event=> {
        event.preventDefault();
        if(this.state.emptypass===true)
        this.setState({emptypass: false});
        var newpass=event.target.value;
        this.setState({password: event.target.value});
        let userCopy = JSON.parse(JSON.stringify(this.state.user))
        userCopy['password'] = newpass;
        this.setState({
             user:userCopy 
            })
    }

    /**
     * Function handling change in email textbox to the page's state
     * 
     */
    handleEmailChange = event=> {
        event.preventDefault();
        if(this.state.emptyemail===true)
        this.setState({emptyemail: false});
        var newemail=event.target.value;
        this.setState({email: event.target.value});
        let userCopy = JSON.parse(JSON.stringify(this.state.user))
        userCopy['email'] = newemail;
        this.setState({
             user:userCopy 
            }) 
    }

    render(){  
        const logInOrNot = this.state.status;  
    return (
        
        <div id="my-sign-up">
            {logInOrNot==="connected" ? (
            <div>
            <Redirect to="/"/>
            </div>
            )
            :
            (
                <div>
                <img id="logo" src={spotify_black_logo} alt=""/>
                    <hr/>
            <div className="center-box-2">
            
            <h6 className="my-font">To continue, log in to Spotify.</h6>

            {this.state.invalid===true ?
            (
            <div id="invalid-message">
            Invalid email or password.
            </div>
            )
            :
            (
            <div>
            </div>
            )
            }
             
            <form className="text-center p-2" action="">
            
            <button id="fb-sign-up-2" type="button" className="my-spotify-button" onClick={this.fbLogin}><i className="fab fa-facebook fa-lg white-text mr-md-2 mr-3 fa-1x"> </i>CONTINUE WITH FACEBOOK</button>
            {/* <button id="applesignup" type="button" className="myspotifybutton"><i className="fab fa-apple fa-lg white-text mr-md-2 mr-3 fa-1x"> </i>CONTINUE WITH APPLE</button> */}
                <div className="col-xs-12">
                    <div className="divider">
                    <strong className="divider-title ng-binding">or</strong>
                    </div>
                </div>
           

            <input required type="email" id="form-email" onChange={this.handleEmailChange} className="form-control" placeholder="Email address"/>

            {this.state.emptyemail===true?
            <div id="empty-email" className="error-message">
            Please enter a valid Spotify email address.
            </div>
            :
            <div>
            </div>
            }

            <input required type="password" id="form-password" maxLength="30" minLength="8" onChange={this.handlePasswordChange} className="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" />

            {this.state.emptypass===true?
            <div id="empty-pass" className="error-message">
            Please enter a valid password. (Minimum Length=8)
            </div>
            :
            <div>
            </div>
            }

            <br/>
            <div className="custom-control custom-checkbox" id="remember-me">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked"/>
                <label className="custom-control-label" htmlFor="defaultUnchecked">Remember me</label>
            </div>

            <button id="login" type="button" className="my-spotify-button" onClick={this.handleLogin}>LOG IN</button>
            <br/>
            <Link to="/password-reset">Forgot your password?</Link>
            <hr/><br/>
            <h6>Don't have an account?</h6>
            <Link to="/signup"><button type="button" className="my-spotify-button" id="sign-up-now">SIGN UP FOR SPOTIFY</button></Link>
            <hr/>
            <p> If you click "Log in with Facebook" and are not a Spotify user, you will be registered and you agree to Spotify's
            <a href="https://www.spotify.com/eg-en/legal/end-user-agreement/" target="_blank ">Terms and Conditions</a> and
            <a href="https://www.spotify.com/eg-en/legal/privacy-policy/" target="_blank "> Privacy Policy</a>.</p>
            </form>      
        
            </div>
            </div>
            )
            }   
        </div>
    );
}

}

export default LogIn;
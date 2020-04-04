import React, { Component } from 'react';
import '../SignUp/sign_up.css';
import spotify_black_logo from '../../Images/spotify_logo_black.png';
import '../Button/spotify_button.css';
import axios from 'axios'
import {Link,Redirect} from 'react-router-dom'
//import { buildQueries } from '@testing-library/react';



class LogIn extends Component {
    
    
    constructor() {
        super()
        
    this.state ={
        user:{
            email:'',
            password:''
               },
        rememberme:false,
        accessToken: '',
        expiresIn:'',
        signedRequest:'',
        userID:' ',
        status: 'not connected'
    }

    }

    fbLogin = event=> {
        event.preventDefault();
        
        window.FB.login(function(response) {
            //let statusNow = JSON.parse(JSON.stringify(response.status));
            if (response.status === 'connected') {
                this.setState({status: response.status})
                localStorage.setItem("loginType", "fb");
                localStorage.setItem("isLoggedIn", 'true');
                localStorage.setItem("token", response.authResponse.accessToken);
                localStorage.setItem("userID", response.authResponse.userID);
                console.log(localStorage);
                console.log(response);
                window.location.reload(false);
                this.props.history.push('/Home')
                alert("YES");
              } else {
                localStorage.setItem("loginType", "");
                localStorage.setItem("isLoggedIn", 'false');
                localStorage.setItem("token", '');
                localStorage.setItem("userID", '');
                alert("NO");
              }
              console.log(response);
          }.bind(this), {scope: 'public_profile,email'});
    }

    fbLogOut = event=> {
        event.preventDefault();
        window.FB.logout(function(response) {
              console.log(response);
          });
    }   

    componentDidMount =()=>{
        console.log(localStorage);
        this.setState(()=> ({}))
        
          let show=localStorage.getItem("isLoggedIn");
          
          if(show==="true")
          this.setState({status:"connected"})
            else  
          this.setState({status:"not connected"})
       
        //this.setState({status:"not connected"})
        console.log(this.state.status)
    }

    componentDidUpdate(){
        
        console.log(this.state)

    }

    validateEmail(email) {
        return email && email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    }

    validatePassword(psw) {
        return psw && psw.length >= 6
    }

    handleLogin = event=> {   
        //event.preventDefault();
        const user={email:this.state.email,password:this.state.password}
        const memail = user.email;
        const mpsw = user.password;
        const is_email_valid = this.validateEmail(memail);
        const is_psw_valid = this.validatePassword(mpsw);
        if(is_email_valid && is_psw_valid)
        {
            axios.post('http://localhost:3000/users/',
            {
            email:memail,
            password:mpsw
            }
            )   
            .then(res => {
                if(res.status===200) // Successful
                {
                    if(res.success===true)
                    {
                    localStorage.setItem("isLoggedIn",'true');
                    localStorage.setItem("token",res.token);
                    localStorage.setItem("loginType", "email");
                    this.setState({status: 'connected'});
                    window.location.reload(false);
                    }
                    
                }
                if(res.status===304) // Unsuccessful
                {
                    localStorage.setItem("isLoggedIn",'false');
                    localStorage.setItem("token",'');
                    localStorage.setItem("loginType", "");
                    
                }
                
                alert("yes data")}).catch(
                    err =>{
                alert(err.status + ": "+ err.message);
                this.setState({status: 'invalid'});
            });
        }
        
    }

    handlePasswordChange = event=> {
        event.preventDefault();
        var newpass=event.target.value;
        this.setState({password: event.target.value});
        let userCopy = JSON.parse(JSON.stringify(this.state.user))
        userCopy['password'] = newpass;
        this.setState({
             user:userCopy 
            })
    }


    handleEmailChange = event=> {
        event.preventDefault();
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
            <Redirect to="/Home"/>
            </div>
            )
            :
            (
            <div className="center-box-2">
            <img id="logo" src={spotify_black_logo} alt=""/>
            <hr/>
            <h6>To continue, log in to Spotify.</h6>

            {this.state.status==="invalid"?
            <div id="invalid-message">
            Invalid email or password.
           
            </div>
            :
            <div>
            </div>
            }
             
            <form className="text-center p-5" action="">
            
            <button id="fb-sign-up-2" type="button" className="my-spotify-button" onClick={this.fbLogin}><i className="fab fa-facebook fa-lg white-text mr-md-2 mr-3 fa-1x"> </i>CONTINUE WITH FACEBOOK</button>
            {/* <button id="applesignup" type="button" className="myspotifybutton"><i className="fab fa-apple fa-lg white-text mr-md-2 mr-3 fa-1x"> </i>CONTINUE WITH APPLE</button> */}
            <h6>or</h6>
            <hr/>

            <input required type="email" id="form-email" onChange={this.handleEmailChange} className="form-control mb-4" placeholder="Email address"/>
            <input required type="password" id="form-password" maxLength="30" minLength="8" onChange={this.handlePasswordChange} className="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" />
            <br/>
            <div className="custom-control custom-checkbox" id="remember-me">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked"/>
                <label className="custom-control-label" htmlFor="defaultUnchecked">Remember me</label>
            </div>

            <button id="login" type="submit" className="my-spotify-button" onClick={this.handleLogin}>LOG IN</button>
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
            )
            }   
        </div>
    );
}

}

export default LogIn;
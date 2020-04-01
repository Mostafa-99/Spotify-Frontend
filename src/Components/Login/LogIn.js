import React, { Component } from 'react';
import '../SignUp/sign_up.css';
import spotify_black_logo from '../../Images/spotify_logo_black.png';
import '../Button/spotify_button.css';
import axios from 'axios'
import {Link,Redirect} from 'react-router-dom'
import firebase from 'firebase';
//import { buildQueries } from '@testing-library/react';

firebase.initializeApp({
    apiKey:"AIzaSyBQxjnak8nq_Jx9B5CfuReDP9hVwKwB_1Q",
    authDomain:"spotify-sw.firebaseapp.com"
})

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
        
        // var provider = new firebase.auth.FacebookAuthProvider();
        // provider.addScope('public_profile');
        // firebase.auth().signInWithPopup(provider).then(function(result) {
        //     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        //     this.setState({ token: result.credential.accessToken })
        //     // The signed-in user info.
        //     var user = result.user;
        //     // ...
        //   }).catch(function(error) {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     // The email of the user's account used.
        //     var email = error.email;
        //     // The firebase.auth.AuthCredential type that was used.
        //     var credential = error.credential;
        //     // ...
        //   });

        window.FB.login(function(response) {
            //let statusNow = JSON.parse(JSON.stringify(response.status));
            if (response.status === 'connected') {
               // this.setState({status: response.status});
                alert("YES");
              } else {
                alert("NO");
              }
              console.log(response);
          }, {scope: 'public_profile,email'});
       
    }

    fbLogOut = event=> {
        event.preventDefault();
        //firebase.auth().signOut();
        window.FB.logout(function(response) {
              console.log(response);
          });
    }   

    componentDidMount =()=>{
        
        this.setState(()=> ({}))
        firebase.auth().onAuthStateChanged(user => {
            if(user!=null)
            {
            user.getIdToken().then(accesstoken =>{
                
                this.setState({ token: accesstoken })
            })
            }
            this.setState({ isLoggedIn: !!user })
          }) 
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
        const user={email:this.state.email,password:this.state.password}
        const email = user.email;
        const psw = user.password;
        const is_email_valid = this.validateEmail(email);
        const is_psw_valid = this.validatePassword(psw);
        if(is_email_valid && is_psw_valid)
        {
            axios.post('https://jsonplaceholder.typicode.com/users',{user})   
            .then(res => {console.log(res.data);alert("yes data")}).catch(() =>{
                alert("no data");});
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
    let invalidMessage=null    
        
    return (
        
        <div id="my-sign-up">
            {this.state.status==="connected" ?
            <div>
            <h1>Logged in</h1>
            <button onClick={this.fbLogOut}>Sign Out</button>
            {/* <Redirect to="/profile"/> */}
            </div>
            :
            <div className="center-box">
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
            
            <button id="fb-sign-up-2" type="button" class="my-spotify-button" onClick={this.fbLogin}><i className="fab fa-facebook fa-lg white-text mr-md-2 mr-3 fa-1x"> </i>CONTINUE WITH FACEBOOK</button>
            {/* <button id="applesignup" type="button" class="myspotifybutton"><i className="fab fa-apple fa-lg white-text mr-md-2 mr-3 fa-1x"> </i>CONTINUE WITH APPLE</button> */}
            <h6>or</h6>
            <hr/>

            <input required type="email" id="form-email" onChange={this.handleEmailChange} className="form-control mb-4" placeholder="Email address"/>
            <input required type="password" id="form-password" onChange={this.handlePasswordChange} className="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" />
            <br/>
            <div className="custom-control custom-checkbox" id="remember-me">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked"/>
                <label className="custom-control-label" for="defaultUnchecked">Remember me</label>
            </div>

            <button id="login" type="submit" className="my-spotify-button" onClick={this.handleLogin}>LOG IN</button>
            <br/>
            <a href=" " target="_blank ">Forgot your password?</a>
            <hr/><br/>
            <h6>Don't have an account?</h6>
            <Link to="../SignUp"><button type="button" className="my-spotify-button" id="sign-up-now">SIGN UP FOR SPOTIFY</button></Link>
            <hr/>
       <p> If you click "Log in with Facebook" and are not a Spotify user, you will be registered and you agree to Spotify's
            <a href="https://www.spotify.com/eg-en/legal/end-user-agreement/" target="_blank ">Terms and Conditions</a> and
            <a href="https://www.spotify.com/eg-en/legal/privacy-policy/" target="_blank "> Privacy Policy</a>.</p>
        </form>      
        
        </div>
            }
            
        </div>
    );
}

}

export default LogIn;
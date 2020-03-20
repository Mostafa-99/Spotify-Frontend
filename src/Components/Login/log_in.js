import React, { Component } from 'react';
import '../SignUp/sign_up.css'
import spotify_black_logo from '../../Images/spotify_logo_black.png'

class log_in extends Component {

    render(){
    return (
            <div className="centerbox">
            <img id="logo" src={spotify_black_logo} />
            <hr/>
            <h6>To continue, log in to Spotify.</h6>
            <form className="text-center p-5" action="#!">
            <button id="fbsignup2"><i className="fab fa-facebook fa-lg white-text mr-md-2 mr-3 fa-1x"> </i>CONTINUE WITH FACEBOOK</button>
            <button id="applesignup"><i className="fab fa-apple fa-lg white-text mr-md-2 mr-3 fa-1x"> </i>CONTINUE WITH APPLE</button>
            <h6>or</h6>
            <hr/>
            <input type="text" id="defaultRegisterFormEmail" className="form-control mb-4" placeholder="Email address or username"/>
            <input type="password" id="defaultRegisterFormPassword" className="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
            <br/>
            <div className="custom-control custom-checkbox" id="rememberme">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked"/>
                <label className="custom-control-label" for="defaultUnchecked">Remember me</label>
            </div>

            <button id="login" type="submit ">LOG IN</button>
            <br/>
            <a href="# " target="_blank ">Forgot your password?</a>
            <hr/><br/>
            <h6>Don't have an account?</h6>
            <button id="signupnow" type="submit">SIGN UP FOR SPOTIFY</button>
            <hr/>
       <p> If you click "Log in with Facebook" and are not a Spotify user, you will be registered and you agree to Spotify's
            <a href="# " target="_blank ">Terms and Conditions</a> and
            <a href="# " target="_blank "> Privacy Policy</a>.</p>
        </form>      
        
        </div>
    );
}

}

export default log_in;
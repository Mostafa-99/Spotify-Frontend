import React, { Component } from 'react';
import '../SignUp/sign_up.css'
import spotify_black_logo from '../../Images/spotify_logo_black.png'
import '@fortawesome/react-fontawesome'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core'

class log_in extends Component {

    render(){
    return (
            <div class="centerbox">
            <img id="logo" src={spotify_black_logo} />
            <hr/>
            <h6>To continue, log in to Spotify.</h6>
            <form class="text-center border border-light p-5" action="#!">
            <button id="fbsignup2"><i class="fab fa-facebook fa-lg white-text mr-md-2 mr-3 fa-1x"> </i>CONTINUE WITH FACEBOOK</button>
            <button id="applesignup"><i class="fab fa-apple fa-lg white-text mr-md-2 mr-3 fa-1x"> </i>CONTINUE WITH APPLE</button>
            <h6>or</h6>
            <hr/>
            <input type="text" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="Email address or username"/>
            <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
            <br/>
            <div class="custom-control custom-checkbox" id="rememberme">
                <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
                <label class="custom-control-label" for="defaultUnchecked">Remember me</label>
            </div>

            <button id="login" type="submit ">LOG IN</button>
            <br/>
            <a href="# " target="_blank ">Forgot your password?</a>
            <hr/><br/>
            <h6>Don't have an account?</h6>
            <button id="signupnow" type="submit">SIGN UP FOR SPOTIFY</button>
            <hr/>
        If you click "Log in with Facebook" and are not a Spotify user, you will be registered and you agree to Spotify's
            <a href="# " target="_blank ">Terms and Conditions</a> and
            <a href="# " target="_blank "> Privacy Policy</a>.
        </form>      
        
        </div>
    );
}

}

export default log_in;
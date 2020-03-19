import React from 'react';
import '../SignUp/sign_up.css'
import spotify_black_logo from '../../Images/spotify_logo_black.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'


const sign_up = () => {
    return (
        <div>
        <div className="centerbox">
        <img id="logo" src={spotify_black_logo} />
        <hr></hr>
           <form className="text-center border border-light p-5" action="#!">
                <button id="fbsignup">SIGN UP WITH FACEBOOK</button>
                <h6>or</h6>
              
            <hr/>
            <h6>Sign up with your email address</h6>
            <input type="email" id="defaultRegisterFormEmail" className="form-control mb-4" placeholder="Email"></input>
            <input type="email" id="defaultRegisterFormEmail" className="form-control mb-4" placeholder="Confirm email"></input>
            <input type="password" id="defaultRegisterFormPassword" className="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock"></input>
            <br></br>
            <input type="text" id="defaultRegisterFormUsername" className="form-control" placeholder="What should we call you?"/>
            <br></br>
            <h5>Date of Birth </h5>
            <div className="row">
                <input type="number" id="register-dob-day " name="signup_form[dob_day] " required="required " max="31 " maxlength="2 " min="1 " pattern="[0-9]* " placeholder="Day " className="dob " data-msg-required="Please enter a valid day of the
                    month. " data-msg-number="Please enter a valid day of the month. " data-msg-min="Please enter a valid day of the month. " data-msg-max="Please enter a valid day of the month. " data-msg-maxlength="Please enter a valid day of the month. "/>

<div id="register-dob-month ">
                <select  name="signup_form[dob_month]" required="required " data-msg-required="Please enter your birth month. ">
                    <option value=" " selected="selected ">Month</option>
                    <option value="01 ">January</option>
                    <option value="02 ">February</option>
                    <option value="03 ">March</option>
                    <option value="04 ">April</option>
                    <option value="05 ">May</option>
                    <option value="06 ">June</option>
                    <option value="07 ">July</option>
                    <option value="08 ">August</option>
                    <option value="09 ">September</option>
                    <option value="10 ">October</option>
                    <option value="11 ">November</option>
                    <option value="12 ">December</option>
                </select>

            </div>
            <input type="number" id="register-dob-year " name="signup_form[dob_year] " required="required " max="2010 " maxlength="4 " min="1920 " pattern="[0-9]* " placeholder="Year " className="dob " data-msg-required="Please enter a valid year." data-msg-number="Please enter a valid year" data-msg-min="Please enter a valid year. " data-msg-max="Please enter a valid year. " data-msg-maxlength="Please enter a valid year. "/>
            </div>
            <br></br>
  
            
            <label className="radio-inline ">
            <input type="radio" name="gender" value="male" id="defaultRegisterFormGender" checked/>Male</label>  
            <label className="radio-inline ">
            <input type="radio" name="gender" value="female" id="defaultRegisterFormGender"/>Female</label> 
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked"/>
                <label className="custom-control-label" for="defaultUnchecked"><p>Share my registration data with Spotify for marketing purposes.</p></label>
            </div>
            <br></br>

            <p> By clicking on Sign up, you agree to Spotify's <a href="# " target="_blank ">Terms and Conditions of
                    Use</a>.</p>

            <p> To learn more about how Spotify collects, uses, shares and protects your personal data please read Spotify's
                <a href="# " target="_blank "> Privacy Policy</a>.</p>
            <button id="signup" type="submit ">SIGN UP</button>
           
            <h6>Already have an account?<a href="# " target="_blank "> Log in</a>.</h6>
            </form>   
        </div>
        </div>
    );
};

export default sign_up;
        
  
import React, { Component } from 'react';
import '../SignUp/sign_up.css'
import spotify_black_logo from '../../Images/spotify_logo_black.png'
import axios from 'axios'
import {Link,Redirect} from 'react-router-dom'


class SignUp extends Component {
    
    constructor() {
        super()
        
    this.state ={
        user:{
            email:'',
            password:'',
            username:'',
            gender:'',
            day:'',
            month:'',
            year:''
               },
        emailrecheck:'',
        status: 'not connected'
    }
        this.inputChangeHandler = this.inputChangeHandler.bind(this);

    }

    fbSignUpHandler = event=> {
        event.preventDefault();
        
        window.FB.login(function(response) {
            if (response.status === 'connected') {
                                // let fbtoken=response.authResponse.accessToken;
                                // let fbuserID=response.authResponse.userID;
                                //     axios.post('http://localhost:3000/loginWithFacebook/',
                                // {
                                // "access token":fbtoken,
                                // "facebook id":fbuserID
                                // }
                                // )   
                                // .then(res => {
                                //     if(res.status===200) // Successful
                                //     {
                                        
                                //         if(res.success===true || res.success==="true")
                                //         {
                                //             localStorage.setItem("isLoggedIn",'true');
                                //             localStorage.setItem("token",res.token);
                                //             localStorage.setItem("loginType", "fb");
                                //             this.setState({status: 'connected'});
                                //             window.location.reload(false);
                                //         }
                                        
                                //     }
                                //     if(res.status===304) // Unsuccessful
                                //     {
                                //         if(this.state.status!=="invalid")
                                //         this.setState({status: 'invalid'});
                                //     }
                                    
                                //    }).catch(
                                //         err =>{
                                //     alert(err.status + ": "+ err.message);
                                //     this.setState({status: 'invalid'});
                                // });

                this.setState({status: response.status})
                localStorage.setItem("loginType", "fb");
                localStorage.setItem("isLoggedIn", 'true');
                localStorage.setItem("token", response.authResponse.accessToken);
                localStorage.setItem("userID", response.authResponse.userID);
                console.log(localStorage);
                console.log(response);
                window.location.reload(false);
                
              } else {
                localStorage.setItem("loginType", "");
                localStorage.setItem("isLoggedIn", 'false');
                localStorage.setItem("token", '');
                localStorage.setItem("userID", '');              
              }
              console.log(response);
          }.bind(this), {scope: 'public_profile,email'});
       
    }

    validateEmail(email) {
        return email && email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    }

    validatePassword(psw) {
        return psw && psw.length >= 8
    }

    validateGender(gender) {
        // 0 = male
        // 1 = female
        // null/undefined = otherwise
        return gender === 0
            || gender === 1
            || gender === null
            || gender === undefined
            || gender === "";
    }

    validateUsername(name) {
        return name && name.match(/^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$/);
    }

    validateEmailAgain(email_again) {
        return this.state["email"] === email_again;
    }

    signUpHandler = event=> {
    
        //event.preventDefault();
        let sendDate=this.state.year+"-"+this.state.month+"-"+this.state.day;
        
        if(this.state.user.email!=='' && this.state.user.password!=='' && this.state.user.gender!=='' && this.state.user.username!=='' && this.state.user.day!=='' && this.state.user.month!=='' && this.state.user.year!=='')
        {
            if(this.state.user.email!==this.state.emailrecheck)
        {
            alert("Email and confirm Mail do not match!")
            return;
        }
            axios.post('http://localhost:3000/signUp/',
            {   
                "email":this.state.user.email,
                "password":this.state.user.password,
                "name":this.state.user.username,
                "gender":this.state.gender,
                "dateOfBirth":sendDate,   
            })   
            .then(res => {
                console.log(res.data);
                if(res.status===200) // Successful
                {
                    if(res.success===true || res.success==="true")
                    {
                        localStorage.setItem("isLoggedIn",'true');
                        localStorage.setItem("token",res.token);
                        localStorage.setItem("loginType", "email");
                        window.location.reload(false);
                    }
                }
                if(res.status===304) // Unsuccessful
                {
                    localStorage.setItem("isLoggedIn",'false');
                    localStorage.setItem("token",'');
                    localStorage.setItem("loginType", "");
                    alert("Server error sign up again")
                }
               })
            .catch(() =>{ 
                
                alert("Server error sign up again");});
        }
    }

    inputChangeHandler(evt) {
        if (!evt || !evt.target) return;

        const elem = evt.target;
        if (!elem.id) return;
        const type = elem.getAttribute("data-type");
        let value = elem.value;

        if (type === "gender") {
            if (value === "male") value = 0;
            if (value === "female") value = 1;
        }
        const is_valid = this.validateValue(value, type);
        if(!is_valid) return;

        let userCopy = JSON.parse(JSON.stringify(this.state.user))
        if(type==="psw")
        {
            this.setState({password: value});
            userCopy['password'] = value;
        }

        if(elem.id==="sign-up-form-username")
        {
            this.setState({username: value});
            userCopy['username'] = value;
        }

        if(type==="email")
        {
            this.setState({email: value});
            userCopy['email'] = value;
        }

        if(type==="email_again")
        {
            this.setState({emailrecheck: value});
        }

        if(elem.name==="gender")
        {
            if (value===1)
            {
                this.setState({gender:'Female'});
                userCopy['gender'] = 'Female';
            }
            else
            {
                this.setState({gender:'Male'});
                userCopy['gender'] = 'Male';
            }
        }

        if(elem.id==="sign-up-form-day")
        {
            this.setState({day:value});
            userCopy['day'] = value;
        }

        if(elem.id==="sign-up-form-month")
        {
            this.setState({month:value});
            userCopy['month'] =value;
        }

        if(elem.id==="sign-up-form-year")
        {
            this.setState({year:value});
            userCopy['year'] =value;
        }

        this.setState({
             user:userCopy 
            })
    }

    validateValue(val, type) {
        switch (type) {
            case "email":
                return this.validateEmail(val);
            case "email_again":
                return this.validateEmail(val);
            case "psw":
                return this.validatePassword(val);
            case "gender":
                return this.validateGender(val);
            case "username":
                return this.validateUsername(val);
            default:
                return true;
        }
    }

    componentDidMount =()=>{
        
        this.setState(()=> ({}))
        
          let show=localStorage.getItem("isLoggedIn");
          if(show==="true")
          this.setState({status:"connected"})
            else  
          this.setState({status:"not connected"})
    }

    componentDidUpdate(){
        
        console.log(this.state)

    }

    render(){
    return (
        <div id="my-sign-up">
            {this.state.status==="connected" ?
            <div>
                <Redirect to="/home"/>
            </div>
            :
            <div>
                <img id="logo" src={spotify_black_logo} alt=""/>
                <hr></hr>
         <div className="center-box">
           <form className="text-center" action="">
                <button type="button" id="fb-sign-up" className="my-spotify-button" onClick={this.fbSignUpHandler}>SIGN UP WITH FACEBOOK</button>
                <div className="col-xs-12">
                    <div className="divider">
                    <strong className="divider-title ng-binding">or</strong>
                    </div>
                </div>
            {this.state.status==="invalid"?
            <div id="invalid-message">
            Email or username already taken.
            </div>
            :
            <div>
            </div>
            }
            <h6>Sign up with your email address</h6>
            <input type="email" data-type="email" onChange={this.inputChangeHandler} id="sign-up-form-email" className="form-control mb-4" placeholder="Email" data-err="Enter Correct Email" required></input>
            <input type="email" data-type="email_again" onChange={this.inputChangeHandler} id="sign-up-form-email-confirm" className="form-control mb-4" placeholder="Confirm email" data-err="Enter Correct Confirm Email" required></input>
            <input type="password" data-type="psw" onChange={this.inputChangeHandler} id="sign-up-form-password" className="form-control" placeholder="Password" maxLength="30" minLength="8" data-err="Enter Correct Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" required></input>
            <br></br>
            <input  type="text" data-type="username" onChange={this.inputChangeHandler} id="sign-up-form-username" className="form-control" placeholder="What should we call you?" data-err="Enter Correct Username" required/>
            <br></br>
            <h5>Date of Birth </h5>
            <div className="row">
                <input type="number" id="sign-up-form-day" name="signup_form[dob_day]" onChange={this.inputChangeHandler}  required="required" max="31" maxLength="2" min="1" pattern="[0-9]*" placeholder="Day" className="dob " data-err="Please enter a valid day of the month"></input>
                <select id="sign-up-form-month"  name="signup_form[dob_month]"  onChange={this.inputChangeHandler} required data-err="Please enter your birth month.">
                    <option value="" >Month</option>
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
                <input type="number" id="sign-up-form-year" name="signup_form[dob_year]" onChange={this.inputChangeHandler} required max="2010" maxLength="4" min="1950" pattern="[0-9]*" placeholder="Year" className="dob" data-err="Please enter a valid year." data-msg-number="Please enter a valid year" data-msg-min="Please enter a valid year." data-msg-max="Please enter a valid year. " data-msg-maxlength="Please enter a valid year. "/>
            </div>

            <br></br>
  
            <label className="radio-inline">
            <input type="radio" name="gender" data-type="gender" onChange={this.inputChangeHandler} id="gender-male" value="male" required/>Male</label>  
            <label className="radio-inline">
            <input type="radio" name="gender" data-type="gender" onChange={this.inputChangeHandler} id="gender-female" value="female" required />Female</label> 
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="sign-up-form-news"/>
                <label className="custom-control-label" htmlFor="sign-up-form-news"><p>Share my registration data with Spotify for marketing purposes.</p></label>
            </div>
            <br></br>

            <p> By clicking on Sign up, you agree to Spotify's <a href="https://www.spotify.com/eg-en/legal/end-user-agreement/" target="_blank ">Terms and Conditions</a>.</p>
            <p> To learn more about how Spotify collects, uses, shares and protects your personal data please read Spotify's
                <a href="https://www.spotify.com/eg-en/legal/privacy-policy/" target="_blank "> Privacy Policy</a>.</p>
            <button className="my-spotify-button" id="sign-up" type="submit" onClick={this.signUpHandler}>SIGN UP</button>
           
            <h6>Already have an account? <Link to="/login">Log in</Link>.</h6>
            <br></br>
            </form>   
            </div>
            </div>
            } 
        </div>
        
        
        );
    }
    
    }
    
    export default SignUp;
        
  
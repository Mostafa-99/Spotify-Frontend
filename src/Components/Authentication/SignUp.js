import React, { Component } from 'react';
import './SignUp.css'
import spotify_black_logo from '../../Images/spotify_logo_black.png'
import {ConfigContext} from '../../Context/ConfigContext'
import axios from 'axios'
import {Link,Redirect} from 'react-router-dom'

/**
 * Sign up Page Component
 * @extends Component
 */
class SignUp extends Component {
    static contextType=ConfigContext;
    constructor() {
        super()
        
    this.state ={
        email:'',
        password:'',
        username:'',
        gender:'',
        day:'',
        month:'',
        year:'',
        emailrecheck:'',
        emptypass:false,
        emptyemail:false,
        emptyname:false,
        dayerror:false,
        montherror:false,
        yearerror:false,
        gendererror:false,
        emptyconfirmemail:false,
        emailnotequal:false,
        status: 'not connected',
        invalid:false
    }
        this.inputChangeHandler = this.inputChangeHandler.bind(this);

    }

     /**
     * Function handling sign up request with Facebook
     * 
     */
    fbSignUpHandler = event=> {
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
                                    localStorage.setItem("isLoggedIn",'true');
                                    localStorage.setItem("token",res.data.token);
                                    localStorage.setItem("loginType", "fb");
                                    localStorage.setItem("userID", response.authResponse.userID);
                                    this.setState({status: 'connected'});
                                   // window.location.reload(false);
                                }
                            }
                            else // Unsuccessful
                            {  
                                alert(res.data.message)
                            }   
                            }).catch(err =>{

                                alert(err)
                            })
                //window.location.reload(false);
                
              } 
          }.bind(this), {scope: 'public_profile,email'});
       
    }

    /**
     * Function to check the Email textbox has valid email format
     * @param {string} Email - input email.
     */
    validateEmail(email) {
        if(this.state.emptyemail===true)
            this.setState({emptyemail: false});
        if(this.state.emailnotequal===true)
            this.setState({emailnotequal: false});
        this.setState({email: ""});    
        //return email && email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        if(email && email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
        return true;
        else
        return false;
    }

    /**
     * Function to check the Password textbox has valid password criteria
     * @param {string} Password - input password.
     */
    validatePassword(psw) {
        if(this.state.emptypass===true)
         this.setState({emptypass: false});
         this.setState({password: ""});    
         if(psw.length>=8)
         return true;
         else
         return false;
        //return psw && psw.length >= 8
    }

    /**
     * Function to check the gender checkbox is checked and valid
     * @param {boolean} Gender - user gender.
     */
    validateGender(gender) {
        if(this.state.gendererror===true)
         this.setState({gendererror: false});
        this.setState({gender: ""});    
        // 0 = male
        // 1 = female
        // null/undefined = otherwise
        //  return gender === 0
        //      || gender === 1
        //     || gender === null
        //     || gender === undefined
        //     || gender === "";
        if(gender===0 || gender===1)
        return true;
        else
        return false;
        
    }

     /**
     * Function to check the Name textbox has valid name format
     * @param {string} Name - user name.
     */
    validateUsername(name) {
        if(this.state.emptyname===true)
         this.setState({emptyname: false});
         this.setState({username: ""}); 
        return name && name.match(/^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$/);
           
    }

    /**
     * Function to check the Confrim Email textbox has valid email format and matches Email.
     * @param {string} Email - user confirm email.
     */
    validateEmailAgain(email_again) {
        if(this.state.emptyconfirmemail===true)
            this.setState({emptyconfirmemail: false});
        if(this.state.emailnotequal===true)
            this.setState({emailnotequal: false});
        this.setState({emailrecheck: ""});    
        return email_again && email_again.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    }

    /**
     * Function handling Sign up request with Email and Password
     * 
     */
    signUpHandler = event=> {
    
        event.preventDefault();
        let sendDate=this.state.year+"-"+this.state.month+"-"+this.state.day;
        if(this.state.email==="" && this.state.emptyemail===false)
            this.setState({emptyemail: true});
        if(this.state.password==="" && this.state.emptypass===false)
            this.setState({emptypass: true});
        if(this.state.emailrecheck==="" && this.state.emptyconfirmemail===false)
            this.setState({emptyconfirmemail: true});
        if(this.state.email!==this.state.emailrecheck && this.state.emailnotequal===false)
            this.setState({emailnotequal: true});
        if(this.state.username==="" && this.state.emptyname===false)
            this.setState({emptyname: true});
       
        if((this.state.day==="" || parseInt(this.state.day, 10)<=0 || parseInt(this.state.day, 10)>31) && this.state.dayerror===false)
            this.setState({dayerror: true});
        if((this.state.month==="" || parseInt(this.state.month, 10)<=0 || parseInt(this.state.month, 10)>12) && this.state.montherror===false)
            this.setState({montherror: true});
        if((this.state.year==="" || parseInt(this.state.year, 10)<=1949 || parseInt(this.state.year, 10)>2010) && this.state.yearerror===false)
            this.setState({yearerror: true});
        if(this.state.gender==="" && this.state.gendererror===false)
            this.setState({gendererror: true});

        if(this.state.email!=='' && this.state.password!=='' && this.state.gender!=='' && this.state.username!=='' && this.state.day!=='' && this.state.month!=='' && this.state.year!=='')
        {

            axios.post(this.context.baseURL+'/signUp',
            {   
                "email":this.state.email,
                "password":this.state.password,
                "name":this.state.username,
                "gender":this.state.gender,
                "dateOfBirth":sendDate,   
            })   
            .then(res => {
                if(res.status===200) // Successful
                {
                    if(res.data.success===true || res.data.success==="true")
                    {
                        localStorage.setItem("isLoggedIn",'true');
                        localStorage.setItem("token",res.data.token);
                        localStorage.setItem("loginType", "email");

                        this.setState({status: 'connected'});
                        //window.location.reload(false);
                    }
                }
                else // Unsuccessful
                {
                    this.setState({invalid: true});
                    if(res.status===400)
                    {
                    if(this.state.status!=="invalid")
                        this.setState({status: 'invalid'});
                    }
                    else
                    alert(res.data.message)
                    
                }
               }).catch(err => {
                if(err.response.status===400 || err.response.status===401)
                {
                    if(this.state.status!=="invalid")
                        this.setState({status: 'invalid'});
                    this.setState({invalid: true});
                }
                else
                alert(err)

               })
        }
    }

    /**
     * Function handling input changes in inputs each with it's valid input type handler to page's state
     * @param {event} Event - input onchange event.
     */
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

        
        if(type==="psw")
        {
            this.setState({password: value});
        }

        if(elem.id==="sign-up-form-username")
        {
            this.setState({username: value});
        }

        if(type==="email")
        {
            this.setState({email: value});
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
            }
            else
            {
                this.setState({gender:'Male'});
            }
        }

        if(elem.id==="sign-up-form-day")
        {
            this.setState({day:value});
            if(this.state.dayerror===true)
                this.setState({dayerror: false});
        }

        if(elem.id==="sign-up-form-month")
        {
            this.setState({month:value});
            if(this.state.montherror===true)
                this.setState({montherror: false});
        }

        if(elem.id==="sign-up-form-year")
        {
            this.setState({year:value});
            if(this.state.yearerror===true)
                this.setState({yearerror: false});
        }

    }

    /**
     * Function to choose specific validating function depending on input type.
     * @param {string} Value - input value.
     * @param {string} Type - input type.
     */
    validateValue(val, type) {
        switch (type) {
            case "email":
                return this.validateEmail(val);
            case "email_again":
                return this.validateEmailAgain(val);
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

     /**
     * SignUp Component Mount state Intialization
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

    render(){
    return (
        <div id="my-sign-up">
            {this.state.status==="connected" ?
            <div>
                <Redirect to="/"/>
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
            {this.state.invalid===true?
            <div id="invalid-message">
            Email already taken.
            </div>
            :
            <div>
            </div>
            }

            <h6>Sign up with your email address</h6>
            <input type="email" data-type="email" onChange={this.inputChangeHandler} id="sign-up-form-email" className="form-control mb-3" placeholder="Email" data-err="Enter Correct Email" required></input>
            {this.state.emptyemail===true?
            <div id="empty-email" className="error-message">
            Please enter your email address.
            </div>
            :
            <div>
            </div>
            }

            <input type="email" data-type="email_again" onChange={this.inputChangeHandler} id="sign-up-form-email-confirm" className="form-control mb-3" placeholder="Confirm email" data-err="Enter Correct Confirm Email" required></input>
            {this.state.emptyconfirmemail===true?
            <div id="empty-confirm-email" className="error-message">
            Please enter your email address.
            </div>
            :
            <div>
            </div>
            }

            {this.state.emailnotequal===true?
            <div id="match-confirm-email" className="error-message">
            Please confirm matching your email addresses.
            </div>
            :
            <div>
            </div>
            }

            <input type="password" data-type="psw" onChange={this.inputChangeHandler} id="sign-up-form-password" className="form-control mb-3" placeholder="Password" maxLength="30" minLength="8" data-err="Enter Correct Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" required></input>
            {this.state.emptypass===true?
            <div id="empty-pass" className="error-message">
            Please enter a valid password (Minimum Length 8).
            </div>
            :
            <div>
            </div>
            }

            <input  type="text" data-type="username" onChange={this.inputChangeHandler} id="sign-up-form-username" className="form-control mb-3" placeholder="What should we call you?" data-err="Enter Correct Username" required/>
            {this.state.emptyname===true?
            <div id="empty-name" className="error-message">
                What should we call you?
            </div>
            :
            <div>
            </div>
            }

            
            <h5>Date of Birth </h5>
            <div className="row">
                <input type="number" id="sign-up-form-day" name="signup_form[dob_day]" onChange={this.inputChangeHandler}  required="required" max="31" maxLength="2" min="1" pattern="[0-9]*" placeholder="Day" className="dob " data-err="Please enter a valid day of the month"></input>
                <select id="sign-up-form-month"  name="signup_form[dob_month]"  onChange={this.inputChangeHandler} required data-err="Please enter your birth month.">
                    <option value="" >Month</option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                <input type="number" id="sign-up-form-year" name="signup_form[dob_year]" onChange={this.inputChangeHandler} required max="2010" maxLength="4" min="1950" pattern="[0-9]*" placeholder="Year" className="dob" data-err="Please enter a valid year." data-msg-number="Please enter a valid year" data-msg-min="Please enter a valid year." data-msg-max="Please enter a valid year. " data-msg-maxlength="Please enter a valid year. "/>
            </div>

            <br></br>
            {this.state.dayerror===true?
            <div id="day-error" className="error-message">
                Please enter a valid day of the month.
            </div>
            :
            <div>
            </div>
            }

            {this.state.montherror===true?
            <div id="month-error" className="error-message">
                Please enter your birth month.
            </div>
            :
            <div>
            </div>
            }

            {this.state.yearerror===true?
            <div id="year-error" className="error-message">
                Please enter a valid year.
            </div>
            :
            <div>
            </div>
            }
  
            <label className="radio-inline">
            <input type="radio" name="gender" data-type="gender" onChange={this.inputChangeHandler} id="gender-male" value="male" required/>Male</label>  
            <label className="radio-inline">
            <input type="radio" name="gender" data-type="gender" onChange={this.inputChangeHandler} id="gender-female" value="female" required />Female</label>

            {this.state.gendererror===true?
            <div id="gender-error" className="error-message">
                Please indicate your gender.
            </div>
            :
            <div>
            </div>
            }

            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="sign-up-form-news"/>
                <label className="custom-control-label" htmlFor="sign-up-form-news"><p>Share my registration data with Spotify for marketing purposes.</p></label>
            </div>
            <br></br>

            <p> By clicking on Sign up, you agree to Spotify's <a href="https://www.spotify.com/eg-en/legal/end-user-agreement/" target="_blank ">Terms and Conditions</a>.</p>
            <p> To learn more about how Spotify collects, uses, shares and protects your personal data please read Spotify's
                <a href="https://www.spotify.com/eg-en/legal/privacy-policy/" target="_blank "> Privacy Policy</a>.</p>
            <button className="my-spotify-button" id="sign-up" type="button" onClick={this.signUpHandler}>SIGN UP</button>
           
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
        
  
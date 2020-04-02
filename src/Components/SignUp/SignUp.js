import React, { Component } from 'react';
import '../SignUp/sign_up.css'
import spotify_black_logo from '../../Images/spotify_logo_black.png'
import axios from 'axios'
import {Link} from 'react-router-dom'


class SignUp extends Component {
    
    constructor() {
        super()
        
    this.state ={
        user:{
            email:'',
            password:'',
            username:'',
            gender:false, //0 male , 1 female
            day:'',
            month:'',
            year:''
               },
        rememberme:false,
        emailrecheck:'',
        accessToken: '',
        expiresIn:'',
        signedRequest:'',
        userID:' ',
        status: 'not connected'
    }

        this.inputChangeHandler = this.inputChangeHandler.bind(this);

    }

    fbSignUpHandler = event=> {
        event.preventDefault();
        window.FB.login(function(response) {
            //let statusNow = JSON.parse(JSON.stringify(response.status));
            if (response.status === 'connected') {
                //this.setState({status: response.status});
                localStorage.setItem("id", response.authResponse.userID);
                localStorage.setItem("token", response.authResponse.accessToken);
                alert("YES");
              } else {
                alert("NO");
              }
              console.log(response);
              console.log(localStorage);
          }, {scope: 'public_profile,email'});
       
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
        const user={email:this.state.email,password:this.state.password,gender:this.state.gender}
        const checkemail = user.email;
        const checkpsw = user.password;
        const checkgender = user.gender;
        const is_email_valid = this.validateEmail(checkemail);
        const is_psw_valid = this.validatePassword(checkpsw);
        const is_gender_valid = this.validateGender(checkgender);

        if(is_email_valid && is_psw_valid && is_gender_valid)
        {
           if(checkemail===this.state.emailrecheck)
           {
            axios.post('https://jsonplaceholder.typicode.com/users',{user})   
            .then(res => {console.log(res.data);alert("yes data")}).catch(() =>{ 
                
                alert("no data");});
           }
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
                this.setState({gender:true});
                userCopy['gender'] = true;
            }
            else
            {
                this.setState({gender:false});
                userCopy['gender'] = false;
            }
        }

        if(elem.id==="sign-up-form-day")
        {
            this.setState({day:value});
            userCopy['day'] = value;
        }

        if(elem.id==="sign-up-form-month")
        {
            this.setState({month: value});
            userCopy['month'] = value;
        }

        if(elem.id==="sign-up-form-year")
        {
            this.setState({year: value});
            userCopy['year'] = value;
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

    componentDidUpdate(){
        
        console.log(this.state)

    }

    render(){
    return (
        <div id="my-sign-up">
        <div className="center-box">
        <img id="logo" src={spotify_black_logo} alt=""/>
        <hr></hr>
           <form className="text-center p-5" action="">
                <button type="button" id="fb-sign-up" className="my-spotify-button" onClick={this.fbSignUpHandler}>SIGN UP WITH FACEBOOK</button>
                <h6>or</h6>
              
            <hr/>
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
           
            <h6>Already have an account? <Link to="../Login">Log in</Link>.</h6>
            </form>   
        </div>
        </div>
        
        );
    }
    
    }
    
    export default SignUp;
        
  
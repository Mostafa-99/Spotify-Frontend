import React, { Component } from 'react';
import './PasswordReset.css'
import '../Button/SpotifyButton.css'
import '../Authentication/SignUp.css'
import {ConfigContext} from '../../Context/ConfigContext'
import axios from 'axios'
import { checkValidity } from '../../ReduxStore/Shared';

/**
 * Forgot password Component
 * @extends Component
 */
class PasswordReset extends Component {
    static contextType=ConfigContext;
    constructor() {
        super()
    this.state ={
            email:'',
            status:'not done'
        }
    }

    /**
     * Function sending new password request to email address.
     * 
     */
    resetPassowrd = event=> {
        event.preventDefault();
        if(checkValidity(this.state.email,"email"))
        {
            //console.log(this.state.email);
            axios.post(this.context.baseURL+'/resetPassword',
            {
            "email":this.state.email
            }
            )   
            .then(res => {
                if(res.status===200 || res.status===204) // Successful
                {
                        this.setState({status: 'done'});
                        
                }
                else // Unsuccessful
                {
                    this.setState({status: 'not-linked-email'});     
                }  
                }).catch(err =>{  
                    alert(err)
                })
        }
        else{
            if(this.state.email==="")
                {
                    this.setState({status: 'empty-email'});  
                }
                else
                {
                    this.setState({status: 'invalid-email'});    
                }
         }
    }

    /**
     * Forgot password Component Mount state Intialization
     * 
     */
    componentDidMount =()=>{
       
        this.setState(()=> ({}))
    }

    /**
     * Function handling change in email textbox to the page's state
     * 
     */
    handleEmailChange = event=> {
        event.preventDefault();
            this.setState({status: 'not done'}); 
        this.setState({email: event.target.value});
    }

    render()
    {
        const doneOrNot = this.state.status;  
        return(
            
    <div id="my-password-reset">
        <h1>Password Reset</h1>
        {doneOrNot==="done" ? (
                    <p>A message has been sent to you by email with instructions on how to reset your password.</p>
                )
                :
                (
            <div>
                    <p>Enter your Spotify email address that you used to register. We'll send you an email with a link to reset your password.</p>
                    <label>Email address</label>
                    <input  type="email" id="form-email" onChange={this.handleEmailChange} className="form-control mb-4"/>
                        {this.state.status==="empty-email"?
                        <div id="empty-email" className="error-message">
                        This field is required.
                        </div>
                        :
                        <div>
                        </div>
                        }

                        {this.state.status==="invalid-email"?
                        <div id="invalid-email" className="error-message">
                        Please Enter a valid email address.
                        </div>
                        :
                        <div>
                        </div>
                        }

                        {this.state.status==="not-linked-email"?
                        <div id="not-linked-email" className="error-message">
                        The email address you entered is not linked to a Spotify account.<br></br>
                        You can either try another email address.
                        </div>
                        :
                        <div>
                        </div>
                        }
                    <button className="my-spotify-button" id="reset-psw-send" onClick={this.resetPassowrd}>Send</button>
                    <h6>If you still need help, contact <a href="https://support.spotify.com/eg-en/contact-spotify-anonymous/?_gl=1*1v0qp34*_gcl_aw*R0NMLjE1ODM3OTg0NTQuQ2owS0NRancwcGZ6QlJDT0FSSXNBTmkwZzB2SU5vSU14WlJ3ZXpOYmswZ0xPZ0V2dFYzZGVfZGtISFhOdDNCNkdXYXdNRm9QcHl6N1hKRWFBb2hZRUFMd193Y0I.*_gcl_dc*R0NMLjE1ODM3OTg0NTQuQ2owS0NRancwcGZ6QlJDT0FSSXNBTmkwZzB2SU5vSU14WlJ3ZXpOYmswZ0xPZ0V2dFYzZGVfZGtISFhOdDNCNkdXYXdNRm9QcHl6N1hKRWFBb2hZRUFMd193Y0I.&_ga=2.208974481.2098539342.1585700220-1802051146.1581535690&_gac=1.150861252.1583798470.Cj0KCQjw0pfzBRCOARIsANi0g0vINoIMxZRwezNbk0gLOgEvtV3de_dkHHXNt3B6GWawMFoPpyz7XJEaAohYEALw_wcB" target="_blank ">Spotify Support.</a></h6>
        
            </div>
            )}
    </div>
        )
    }
}

export default PasswordReset;
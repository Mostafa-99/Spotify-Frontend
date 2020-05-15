import React, { Component } from 'react'
import './PasswordReset.css'
import '../Button/SpotifyButton.css'
import '../Authentication/SignUp.css'
import {Link} from 'react-router-dom'
import {ConfigContext} from '../../Context/ConfigContext'
import axios from 'axios'

/**
 * New password after reset Component
 * @extends Component
 */
export default class PasswordChange extends Component {
    static contextType=ConfigContext;
    constructor() {
        super()
    this.state ={
            password:'',
            confirmpassword:'',
            status:'not done',
            emptypass:false,
            emptyconfirm:false,
            matchpass:false
        }
    }

    /**
     * New password after reset Component Mount state Intialization
     * 
     */
    componentDidMount =()=>{
       
        this.setState(()=> ({}))
    }

    /**
     * Function to check the Password textbox has valid password criteria
     * @param {string} Password - input password.
     */
    validatePassword(psw) {
        if(psw.length>=8)
        return true;
        else
        return false;
       // return psw && psw.length >= 6
    }

    /**
     * Function handling change in password textbox to the page's state
     * 
     */
    handlePswChange = event=> {
        event.preventDefault();
        this.setState({emptypass: false});
        this.setState({matchpass:false})
        this.setState({password: event.target.value});
    }

    /**
     * Function handling change in password confirm textbox to the page's state
     * 
     */
    handlePswConfirmChange = event=> {
        event.preventDefault();
        this.setState({emptyconfirm: false});
        this.setState({matchpass:false})
        this.setState({confirmpassword: event.target.value});
    }

    /**
     * Function sending new password request if all validation passed.
     * 
     */
    changePassowrd = event=> {
        event.preventDefault();
        if(this.state.password==="" || !this.validatePassword(this.state.password))
        this.setState({emptypass: true});  

        if(this.state.confirmpassword==="" || !this.validatePassword(this.state.confirmpassword))
        this.setState({emptyconfirm: true});

        if(!this.state.emptyconfirm && !this.state.emptypass)
        {
            if(this.state.password===this.state.confirmpassword)
            {
                const mytoken=window.location.pathname.replace('resetPassword/',"")
                console.log(this.context.baseURL+'/resetPassword'+mytoken);
                axios.post(this.context.baseURL+'/resetPassword'+mytoken,
                {
                "newPassword":this.state.password,
                "passwordConfirmation": this.state.confirmpassword
                }
                )   
                .then(res => {
                    if(res.status===200 || res.status===204) // Successful
                    {
                            this.setState({status: 'done'});
                            
                    } 
                    }).catch(err =>{

                        alert(err)
                    })
                //console.log(mytoken);
            }
            else
            {
                this.setState({matchpass:true})
            }
        }
        
    }

    render() {
        return (
            <div id="my-password-reset">
                {this.state.status==="done"?
                (
                    <div>
                        <h2>Password updated</h2>
                        <p>Sweet! Your new password has now been set and now you can log in.<Link to="/login" className="hyper-link">Go to account</Link></p>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </div>
                ):
                (
                    <div>
                        <h2>Reset Password</h2>
                <label>New password</label>
                <input  type="password" id="new-password" onChange={this.handlePswChange} className="form-control mb-4"/>
                         {this.state.emptypass?
                        <div id="empty-pass" className="error-message">
                        This field requires a valid password (Minimum Length=8).
                        </div>
                        :
                        <div>
                        </div>
                        }
                <label className="pl-5">Repeat new password</label>
                <input  type="password" id="confirm-new-password" onChange={this.handlePswConfirmChange} className="form-control mb-4"/>
                        {this.state.emptyconfirm?
                        <div id="empty-confirm" className="error-message">
                        This field requires a valid password (Minimum Length=8).
                        </div>
                        :
                        <div>
                        </div>
                        }

                        {this.state.matchpass?
                        <div id="match-pass" className="error-message">
                        Please match your passwords.
                        </div>
                        :
                        <div>
                        </div>
                        }


                <button className="my-spotify-button mb-5" id="reset-psw-send" onClick={this.changePassowrd}>Send</button>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </div>
                )
                }
                
            </div>
        )
    }
}

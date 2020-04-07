import React, { Component } from 'react';
import './PasswordReset.css'
import '../Button/spotify_button.css'

class PasswordReset extends Component {
    render()
    {
        return(
    <div id="my-password-reset">
        
        <h1>Password Reset</h1>
        <p>Enter your Spotify username, or the email address that you used to register. We'll send you an email with your username and a link to reset your password.</p>
        <label>Email address</label>
        <input required type="email" id="form-email" onChange={this.handleEmailChange} className="form-control mb-4"/>
        <button className="my-spotify-button">Send</button>
        <h6>If you still need help, contact <a href="https://support.spotify.com/eg-en/contact-spotify-anonymous/?_gl=1*1v0qp34*_gcl_aw*R0NMLjE1ODM3OTg0NTQuQ2owS0NRancwcGZ6QlJDT0FSSXNBTmkwZzB2SU5vSU14WlJ3ZXpOYmswZ0xPZ0V2dFYzZGVfZGtISFhOdDNCNkdXYXdNRm9QcHl6N1hKRWFBb2hZRUFMd193Y0I.*_gcl_dc*R0NMLjE1ODM3OTg0NTQuQ2owS0NRancwcGZ6QlJDT0FSSXNBTmkwZzB2SU5vSU14WlJ3ZXpOYmswZ0xPZ0V2dFYzZGVfZGtISFhOdDNCNkdXYXdNRm9QcHl6N1hKRWFBb2hZRUFMd193Y0I.&_ga=2.208974481.2098539342.1585700220-1802051146.1581535690&_gac=1.150861252.1583798470.Cj0KCQjw0pfzBRCOARIsANi0g0vINoIMxZRwezNbk0gLOgEvtV3de_dkHHXNt3B6GWawMFoPpyz7XJEaAohYEALw_wcB" target="_blank ">Spotify Support.</a></h6>
        
    </div>



        )
    }
}

export default PasswordReset;
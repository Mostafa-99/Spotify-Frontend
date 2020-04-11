import React from "react";
import './AccountHelp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import SideBar from '../SideBar/SideBar'
import  { Component } from "react";
/** Class of Account help. It is the body that conatains articles
 * @extends Component
 */
class AccountHelp extends Component {
    render() {
        {document.title ="Account Help - Spotify"}
        return(       
            <div id="body-overrides">
                <div className="container body" id="dev-items"> 
                    <SideBar/>
                    <div className="account-help item" id="account-help department">
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb" id="help-breadcrumb">
                            <li className="breadcrumb-item"><Link to="/help">Home</Link> </li>
                            <li className="breadcrumb-item active" id="typing" aria-current="page">Account Help</li>
                        </ol>
                        </nav>
                        <div className="container">
                        <h1 id="help-arts-headers">Account Help</h1>
                        <h2 className="account-help-arts-header"id="help-arts-headers ">ARTICLES</h2>
                        <ul className="help-art-account-help" id="help-arts-links">
                        <Link to="/profile-picture" >
                            <li className="inside-links">Profile picture</li>
                        </Link>
                        <Link to="/using-spotify-with-facebook" >
                            <li className="inside-links">Spotify and Facebook</li>
                        </Link>
                        <Link to="/cannot-activate-trial" >
                            <li className="inside-links">Can't activate Premium trial</li>
                        </Link>
                        <Link to="/how-to-log-out" >
                            <li className="inside-links">How to log out</li>
                        </Link>
                        <Link to="/change-email-address" >
                            <li className="inside-links">Change email address</li>
                        </Link>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
}}
export default AccountHelp
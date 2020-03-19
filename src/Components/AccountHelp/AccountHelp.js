import React from "react";
import ReactDOM from 'react-dom';
import './AccountHelp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

function AccountHelp(){
    {document.title ="Account Help - Spotify"}
    return( 
        
            
        <body id="bootstrap-overrides">
            <div className="container body" id="dev-items"> 
                <div className="help-topics item" id="help-topics">
                    <h2 className="ht-header-large">How can we help you?</h2>
                    <h2 className="ht-header-small">Help topics</h2>
                    <div className="ht-topics">
                    <h3 className="ht-topics-ap">Account & Payment</h3>
                    <ul className="account-help-btn">
                        <Link to="/account_help/" ><li>Account Help</li> </Link>
                    </ul>
                    </div>
                </div>
                <div className="account-help item" id="account-help">
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb" id="help-breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Account Help</li>
                    </ol>
                    </nav>
                    <div >
                    <h1>Account Help</h1>
                    <h2>ARTICLES</h2>
                    <ul className="help-art" id="help-arts-links">
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
        </body>
    )
}
export default AccountHelp
import React from "react";
import ReactDOM from 'react-dom';
import './AccountHelp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Footer from '../Footer/footer.js'
import Navbar from '../Navigation/navbar.js'
function AccountHelp(){
    {document.title ="Account Help - Spotify"}
    return(       
        <div id="body-overrides">
            <Navbar/>
            <div className="container body" id="dev-items"> 
                <div className="help-topics item" id="help-topics department">
                    <h2 className="ht-header-large"id="help-arts-headers">How can we help you?</h2>
                    <h2 className="ht-header-small"id="help-arts-headers">Help topics</h2>
                    <div className="ht-topics">
                    <h3 className="ht-topics-ap" id="help-arts-headers">Account & Payment</h3>
                    <ul className="account-help-btn">
                        <Link to="/account_help/" ><li>Account Help</li> </Link>
                    </ul>
                    </div>
                </div>
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
            <Footer/>
        </div>
    )
}
export default AccountHelp
import React from "react"
import ReactDOM from 'react-dom'
import './Articles.css'
import AccountHelp from '../AccountHelp'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Switch,Route} from "react-router-dom";
import {Link} from 'react-router-dom';
function CanNotActivatePremiumTrial(){
    {document.title ="Can't activate Premium trial - Spotify"}
    return(
        
    <div>    
        <div id="bootstrap-overrides">
                <div className="container body" > 
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
                    <div className="account-help item">
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb" id="aricle-breadcrumb">
                            <li className="breadcrumb-item"><Link to="/help"><a>Home</a></Link> </li>
                            <li className="breadcrumb-item">    <Link to="/account_help/" > <a >Account Help</a>    </Link> </li>
                        </ol>
                        </nav>
                        <div className="instructions">
                            <h1>Can't activate Premium trial</h1>
                            <ul className="help-art" id="article-header-text">
                                <li >If you’re having trouble signing up to an introductory offer, remember that you won’t be eligible if you’ve already had or tried Premium in the past (unless stated otherwise).</li>
                                <li ><strong>Tip:</strong> Can’t remember if you’ve had Premium before? Check out your <strong>receipts page</strong>.</li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    </div>    
    )
}
export default CanNotActivatePremiumTrial
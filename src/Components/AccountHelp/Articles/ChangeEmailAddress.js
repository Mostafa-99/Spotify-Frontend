import React from "react"
import ReactDOM from 'react-dom'
import './Articles.css'
import AccountHelp from '../AccountHelp'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Switch,Route} from "react-router-dom";
import {Link} from 'react-router-dom';
function ChangeEmailAddress(){
    {document.title ="Change email address - Spotify"}
    return(
        
    <div>    
        <head><link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link></head>
        <body id="bootstrap-overrides">
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
                            <h1>Change email address</h1>
                            <ol id="before-articles">
                                <li>Log in to your <a href="">account page</a>.</li>
                                <li>Click <strong>EDIT PROFILE</strong>.</li>
                                <li>Under <strong>Email</strong>, enter your new email address.</li>
                                <li>Confirm your password.</li>
                                <li>Click <strong>SAVE PROFILE</strong>.</li>
                            </ol> 
                            <ul className="help-art" id="article-header-text">
                                <li >And you're done! A confirmation email will be sent to both the old and new email address detailing the changes.</li>
                            </ul>
                            <h1>Didn't work?</h1>
                            <div className="row container">
                                <div className="item">
                                    <hr></hr>
                                    <div className="collapse-btn item-header" type="button" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                                        <h3 className="item-header">It won't let me enter a new email address</h3>
                                        <i className="material-icons arrow-down">keyboard_arrow_down</i>
                                    </div>
                                    <div className="col">
                                        <div className="collapse multi-collapse" id="multiCollapseExample1">
                                            <div className="card card-body">
                                                <ul className="help-art" id="article-header-text">
                                                    <li >This means your Spotify account was created through Facebook. It’s not possible to change the email address on accounts created this way, but you do have the option to create a new account without Facebook. </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <hr></hr>
                                    <div className="collapse-btn item-header" type="button"  data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
                                        <h3 className="item-header">Another account is using my email address</h3>   
                                        <i className="material-icons rotate-arrow">keyboard_arrow_down</i>
                                    </div>
                                        <div className="col">
                                            <div className="collapse multi-collapse" id="multiCollapseExample2">
                                                <div className="card card-body">
                                                    <ul className="help-art" id="article-header-text">
                                                        <li >If it’s possible you’ve already used your email address on another account, try using our <a href="">password reset form</a> to get access to that account.</li>
                                                    </ul> 
                                                </div>
                                            </div>
                                        </div>
                                    <hr></hr>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </body>
    </div>    
    )
}
export default ChangeEmailAddress
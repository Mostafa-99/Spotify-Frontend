import React from "react"
import ReactDOM from 'react-dom'
import './Articles.css'
import AccountHelp from '../AccountHelp'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Switch,Route} from "react-router-dom";
import {Link} from 'react-router-dom';
import Footer from '../../../Footer/footer.js'
import Navbar from '../../../Navigation/navbar.js'
import SideBar from '../../SideBar/SideBar'
function ChangeEmailAddress(){
    {document.title ="Change email address - Spotify"}
    return(
        <div id="body-overrides">
                <Navbar/>
                <div className="container body" id="dev-items"> 
                    <SideBar/>
                    <div className="account-help item">
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb" id="article-breadcrumb">
                            <li className="breadcrumb-item"><Link to="/help">Home</Link> </li>
                            <li className="breadcrumb-item">    <Link to="/account-help/" > Account Help</Link> </li>
                        </ol>
                        </nav>
                        <div className="instructions">
                            <h1 id="first-header-art">Change email address</h1>
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
                            <h1 id="first-header-art">Didn't work?</h1>
                            <div className="row container">
                                <div className="item">
                                    <hr></hr>
                                    <div className="collapse-btn item-header" type="button" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                                        <h3 className="item-header">It won't let me enter a new email address</h3>
                                        <i className="material-icons arrow-down">keyboard_arrow_down</i>
                                    </div>
                                    <div className="col">
                                        <div className="collapse multi-collapse" id="multiCollapseExample1">
                                            <div className="card-body">
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
                                                <div className="card-body">
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
                <Footer/>
        </div>
       
    )
}
export default ChangeEmailAddress
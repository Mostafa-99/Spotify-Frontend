import React from "react"
import './Articles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import SideBar from '../../SideBar/SideBar'
import  { Component } from "react";

/** Class of How To Log Out. It is one of the articles in account help
 * @extends Component
 */
class HowToLogOut extends Component {
    render() {
    {document.title ="How to log out - Spotify"}
    return(
        <div id="body-overrides">

                <div className="container body" id="dev-items"> 
                    <SideBar/>
                    <div className="account-help item">
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb" id="article-breadcrumb">
                            <li className="breadcrumb-item"><Link to="/help">Home</Link> </li>
                            <li className="breadcrumb-item">    <Link to="/account-help" > Account Help   </Link> </li>
                        </ol>
                        </nav>
                        <div className="instructions">
                            <h1 id="first-header-art">How to log out</h1>
                            <ul className="help-art" id="article-header-text">
                                <li >Looking for the exit? Pick your device below for how to log out of the app.</li>
                                <li ><strong>Note:</strong> You can also be logged in on spotify.com. To log out here, click <strong>Profile</strong> in the top right of this page, then <strong>Log out</strong>.</li>
                            </ul>
                            <div className="row container">
                                <div className="item">
                                    <hr></hr>
                                    <div className="collapse-btn item-header" type="button" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                                        <h3 className="item-header">Desktop</h3>
                                        <i className="material-icons arrow-down">keyboard_arrow_down</i>
                                    </div>
                                    <div className="col">
                                        <div className="collapse multi-collapse" id="multiCollapseExample1">
                                            <div className="card-body">
                                                <ol>
                                                    <li>Click in the top-right corner of the app.</li>
                                                    <li>Select <strong>Log Out</strong>.</li>
                                                </ol> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <hr></hr>
                                    <div className="collapse-btn item-header" type="button"  data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
                                        <h3 className="item-header">Web player</h3>   
                                        <i className="material-icons rotate-arrow">keyboard_arrow_down</i>
                                    </div>
                                        <div className="col">
                                            <div className="collapse multi-collapse" id="multiCollapseExample2">
                                                <div className="card-body">
                                                    <ol>
                                                        <li>Click your profile at the bottom of the menu on the left.</li>
                                                        <li>Select <strong>LOG OUT</strong>.</li>
                                                    </ol>  
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="item">
                                    <hr></hr>
                                    <div className="collapse-btn item-header" type="button"  data-toggle="collapse" data-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample2">
                                        <h3 className="item-header">Mobile and tablet</h3>   
                                        <i className="material-icons rotate-arrow">keyboard_arrow_down</i>
                                    </div>
                                        <div className="col">
                                            <div className="collapse multi-collapse" id="multiCollapseExample3">
                                                <div className="card-body">
                                                    <ol>
                                                        <li>Tap Home.</li>
                                                        <li>Tap Settings.</li>
                                                        <li>Scroll to the bottom.</li>
                                                        <li>Tap <strong>Log out</strong>.</li>
                                                    </ol>  
                                                </div>
                                            </div>
                                        </div>
                                    <hr></hr>
                                </div>
                                <br></br>
                                <h5 id="headers-inside-articles"><strong>Log out everywhere</strong></h5>
                                <ul className="help-art" id="article-header-text">
                                    <li >Here’s how to log out of all web browsers, computers, tablets, and mobile devices at once:</li>
                                </ul>
                                <ol id="after-articles">
                                    <li>Log in to your<Link to="/account-overview"> account page</Link>.</li>
                                    <li>Click <strong>SIGN OUT EVERYWHERE</strong>.</li>
                                </ol> 
                                <ul className="help-art" id="article-header-text">
                                    <li ><strong>Note:</strong> This doesn’t include partner devices, such as Sonos and PlayStation. To log out of (or unlink) Spotify from a partner device, check the device’s manufacturer guide.</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
        </div>
       
    )
}}
export default HowToLogOut
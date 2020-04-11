import React from "react"
import './Articles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import SideBar from '../../SideBar/SideBar'
import  { Component } from "react";

/** Class of Spotify And Facebook. It is one of the articles in account help
 * @extends Component
 */
class SpotifyAndFacebook extends Component {
    render() {
    {document.title ="Spotify and Facebook - Spotify"}
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
                            <h1 id="first-header-art">Spotify and Facebook</h1>
                            <ul className="help-art" id="article-header-text">
                                <li >Using Spotify with Facebook lets you log in with your Facebook details, display your Facebook</li>
                                <li >name/picture, and easily find your friends on Spotify.</li>
                            </ul>
                            <div className="row container">
                                <div className="item">
                                    <hr></hr>
                                    <div className="collapse-btn item-header" type="button" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                                        <h3 className="item-header">Connect or disconnect Facebook</h3>
                                        <i className="material-icons arrow-down">keyboard_arrow_down</i>
                                    </div>
                                    <div className="col">
                                        <div className="collapse multi-collapse" id="multiCollapseExample1">
                                            <div className="card-body">
                                                <ul className="help-art" id="article-header-text">
                                                    <li ><strong>Note:</strong> If you signed up for your Spotify account with Facebook, it’s automatically connected to Facebook.</li>
                                                    <li >If you signed up for Spotify with an email address and password, connect to Facebook with these steps:</li>
                                                </ul>
                                                <h5>Mobile and tablet</h5>
                                                <ol>
                                                    <li>Make sure you’re logged into Facebook on your device.</li>
                                                    <li>In Spotify, tap <strong>Home</strong>, then <strong>Settings</strong>.</li>
                                                    <li>Under <strong>Social</strong>, tap <strong>Connect to Facebook</strong>.</li>
                                                </ol> 
                                                <ul className="help-art" id="article-header-text">
                                                    <li ><strong>Note:</strong> It’s not possible to disconnect from Facebook via your mobile device. See the ‘Desktop’ steps below.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <hr></hr>
                                    <div className="collapse-btn item-header" type="button"  data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
                                        <h3 className="item-header">Log in with Facebook</h3>   
                                        <i className="material-icons rotate-arrow">keyboard_arrow_down</i>
                                    </div>
                                        <div className="col">
                                            <div className="collapse multi-collapse" id="multiCollapseExample2">
                                                <div className="card-body">
                                                    <ul className="help-art" id="article-header-text">
                                                        <li >If your Spotify account is connected to Facebook, you can choose <strong>LOG IN WITH FACEBOOK</strong> or <strong>CONTINUE WITH FACEBOOK</strong>. </li>
                                                        <li ><strong>Tip:</strong> Make sure you log into the correct Facebook account on the device.</li>
                                                    </ul>
                                                    <h5><strong>Didn't work?</strong></h5>
                                                    <ul className="help-art" id="article-header-text">
                                                        <li >Create a Spotify password to log in without Facebook: </li>
                                                    </ul>
                                                    <ol>
                                                        <li>Go to our password reset form. </li>
                                                        <li>Enter the email address registered to your Facebook account.</li>
                                                        <li>Continue through the steps to create a password for the account.</li>
                                                        <li>You can now log in by entering your Facebook email address and the new password in the default log in fields.</li>
                                                    </ol>  
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="item">
                                    <hr></hr>
                                    <div className="collapse-btn item-header" type="button"  data-toggle="collapse" data-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample2">
                                        <h3 className="item-header">Deactivated Facebook?</h3>   
                                        <i className="material-icons rotate-arrow">keyboard_arrow_down</i>
                                    </div>
                                        <div className="col">
                                            <div className="collapse multi-collapse" id="multiCollapseExample3">
                                                <div className="card-body">
                                                    <ul className="help-art" id="article-header-text">
                                                        <li >Create a Spotify password to access an account connected to a deactivated Facebook account: </li>
                                                    </ul>
                                                    <ol>
                                                        <li>Go to our password reset form.</li>
                                                        <li>Enter the email address registered to your Facebook account.</li>
                                                        <li>Continue through the steps to create a password for the account.</li>
                                                        <li>You can now log in by entering your Facebook email address and the new password in the default log in fields.</li>
                                                    </ol>  
                                                </div>
                                            </div>
                                        </div>
                                    <hr></hr>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
     
    )
}}
export default SpotifyAndFacebook
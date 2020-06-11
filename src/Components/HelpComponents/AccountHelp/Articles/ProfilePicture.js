import React from "react"
import './Articles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import SideBar from '../../SideBar/SideBar'
import  { Component } from "react";

/** Class of Profile Picture. It is one of the articles in account help
 * @extends Component
 */
class ProfilePicture extends Component {
    render() {
    {document.title ="Profile picture - Spotify"}
    return(
         <div id="body-overrides">
                <div className="container body" id="dev-items"> 
                    <SideBar/>
                    <div className="account-help item sections">
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb" id="article-breadcrumb">
                            <li className="breadcrumb-item"><Link to="/help">Home</Link> </li>
                            <li className="breadcrumb-item">    <Link to="/account-help" > Account Help    </Link> </li>
                        </ol>
                        </nav>
                        <div className="instructions">
                            <h1 id="first-header-art">Profile picture</h1>
                            <ul className="help-art" id="article-header-text">
                                <li ><p>Set the scene for your <Link to="/account-overview">profile</Link> in the app.</p></li>
                                <li ><strong>Note:</strong> Make sure your picture doesn’t violate any copyright, trademark, or personal image rights.</li>
                                <li>Check out our playlist image guidelines.</li>
                            </ul>
                            <div className="row container">
                                <div className="item sections">
                                    <hr></hr>
                                    <div className="collapse-btn item-header" type="button" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                                        <h3 className="item-header">Mobile and tablet</h3>
                                        <i className="material-icons arrow-down">keyboard_arrow_down</i>
                                    </div>
                                    <div className="col">
                                        <div className="collapse multi-collapse" id="multiCollapseExample1">
                                            <div className="card-body">
                                                <ol>
                                                    <li>Tap <strong>Home</strong>, then <strong>Settings</strong>.</li>
                                                    <li>Tap View profile.</li>
                                                    <li>Tap <strong>EDIT</strong> PROFILE.</li>
                                                    <li>Tap <strong>CHANGE PHOTO</strong>.</li>
                                                    <li>Select the picture you want to use.</li>
                                                </ol> 
                                                <h5><strong>Remove profile picture</strong></h5>
                                                <ol>
                                                    <li>Follow the steps above to <strong>CHANGE PHOTO</strong>.</li>
                                                    <li>Tap <strong>Remove current photo</strong>.</li>
                                                </ol> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item sections">
                                    <hr></hr>
                                    <div className="collapse-btn item-header" type="button"  data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
                                        <h3 className="item-header">Desktop</h3>   
                                        <i className="material-icons rotate-arrow">keyboard_arrow_down</i>
                                    </div>
                                        <div className="col">
                                            <div className="collapse multi-collapse" id="multiCollapseExample2">
                                                <div className="card-body">
                                                    <ol>
                                                        <li>Click your username in the top-right corner of the desktop app.</li>
                                                        <li>Hover over your profile picture and click Change.</li>
                                                        <li>Select the picture you want to use.</li>
                                                    </ol>  
                                                    <h5><strong>Remove profile picture</strong></h5>
                                                    <ol>
                                                        <li>Follow the steps above to click <strong>Change</strong> on your profile picture.</li>
                                                        <li>Click <strong>Remove</strong>.</li>
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
export default ProfilePicture
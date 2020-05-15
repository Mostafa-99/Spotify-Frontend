import React from "react"
import './Articles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import SideBar from '../../SideBar/SideBar';
import  { Component } from "react";

/** Class of Can Not Activate Premium Trial. It is one of the articles in account help
 * @extends Component
 */
class CanNotActivatePremiumTrial extends Component {
    render() {
    {document.title ="Can't activate Premium trial - Spotify"}
    return(
    <div id="body-overrides">
                <div className="container body" id="dev-items"> 
                    <SideBar/>
                    <div className="account-help item sections">
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb" id="article-breadcrumb">
                            <li className="breadcrumb-item"><Link to="/help">Home</Link> </li>
                            <li className="breadcrumb-item">    <Link to="/account-help" > Account Help   </Link> </li>
                        </ol>
                        </nav>
                        <div className="instructions">
                            <h1 id="first-header-art">Can't activate Premium trial</h1>
                            <ul className="help-art" id="article-header-text">
                                <li >If you’re having trouble signing up to an introductory offer, remember that you won’t be eligible if you’ve already had or tried Premium in the past (unless stated otherwise).</li>
                                <li ><strong>Tip:</strong> Can’t remember if you’ve had Premium before? Check out your <strong>receipts page</strong>.</li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>  
    )
}}
export default CanNotActivatePremiumTrial
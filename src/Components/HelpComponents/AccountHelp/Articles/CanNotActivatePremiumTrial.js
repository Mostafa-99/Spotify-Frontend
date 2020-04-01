import React from "react"
import ReactDOM from 'react-dom'
import './Articles.css'
import AccountHelp from '../AccountHelp'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Switch,Route} from "react-router-dom";
import {Link} from 'react-router-dom';
import Footer from '../../../Footer/footer'
import Navbar from '../../../Navigation/navbar.js'
import SideBar from '../../SideBar/SideBar'
function CanNotActivatePremiumTrial(){
    {document.title ="Can't activate Premium trial - Spotify"}
    return(
    <div id="body-overrides">
                <Navbar/>
                <div className="container body" id="dev-items"> 
                    <SideBar/>
                    <div className="account-help item sections">
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb" id="article-breadcrumb">
                            <li className="breadcrumb-item"><Link to="/help">Home</Link> </li>
                            <li className="breadcrumb-item">    <Link to="/account-help/" > Account Help   </Link> </li>
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
                <Footer/>
        </div>  
    )
}
export default CanNotActivatePremiumTrial
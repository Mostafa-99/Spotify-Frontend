import React from "react";
import './SideBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import  { Component } from "react";

/** Class of SideBar in account help page and articles
 * @extends Component
 */
class SideBar extends Component {
    render() {
    {document.title ="Account Help - Spotify"}
    return(       
                <div className='sidebar-body' id='sidebar-body'>
                    <h2 className="ht-header-large"id="help-arts-headers">How can we help you?</h2>
                    <h2 className="ht-header-small"id="help-arts-headers">Help topics</h2>
                    <div className="ht-topics">
                        <h3 className="ht-topics-ap" id="help-arts-headers">Account & Payment</h3>
                        <ul className="account-help-btn">
                            <Link to="/account-help" ><li>Account Help</li> </Link>
                        </ul>
                    </div>
                    <div className="ht-topics mt-5">
                        <h3 className="ht-topics-ap" id="help-arts-headers">Using Spotify</h3>
                        <ul className="account-help-btn">
                            <Link to="/features-main" ><li>Features</li> </Link>
                        </ul>
                    </div>
                </div>
                )
    }}
export default SideBar
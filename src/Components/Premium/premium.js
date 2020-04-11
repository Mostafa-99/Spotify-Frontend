import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Premium.css';
import benefit1 from '../../Images/benefit-1.png';
import benefit2 from '../../Images/benefit-2.png';
import benefit3 from '../../Images/benefit-3.png';
import benefit4 from '../../Images/benefit-4.png';

/**
 * Show advantages of being premium user
 * @extends Component
 */
export class Premium extends Component {
    render() {
        
        {document.title ="Spotify"}
        return (
                <div id="pp-main-div">

                    <div className="blue-part">
                        <div className="blue-container">
                            <h1 className="bigger-h1">Get Premium free for 1 month</h1>
                            <h2 className="bigger-h2">Just EGP 49.99/month after. Cancel anytime.</h2>
                            <Link to="/premium-code">
                                <button id="pp-first-button" className="first-button">GET PREMIUM</button>
                            </Link>
                            <p>
                            Terms and conditions apply.1 month free not available for users who have already tried Premium.
                            </p>
                        </div>
                    </div>

                    <div className="second-part">
                        <h1 className="smaller-h1">Why go Premium?</h1>
                        <div className="images-div">
                            <div className="image-div">
                                <img className="benefit-image" src={benefit1} alt="Download music"/>
                                <h2 className="image-h2">Download music.</h2>
                                Listen anywhere.
                            </div>
                            <div className="image-div">
                                <img className="benefit-image" src={benefit2} alt="No ad interruptions"/>
                                <h2 className="image-h2">No ad interruptions.</h2>
                                Enjoy nonstop music.
                            </div>
                            <div className="image-div">
                                <img className="benefit-image" src={benefit3} alt="Play any song"/>
                                <h2 className="image-h2">Play any song.</h2>
                                Even on mobile.
                            </div>
                            <div className="image-div">
                                <img className="benefit-image" src={benefit4} alt="Unlimited skips"/>
                                <h2 className="image-h2">Unlimited skips.</h2>
                                Just hit next.
                            </div>
                        </div>

                    </div>

                    <div className="third-part">
                        <div className="box-div">
                            <div>
                                <h3>Spotify Premium</h3>
                                <h4>EGP 49.99 </h4>
                                <p> / month</p>
                                <p className="grey-p">1 month free</p>
                                <hr/>
                                <br/>
                                <ul>
                                    <li>Play any song</li>
                                    <li>Listen offline</li>
                                    <li>No ad interruptions</li>
                                    <li>Unlimited skips</li>
                                    <li>High audio quality</li>
                                </ul>
                                <br/>
                                <hr/>
                                <Link to="/premium-code">
                                    <button id="pp-second-button" className="offer-button">GET PREMIUM</button>
                                </Link>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <p className="grey-p">Terms and conditions apply.</p>
                    </div>

                   

                    </div>
        )
    }
}

export default Premium

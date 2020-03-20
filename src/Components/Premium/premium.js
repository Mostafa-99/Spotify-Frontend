import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './premium.css';
import benefit1 from '../Images/benefit-1.png';
import benefit2 from '../Images/benefit-2.png';
import benefit3 from '../Images/benefit-3.png';
import benefit4 from '../Images/benefit-4.png';


export class premium extends Component {
    render() {
        return (
                <div id="ppmaindiv">
                    <div className="bluepart">
                        <div className="bluecontainer">
                            <h1 className="biggerh1">Get Premium free for 1 month</h1>
                            <h2 className="biggerh2">Just EGP 49.99/month after. Cancel anytime.</h2>
                            <Link to="/premiumCode">
                                <button id="ppfirstbutton" className="firstbutton">GET PREMIUM</button>
                            </Link>
                            <p>
                            Terms and conditions apply.1 month free not available for users who have already tried Premium.
                            </p>
                        </div>
                    </div>

                    <div className="secondpart">
                        <h1 className="smallerh1">Why go Premium?</h1>
                        <div className="imagesdiv">
                            <div className="imagediv">
                                <img className="benefitimage" src={benefit1} alt="Download music"/>
                                <h2 className="imageh2">Download music.</h2>
                                Listen anywhere.
                            </div>
                            <div className="imagediv">
                                <img className="benefitimage" src={benefit2} alt="No ad interruptions"/>
                                <h2 className="imageh2">No ad interruptions.</h2>
                                Enjoy nonstop music.
                            </div>
                            <div className="imagediv">
                                <img className="benefitimage" src={benefit3} alt="Play any song"/>
                                <h2 className="imageh2">Play any song.</h2>
                                Even on mobile.
                            </div>
                            <div className="imagediv">
                                <img className="benefitimage" src={benefit4} alt="Unlimited skips"/>
                                <h2 className="imageh2">Unlimited skips.</h2>
                                Just hit next.
                            </div>
                        </div>

                    </div>

                    <div className="thirdpart">
                        <div className="boxdiv">
                            <div>
                                <h3>Spotify Premium</h3>
                                <h4>EGP 49.99 </h4>
                                <p> / month</p>
                                <p className="greyp">1 month free</p>
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
                                <Link to="/premiumCode">
                                    <button id="ppsecondbutton" className="offerbutton">GET PREMIUM</button>
                                </Link>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <p className="greyp">Terms and conditions apply.</p>
                    </div>
                </div>
        )
    }
}

export default premium

import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import SideBar from '../SideBar/SideBar'
import './FeaturesMain.css';

export class FeaturesMain extends Component {
    render() {
        return (
            <div id="features-main">
            <div className="container body" id="dev-items"> 
                <SideBar/>
                <div id="features-nav">
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb" id="help-breadcrumb">
                        <li className="breadcrumb-item"><Link to="/help">Home</Link> </li>
                        <li className="breadcrumb-item active" id="typing" aria-current="page">Features</li>
                    </ol>
                    </nav>
                    <div>
                        <h1 className="features-heading">Features</h1>
                        <ul>

                        <Link to="/search-feature"> 
                            <li>Search</li>
                        </Link>
                        <Link to="/your-library-feature">
                            <li>Your Library</li>
                        </Link>
                        <Link to="/shuffle-play-feature">
                            <li>Shuffle play</li>
                        </Link>
                        <Link to="/artist-profiles-feature">
                            <li>Artist profiles</li>
                        </Link>
                        <Link to="/videos-feature">
                            <li>Videos</li>
                        </Link>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default FeaturesMain

/*
<h2>Simple Collapsible</h2>
                <p>Click on the button to toggle between showing and hiding content.</p>
                <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#demo">Simple collapsible</button>
                <div id="demo" class="collapse show">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
*/
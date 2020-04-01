import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import SideBar from '../SideBar/SideBar'
import './FeaturesMain.css';

export class FeaturesMain extends Component {
    render() {
        return (
            <div className="container body" id="dev-items"> 
                <SideBar/>
                <div id="features-nav">
                    <div>
                        Home / Features
                    </div>
                    <div>
                        <h1 className="features-heading">Features</h1>
                        <Link to="/SearchFeature">
                            <h4>Search</h4>
                        </Link>
                        <Link to="/YourLibraryFeature">
                            <h4>Your Library</h4>
                        </Link>
                        <Link to="/ShufflePlayFeature">
                            <h4>Shuffle play</h4>
                        </Link>
                        <Link to="/ArtistProfilesFeature">
                            <h4>Artist profiles</h4>
                        </Link>
                        <Link to="/VideosFeature">
                            <h4>Videos</h4>
                        </Link>
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
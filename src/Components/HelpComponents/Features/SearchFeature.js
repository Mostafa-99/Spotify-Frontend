import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './FeaturesMain.css';
import SideBar from '../SideBar/SideBar'
export class SearchFeature extends Component {
    render() {
        return (
            <div>
                <div className="container body" id="dev-items"> 
                    <SideBar/>
                    <div id="features-nav">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb" id="article-breadcrumb">
                            <li className="breadcrumb-item"><Link to="/help">Home</Link> </li>
                            <li className="breadcrumb-item">    <Link to="/features-main" > Features  </Link> </li>
                        </ol>
                    </nav>
                        <div>
                            <h1 className="features-heading">Search</h1>
                            <p>Find what you’re looking for with Search, including:</p>
                            <ul className="features-list">
                                <li>Songs</li>
                                <li>Albums</li>
                                <li>Artists</li>
                                <li>Playlists</li>
                                <li>Podcast shows and episodes</li>
                            </ul>
                            <p>On mobile and tablet, you can also use Search to browse categories such as genres,
                                moods, charts, and new releases. Find Radio and Concerts here too. </p>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchFeature

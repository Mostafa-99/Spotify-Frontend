import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './FeaturesMain.css';
import SideBar from '../SideBar/SideBar'
export class VideosFeature extends Component {
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
                    <h1 className="features-heading">Videos</h1>
                    <p>
                        Watch music videos, documentaries, and exclusive video series, 
                        all from within the Spotify app.
                    </p>
                    <br/>
                    <h2>FAQ</h2>
                    <hr/>
                    <h6 id="videos-feature1-button" type="button" className="fp-collapse-button" data-toggle="collapse" data-target="#videos-feature1">
                       How much data do videos use?<i className="material-icons rotate-arrow">keyboard_arrow_down</i>
                    </h6>
                    <div id="videos-feature1" class="collapse">
                        <br/>
                        <p>
                            Videos use more data than music due to larger file sizes, 
                            but our data usage is comparable to other popular video channels.
                        </p>
                    </div>
                    <hr/>

                    <h6 id="videos-feature2-button" type="button" className="fp-collapse-button" data-toggle="collapse" data-target="#videos-feature2">
                        Can I download videos to watch offline?<i className="material-icons rotate-arrow">keyboard_arrow_down</i>
                    </h6>
                    <div id="videos-feature2" class="collapse">
                        <br/>
                        <p>
                            It’s not currently possible to download videos to watch offline.
                        </p>
                    </div>
                    <hr/>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

export default VideosFeature

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class VideosFeature extends Component {
    render() {
        return (
            <div id="features-nav">
                <div>
                    <h6>
                        Home / <Link to="/">Features</Link>
                    </h6>
                </div>
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
                        Desktop and web player
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
                        Desktop and web player
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
        )
    }
}

export default VideosFeature

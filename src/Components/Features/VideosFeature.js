import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class VideosFeature extends Component {
    render() {
        return (
            <div>
                <div>
                    <h6>
                        Home / <Link to="/">Features</Link>
                    </h6>
                </div>
                <div>
                    <h1 className="featuresheading">Videos</h1>
                    <p>
                        Watch music videos, documentaries, and exclusive video series, 
                        all from within the Spotify app.
                    </p>
                    <br/>
                    <h2>FAQ</h2>
                    <hr/>
                    <h6 type="button" className="FP-collapse-button" data-toggle="collapse" data-target="#VideosFeature1">
                        Desktop and web player
                    </h6>
                    <div id="VideosFeature1" class="collapse">
                        <br/>
                        <p>
                            Videos use more data than music due to larger file sizes, 
                            but our data usage is comparable to other popular video channels.
                        </p>
                    </div>
                    <hr/>

                    <h6 type="button" className="FP-collapse-button" data-toggle="collapse" data-target="#VideosFeature2">
                        Desktop and web player
                    </h6>
                    <div id="VideosFeature2" class="collapse">
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

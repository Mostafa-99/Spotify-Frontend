import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class SearchFeature extends Component {
    render() {
        return (
            <div>
                <div>
                    <h6>
                        Home / <Link to="/">Features</Link>
                    </h6>
                </div>
                <div>
                    <h1 className="featuresheading">Search</h1>
                    <p>Find what you’re looking for with Search, including:</p>
                    <ul>
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
        )
    }
}

export default SearchFeature

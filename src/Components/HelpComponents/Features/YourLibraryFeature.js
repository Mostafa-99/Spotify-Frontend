import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Icon_heart from '../../../Images/icon_heart.png';
import Icon_library from '../../../Images/icon_library.png';
import Icon_options_android from '../../../Images/icon_options_android.png';
import Icon_options_iphone from '../../../Images/icon_options_iphone.png';
import Liked_Songs_Location_GIF from '../../../Images/NYL_TWITTER_01_LikedSongs.gif';
import './FeaturesMain.css';

import SideBar from '../SideBar/SideBar'

export class YourLibraryFeature extends Component {
    render() {
        return (
        <div id="your-library">
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
                    <h1 className="features-heading">Your Library</h1>
                    <p>When you like <img src={Icon_heart} alt="Icon_heart"/> a song, playlist, album, or follow 
                    an artist or podcast, you can find it in Your Library.</p>
                    <br/>
                    <h2>Get started</h2>
                    <hr/>

                    <h6 id="your-library-feature1-button" type="button" className="fp-collapse-button" data-toggle="collapse" data-target="#your-library-feature1" >
                        Desktop and web player<i className="material-icons rotate-arrow">keyboard_arrow_down</i>
                    </h6>
                    <div id="your-library-feature1" class="collapse">
                        <br/>
                        <p>Find <b>Your Library</b> in the menu on the left.</p>
                        <p>To add something to Your Library:</p>
                        <ul>
                            <li>Click <img src={Icon_heart} alt="Icon_heart"/> on any song, album, or playlist.</li>
                            <li>Click <b>FOLLOW</b> on any artist or podcast.</li>
                        </ul>
                        <p>
                            <b>Tip:</b> Liking an album doesn’t automatically like all its songs. 
                            If you want to like all songs in an album, click <img src={Icon_options_iphone} alt="Icon_options_iphone"/> on the album,
                             then <b>Like All Songs</b>.
                        </p>
                    </div>
                    <hr/>

                    <h6 id="your-library-feature2-button" type="button" className="fp-collapse-button" data-toggle="collapse" data-target="#your-library-feature2">
                        Mobile and tablet<i className="material-icons rotate-arrow">keyboard_arrow_down</i>
                    </h6>
                    <div id="your-library-feature2" class="collapse">
                        <br/>
                        <p>Find Your Library <img src={Icon_library} alt="Icon_library"/> in the menu bar.</p>
                        <p>To add something to Your Library:</p>
                        <ul>
                            <li>Tap <img src={Icon_heart} alt="Icon_heart"/> on any song, album, or playlist.</li>
                            <li>Tap <b>FOLLOW</b> on any artist or podcast.</li>
                        </ul>
                        <p>
                            <b>Tip:</b> Liking an album doesn’t automatically like all its songs. 
                            If you want to like all songs in an album, tap <img src={Icon_options_iphone} alt="Icon_options_iphone"/> (iphone) 
                            / <img src={Icon_options_android} alt="Icon_options_android"/> (Android) on the album, then <b>Like All Songs</b>.
                        </p>
                    </div>
                    <hr/>
                    <br/>
                    <h2>Need help?</h2>
                    <hr/>

                    <h6 id="your-library-feature3-button" type="button" className="fp-collapse-button" data-toggle="collapse" data-target="#your-library-feature3">
                        Where are the songs I liked?<i className="material-icons rotate-arrow">keyboard_arrow_down</i>
                    </h6>
                    <div id="your-library-feature3" class="collapse">
                        <br/>
                        <p>Find songs you’ve liked in <b>Liked Songs</b> (under <b>Playlists</b> on mobile/tablet).</p>
                        <img id="liked-songs-gif" src={Liked_Songs_Location_GIF} alt="Liked_Songs_Location_GIF"/>
                        <br/>
                        <br/>
                        <p>
                            <b>Tip:</b> Adding an album to Your Library doesn’t automatically add all its songs to Liked Songs.
                            Instead, select <img src={Icon_options_iphone} alt="Icon_options_iphone"/> / <img src={Icon_options_android} alt="Icon_options_android"/> on an album,
                             then <b>Like All Songs</b>.
                        </p>
                    </div>
                    <hr/>

                    <h6 id="your-library-feature4-button" type="button" className="fp-collapse-button" data-toggle="collapse" data-target="#your-library-feature4">
                        Where is an album or artist I liked?<i className="material-icons rotate-arrow">keyboard_arrow_down</i>
                    </h6>
                    <div id="your-library-feature4" class="collapse">
                        <br/>
                        <p>To add an artist, you need to select <b>FOLLOW</b> at the top of their artist profile.</p>
                        <p>To add an album you need to select <img src={Icon_heart} alt="Icon_heart"/> next to the album title.</p>
                        <p>
                            <b>Tip:</b> Liking a song doesn’t automatically add the song’s album or artist to
                            Your Library, but will make its album/artist more likely to appear in <b>Recommended </b>
                            under <b>Artists</b> and <b>Albums</b> in Your Library.
                        </p>
                    </div>
                    <hr/>
                    <br/>
                    <br/>
                </div>
            </div>
        </div>
        </div>
        )
    }
}

export default YourLibraryFeature
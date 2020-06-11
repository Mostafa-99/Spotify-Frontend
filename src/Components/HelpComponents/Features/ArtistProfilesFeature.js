import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Icon_options_android from '../../../Images/icon_options_android.png';
import Icon_options_iphone from '../../../Images/icon_options_iphone.png';
import Desktop_artist_profile_new from '../../../Images/desktop_artist_profile_new.png';
import Iphone_artist_profiles from '../../../Images/iphone_artist_profiles.png';
import './FeaturesMain.css';
import SideBar from '../SideBar/SideBar'

export class ArtistProfilesFeature extends Component {
    render() {
        return (
        <div>      
        <div className="container body" id="dev-items"> 
            <SideBar/>
            <div id="features-nav">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb" id="help-breadcrumb">
                        <li className="breadcrumb-item"><Link to="/help">Home</Link> </li>
                        <li className="breadcrumb-item"><Link to="/features-main">Features</Link></li>
                    </ol>
                </nav>
                <div>
                    <h1 className="features-heading">Artist profiles</h1>
                    <p>
                        Artist profiles are where you’ll find all releases 
                        available by a particular artist, plus everything you need to know about them.
                    </p>
                    <p>
                        Explore an artist profile to find:
                    </p>
                    <ul>
                        <li>
                            All available albums, singles, and EPs. 
                            Check out their <b>Latest Release</b> and <b>Popular</b> to get to know their music.
                        </li>
                        <li>
                            Compilations, or releases by other artists, that they appear on.
                        </li>
                        <li>
                            <b>Fans Also Like:</b> Other artists their fans listen to, determined by 
                            listener habits and trends around the internet.
                        </li>
                        <li>
                            <b>About:</b> Their biography, artist images, and where people listen 
                            (on mobile and tablet, find this at the bottom of an artist profile).
                        </li>
                        <li>
                            <b>Concerts:</b> When and where they're playing, and how to find tickets.
                        </li>
                        <li>
                            <b>Artist Playlists and Artist’s Pick:</b> The music they’re into!
                        </li>
                        <li>
                            <b>Monthly listeners:</b> Their average number of listeners per month. 
                        </li>
                        <li>
                            <b>Merch/Offers:</b> Swag they have available to buy. 
                        </li>
                    </ul>
                    <p><b>Note:</b> Content availability varies depending on the artist.</p>
                    <br/>
                    <h2>Find an artist profile</h2>
                    <br/>
                    <h3>Desktop and web player</h3>
                    <br/>
                    <p>
                        <Link to="/SearchFeature">Search</Link> for an artist, or right-click a song or album and select Go to Artist. 
                        Scroll down or click the tabs at the top to explore.
                    </p>
                    <img className="features-inline-pics" src={Desktop_artist_profile_new} alt=""/>

                    <h3>Mobile and tablet</h3>
                    <br/>
                    <p>
                        <Link to="/SearchFeature">Search</Link> for an artist, or tap <img src={Icon_options_iphone} alt=""/> (iOS) / <img src={Icon_options_android} alt=""/> (Android) 
                        on a song or album and select Go to Artist. Scroll down to explore.
                    </p>
                    <img className="features-inline-pics" src={Iphone_artist_profiles} alt=""/>
                    <br/>
                    <hr/>

                </div>
            </div>
            </div>
        </div>
        )
    }
}

export default ArtistProfilesFeature

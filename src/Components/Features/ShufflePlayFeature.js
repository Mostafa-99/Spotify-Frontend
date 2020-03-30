import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Icon_shuffle from '../../Images/icon_shuffle.png';
import Icon_shuffle_play from '../../Images/icon_shuffle_play.png';
import Icon_shuffle_only from '../../Images/icon_shuffle_only.png';

export class ShufflePlayFeature extends Component {
    render() {
        return (
            <div>
                <div>
                    <h6>
                        Home / <Link to="/">Features</Link>
                    </h6>
                </div>
                <div>
                    <h1 className="featuresheading">Shuffle play</h1>
                    <p>Mix up what plays next with Shuffle. Great for long playlists, switching up your listening, or 
                        when you just don’t feel like following orders.</p>
                    <p>You can turn shuffle on for any playlist, album, or artist profile.</p>
                    <hr/>

                    <h6 type="button" className="FP-collapse-button" data-toggle="collapse" data-target="#ShufflePlayFeature1">
                        Desktop and web player
                    </h6>
                    <div id="ShufflePlayFeature1" class="collapse">
                        <br/>
                        <ol>
                            <li>Click Shuffle <img src={Icon_shuffle}/> in the Now Playing bar at the bottom.</li>
                            <li>
                                The order of songs due to play is now mixed.
                                <p><b>Tip:</b> Want to see how it’s changed? Check out the <b>Play Queue.</b></p>
                            </li>
                            <li>Click again to turn Shuffle off. Songs return to their original line-up.</li>
                        </ol>
                    </div>
                    <hr/>

                    <h6 type="button" className="FP-collapse-button" data-toggle="collapse" data-target="#ShufflePlayFeature2">
                        Mobile and tablet
                    </h6>
                    <div id="ShufflePlayFeature2" class="collapse">
                        <br/>
                        <p>Android: Tap <b>SHUFFLE PLAY.</b></p>
                        <p>iOS: Tap <img src={Icon_shuffle_play}/></p>
                        <p><b>Premium subscribers</b> can also control shuffle from the Now Playing bar:</p>
                        <ol>
                            <li>
                                Tap the Now Playing bar at the bottom of the screen (above the menu).
                                <p><b>Note:</b> On iPad, tap the album artwork in the side menu.</p>
                            </li>
                            <li>Tap Shuffle <img src={Icon_shuffle}/> to turn it on.</li>
                            <li>
                                The order of songs due to play is now mixed.
                                <p><b>Tip:</b> Want to see how it’s changed? Check out the <b>Play Queue.</b></p>
                            </li>
                            <li>Tap again to turn Shuffle off. Songs return to their original line-up.</li>
                        </ol>
                    </div>
                    <hr/>

                    <br/>
                    <h2>Is Shuffle the only way to listen?</h2>
                    <p>
                        No! If you’re Premium you can listen to what you want, when you want. 
                        Select any track from a playlist or album, or play the opening track and Spotify 
                        will automatically play the remaining tracks in the order they’re listed. 
                        You also have the option to Shuffle. 
                    </p>
                    <br/>
                    <h3>Don't have Premium?</h3>
                    <br/>
                    <p>
                        If you’re using the free service, you can listen to any playlist via shuffle, 
                        or select any track on playlists without the Shuffle icon <img src={Icon_shuffle_only}/>.
                    </p>
                    <br/>
                </div>
            </div>
        )
    }
}

export default ShufflePlayFeature

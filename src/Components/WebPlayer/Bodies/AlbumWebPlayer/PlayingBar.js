import React, { Component } from 'react'
import axios from 'axios'
import { responseHandler } from '../../../../ReduxStore/Shared.js'
import './PlayingBar.css'
import TrackImage from './../../../../Images/albumImage.jpg'

/**
 * Playing bar class
 * @extends Component
 */
export class PlayingBar extends Component {

    audio=new Audio();
    state={
        /**
         * State the current volume of audio in percentage
         * @memberof PlayingBar
         * @type {Number}
         */
        "volume":50,
        /**
         * Used to set the volume icon according to volume value
         * @memberof PlayingBar
         * @type {String}
         */
        "volume_icon":"fas fa-volume-down"
    }

    /**
     * Sends the new track slider value to the parent component
     * @memberof PlayingBar
     * @return {void}
     */
    trackSliderChanged=()=>{
        var slider= document.getElementById("song-slider");
        this.props.seekSong(slider.value);
    }

    /**
     * Sends the new volume slider value to the parent component and changes the sound icon
     * @memberof PlayingBar
     * @return {void}
     */
    volumeChanged=()=>{
        var slider= document.getElementById("volume-slider");
        this.props.setPlayerVolume(slider.value);
        this.setState({
            volume:slider.value
        })
        if(slider.value>50){
            this.setState({
                volume_icon:"fas fa-volume-up"
            }) 
        }
        else if(slider.value>0){
            this.setState({
                volume_icon:"fas fa-volume-down"
            }) 
        }
        else{
            this.setState({
                volume_icon:"fas fa-volume-mute"
            }) 
        }
    }

    render() {
        return (
            <div id="playing-bar-main-div" className="container-fluid">
                <div className="row playing-bar-row-div">
                    {/* --------------------------------First Section------------------------------------ */}
                    <div className="first-div the-three-divs">
                        <div className="row">
                            <div className="image-div">
                                <img className="image" src={this.props.album_image} alt="track pic"/>
                            </div>
                            <div className="track-details-div">
                                <p className="track-name">{this.props.name}</p>
                                <p className="track-artist">{this.props.artist}</p>
                            </div>
                            <div className="icon-div">
                                <i className={(this.props.playing_song_is_liked ? "fas fa-heart":"far fa-heart")} title="Save to Your Library" onClick={this.props.trackLikeButtonPressed}></i>
                            </div>
                        </div>
                    </div>
                    {/* --------------------------------Second Section------------------------------------ */}
                    <div className="second-div the-three-divs">
                        <div className="row">
                            <div className="col"></div>
                            <div className="col-1"><i className={(this.props.is_shuffling ? "shuffle fas fa-random":"fas fa-random")} onClick={this.props.shuffleButtonPressed}></i></div>
                            <div className="col-1"><i className="fas fa-step-backward" onClick={this.props.previousSong}></i></div>
                            <div className="col-1"><i className={(this.props.is_playing ? "fas fa-pause":"fas fa-play")} onClick={this.props.PlayPauseButtonPressed}></i></div>
                            <div className="col-1"><i className="fas fa-step-forward" onClick={this.props.nextSong}></i></div>
                            <div className="col-1"><i className={(this.props.is_repeating ? "fas fa-redo-alt":"fas fa-redo")} onClick={this.props.repeatButtonPressed}></i></div>
                            <div className="col"></div>
                        </div>
                        <div className="row">
                            <div className="col track-time"><p>{this.props.current_minutes}:{(this.props.current_seconds < 10 ? '0' : '')}{this.props.current_seconds}</p></div>
                            <div className="col-8 track-slider"><input value={(this.props.current_minutes + this.props.current_seconds/60)*100/(this.props.minutes + this.props.seconds/60)} type="range" className="slider custom-range" id="song-slider" min="0" max="100" onChange={this.trackSliderChanged} on/></div>
                            <div className="col track-time"><p>{this.props.minutes}:{(this.props.seconds < 10 ? '0' : '')}{this.props.seconds}</p></div>
                        </div>
                    </div>
                    {/* --------------------------------Third Section------------------------------------ */}
                    <div className="third-div the-three-divs">
                        <div className="row">
                            <div className="col-5"></div>
                            <div className="icon-div col-1"><i className={this.state.volume_icon}></i></div>
                            <div className="col-4 track-slider"><input type="range" className="slider custom-range" id="volume-slider" min="0" max="100" onChange={this.volumeChanged }/></div>
                            <div className="col"></div>
                        </div>
                    </div>
                    {/* -------------------------------------------------------------------- */}
                </div>
            </div>
        )
    }
}

export default PlayingBar

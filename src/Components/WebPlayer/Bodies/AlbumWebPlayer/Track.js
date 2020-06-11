import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Track.css'

/**
 * Track class
 * @extends Component
 */
export class Track extends Component {
    state={
        /**
         * Artist of the track
         * @memberof Track
         * @type {Array<Object>}
         */
        "artists":[],
        /**
         * Audio url of the track
         * @memberof Track
         * @type {String}
         */
        "preview_url":"",
        /**
         * ID of the track
         * @memberof Track
         * @type {String}
         */
        "id":"",
        /**
         * Name of the track
         * @memberof Track
         * @type {String}
         */
        "name":"",
        /**
         * Duration of the track in milliseconds
         * @memberof Track
         * @type {Number}
         */
        "duration_ms":Number,
        /**
         * Number of complete minutes of the track
         * @memberof Track
         * @type {Number}
         */
        "minutes":0,
        /**
         * Number of remaining seconds of the track
         * @memberof Track
         * @type {Number}
         */
        "seconds":0,
    }

    componentDidMount(){
        this.props.track.artists.map((artist)=>(
            this.setState({artists:artist.name})
        ));
        this.setState({
            duration_ms:this.props.track.durationMs,
            preview_url:this.props.track.preview_url,
            id:this.props.track._id,
            name:this.props.track.name
        });
        this.millisToMinutesAndSeconds(this.props.track.durationMs);
    }

    /**
     * Converts duration of the song from milliseconds to minutes and seconds
     * @memberof Track
     * @param {Number} millis 
     * @returns {void}
     */
    millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        this.setState({
            minutes:minutes,
            seconds:seconds
        });
    }

    render() {
        return (
            <div id="track-row-div" className="container-fluid">
                <div className={(this.props.playing_song_id===this.props.track._id?"row playing-song":"row not-playing-song")}>
                    <div className="track-symbol-div">
                        <i className={(this.props.playing_song_id===this.props.track._id?"track-icon-playing":"track-icon")} 
                        onClick={this.props.setPlayingSondId.bind(this, this.state.id,this.state.preview_url)}></i>
                    </div>
                    <div className="track-name-div">
                        <p className="track-name">{this.state.name}</p>
                        <p className="track-artist">{this.state.artists}</p>
                    </div>
                    <div className="track-options-div dropdown show">
                        <strong className="track-options" id="trackdropdownMenuButton" data-toggle="dropdown"></strong>
                        <div className="dropdown-menu" aria-labelledby="albumdropdownMenuLink">
                            <a className="dropdown-item disabled" href="#">Start Radio</a>
                            <a className="dropdown-item disabled" href="#">Save to Your Liked Songs</a>
                            <a className="dropdown-item disabled" href="#">Add to Queue</a>
                            <a className="dropdown-item disabled" href="#">Add to Playlist</a>
                            <a className="dropdown-item disabled" href="#">Copy Song Link</a>
                            <a className="dropdown-item disabled" href="#">Open in Desktop app</a>
                        </div>
                    </div>
                    <div className="track-duration-div">
                        <p>{this.state.minutes}:{(this.state.seconds < 10 ? '0' : '')}{this.state.seconds}</p>
                    </div>
                </div>
            </div>
        )
    }
}

Track.propTypes = {
    track: PropTypes.object.isRequired
}

export default Track

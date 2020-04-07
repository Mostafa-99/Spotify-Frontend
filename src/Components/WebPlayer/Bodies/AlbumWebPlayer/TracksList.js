import React, { Component } from 'react'
import Track from './Track.js'
import PropTypes from 'prop-types';

/**
 * List of tracks in an album or playlist
 * @extends Component
 */
export class TracksList extends Component {
    render() {
        return this.props.tracks.map((track) => (
            <Track track={track} playing_song_id={this.props.playing_song_id} setPlayingSondId={this.props.setPlayingSondId}/>
        ));
    }
}

TracksList.propTypes = {
    tracks: PropTypes.array.isRequired
}

export default TracksList

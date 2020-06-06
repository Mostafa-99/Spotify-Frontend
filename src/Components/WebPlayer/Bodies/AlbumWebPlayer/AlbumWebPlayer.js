import React, { Component } from 'react'
import axios from 'axios'
import HomeNavBar from './../Home/HomeNavBar.js'
import SideBar from './../../SideBar.js'
import TracksList from './TracksList.js'
import PlayingBar from './PlayingBar.js'
import {ConfigContext} from '../../../../Context/ConfigContext'
import './AlbumWebPlayer.css'
import ArtistPageBtn from '../../../Artist/Albums/AlbumPageBtn'
import AlbumPageBtn from '../../../Artist/Albums/AlbumPageBtn'
import TrackImage from './../../../../Images/albumImage.jpg'
import { Link } from "react-router-dom";
import { responseHandler } from '../../../../ReduxStore/Shared.js'

/**
 * Album web player class
 * @extends Component
 */
export class AlbumWebPlayer extends Component {
    static contextType=ConfigContext;

    audio=new Audio();
    state={
        /**
         * ID of the album
         * @memberof AlbumWebPlayer
         * @type {Object}
         */
        myId:{},//id of current album

        /**
         * Name of the album
         * @memberof AlbumWebPlayer
         * @type {String}
         */
        "album_name":"",
        /**
         * Array of artists' names
         * @memberof AlbumWebPlayer
         * @type {Array<String>}
         */
        "artists":"",
        /**
         * Image of the album
         * @memberof AlbumWebPlayer
         * @type {String}
         */
        "album_image":"",
        /**
         * Array of tracks objects
         * @memberof AlbumWebPlayer 
         * @type {Array<Object>}
         */
        "tracks":[],
        /**
         * States if the user liked the album or not
         * @memberof AlbumWebPlayer
         * @type {Boolean}
         */
        "is_liked":Boolean,
        ///////////////////////////////////////////////////
        /**
         * Total number of tracks in the album
         * @memberof AlbumWebPlayer
         * @type {Number}
         */
        "album_total_tracks":0,
        /**
         * ID of the playing song
         * @memberof AlbumWebPlayer
         * @type {String}
         */
        "playing_song_id":"",
        /**
         * Order of the playing song in the album
         * @memberof AlbumWebPlayer
         * @type {Number}
         */
        "playing_song_number":Number,
        /**
         * Name of the playing song
         * @memberof AlbumWebPlayer
         * @type {String}
         */
        "playing_song_name":"",
        /**
         * Artist of the playing song
         * @memberof AlbumWebPlayer
         * @type {String}
         */
        "playing_song_artist":"",
        /**
         * Total number of minutes of the playing song
         * @memberof AlbumWebPlayer
         * @type {Number}
         */
        "playing_song_minutes":0,
        /**
         * Total number of seconds of the playing song
         * @memberof AlbumWebPlayer
         * @type {Number}
         */
        "playing_song_seconds":0,
        /**
         * Current minute of the playing song
         * @memberof AlbumWebPlayer
         * @type {Number}
         */
        "playing_song_current_minutes":0,
        /**
         * Current second of the playing song
         * @memberof AlbumWebPlayer
         * @type {Number}
         */
        "playing_song_current_seconds":0,
        /**
         * Time when the playing song was paused in seconds
         * @memberof AlbumWebPlayer
         * @type {Number}
         */
        "pausedtime":0,
        /**
         * State of repeat button
         * @memberof AlbumWebPlayer
         * @type {Boolean}
         */
        "is_repeating":false,
        /**
         * State of shuffle button
         * @memberof AlbumWebPlayer
         * @type {Boolean}
         */
        "is_shuffling":false,
        /**
         * State of play/pause button
         * @memberof AlbumWebPlayer
         * @type {Boolean}
         */
        "is_playing":false
    }

    componentDidMount(){

        const{myId}=this.props.location.state;//getting id from parent component
        this.state.myId=myId;
        this.getAlbumDetails();
        this.getAlbumTracks();
    }

    /**
    * Gets album's name,image and get if the user likes the album
    * @memberof AlbumWebPlayer
    */
    getAlbumDetails(){
        //this.context.baseURL+"/albums/"+this.state.myId
        //http://spotify.mocklab.io/albums/12345
        axios.get(this.context.baseURL+"/albums/"+this.state.myId,{
            headers:{
                'Content-Type':'application/json',
                'authorization': "Bearer "+ localStorage.getItem("token"),
                "id": this.state.myId
            }
        })
        .then(res => {
            if(res.status===200){
                console.log("Album details")
                console.log(res)
                this.setState({
                    album_image:res.data.data.album.image,
                    album_name:res.data.data.album.name,
                    album_total_tracks:res.data.data.album.totalTracks,
                    is_liked:false //get from backend
                })
                res.data.data.album.artists.map((artist)=>(
                    this.setState({
                        artists:artist.name
                    })
                ))
            }
            else responseHandler(res);
        })
        .catch(error => {
            alert(error.response.data.message);
        })
    }

    /**
    * Get album's tracks with their details in an array of objects
    * @memberof AlbumWebPlayer
    */
    getAlbumTracks(){
        //this.context.baseURL+"/albums/"+this.state.myId+"/tracks"
        //"http://spotify.mocklab.io/albums/12345/tracks"
        axios.get(this.context.baseURL+"/albums/"+this.state.myId+"/tracks",{
            headers:{
                'Content-Type':'application/json',
                'authorization': "Bearer "+ localStorage.getItem("token"),
                "id": this.state.myId
            }
        })
        .then(res => {
            if(res.status===200){
                console.log("Album details")
                console.log(res)
                this.setState({tracks:res.data.data.tracksArray})
                console.log("tracks");
                console.log(res);
            }
            else responseHandler(res);
        })
        .catch(error => {
           alert(error.response.data.message);
        })
    }

    /**
     * toggles is_liked and sends request to backend to update
     * @memberof AlbumWebPlayer
     * @return {void}
     */
    likeButtonPressed=()=>{
        if(this.state.is_liked){
            axios.put("http://spotify.mocklab.io/me/likeAlbum",{body:{"id":this.state.myId}},{
                headers:{
                    'authorization': "Bearer "+ localStorage.getItem("token"),
                }
            })
            .then(res => {
                if(res.status===204){
                    this.setState(prevState =>({
                        is_liked:!prevState.is_liked
                    }))
                }
                else responseHandler(res);
            })
            .catch(error => {
            alert(error.response.data.message);
            })
        }
        else{
            axios.delete("http://spotify.mocklab.io/me/unlikeAlbum",{body:{"id":this.state.myId}},{
                headers:{
                    'authorization': "Bearer "+ localStorage.getItem("token"),
                }
            })
            .then(res => {
                if(res.status===204){
                    this.setState(prevState =>({
                        is_liked:!prevState.is_liked
                    }))
                }
                else responseHandler(res);
            })
            .catch(error => {
            alert(error.response.data.message);
            })
        }
    }

    /**
     * Plays or stop song
     * @memberof AlbumWebPlayer
     * @param {string} id -id of the song pressed
     * @param {string} url -source of the song pressed
     * @param {string} name -name of the song pressed
     * @param {string} artist -artist of the song pressed
     * @param {Number} minutes -total minutes of the song pressed
     * @param {Number} seconds -total seconds of the song pressed
     * @param {Number} number -order of the song pressed
     * @return {void}
     */

    setPlayingSondId=(id,url,name,artist,minutes,seconds,number)=>{
        if(this.state.playing_song_id===id){
            if(this.state.is_playing){
                this.setState({
                    is_playing:false,
                    pausedtime:this.audio.currentTime
                })
                this.audio.pause();
            }
            else{
                this.setState({
                    is_playing:true
                })
                this.audio.play();
                this.audio.currentTime=this.state.pausedtime;
            }
        }
        else{
            this.setState({
                playing_song_id:id,
                playing_song_number:number,
                playing_song_name:name,
                playing_song_artist:artist,
                playing_song_minutes:minutes,
                playing_song_seconds:seconds,
                is_playing:true
            })
            this.audio.src=url;
            this.audio.play();
        }
    }

    /**
     * Gets next song to play
     * @memberof AlbumWebPlayer
     * @return {void}
     */
    nextSong=()=>{

        if(this.state.playing_song_number === this.state.album_total_tracks && !this.state.is_shuffling){
            this.setState({
                is_playing:false,
                playing_song_id:"",
                playing_song_number:0,
            })
            this.audio.pause();
            this.audio.src="";
        }
        else{
            var currentNum = this.state.playing_song_number;
            if(this.state.is_shuffling){
                currentNum = Math.floor(Math.random() * this.state.album_total_tracks);
                while(currentNum + 1 === this.state.playing_song_number){
                    currentNum = Math.floor(Math.random() * this.state.album_total_tracks);
                }
            }

            this.state.tracks.map((track) => {
                if((track.trackNumber === currentNum + 1)){
                    track.artists.map((artist)=>(
                        this.setState({playing_song_artist:artist.name})
                    ));
                    this.setState({
                        playing_song_id: track._id,
                        playing_song_name: track.name,
                        playing_song_number: track.trackNumber,
                        playing_song_minutes: Math.floor(track.durationMs / 60000),
                        playing_song_seconds: ((track.durationMs % 60000) / 1000).toFixed(0),
                        is_playing:true
                    })
                    this.audio.src=track.preview_url;
                    this.audio.play();
                    return track;
                }
            })
        }
    }

    /**
     * Gets previous song to play
     * @memberof AlbumWebPlayer
     * @return {void}
     */
    previousSong=()=>{
        if(this.state.playing_song_number === 1 && !this.state.is_shuffling){
            this.setState({
                is_playing:false,
                playing_song_id:"",
                playing_song_number:this.state.album_total_tracks+1
            })
            this.audio.pause();
            this.audio.src="";
        }
        else{
            var currentNum = this.state.playing_song_number;
            if(this.state.is_shuffling){
                currentNum = Math.floor(Math.random() * (this.state.album_total_tracks + 2) );
                while((currentNum - 1 === this.state.playing_song_number) | (currentNum - 1 <= 0)){
                    currentNum = Math.floor(Math.random() * (this.state.album_total_tracks + 2) );
                }
            }

            this.state.tracks.map((track) => {
                if((track.trackNumber === currentNum - 1)){
                    track.artists.map((artist)=>(
                        this.setState({playing_song_artist:artist.name})
                    ));
                    this.setState({
                        playing_song_id: track._id,
                        playing_song_name: track.name,
                        playing_song_number: track.trackNumber,
                        playing_song_minutes: Math.floor(track.durationMs / 60000),
                        playing_song_seconds: ((track.durationMs % 60000) / 1000).toFixed(0),
                        is_playing:true
                    })
                    this.audio.src=track.preview_url;
                    this.audio.play();
                    return track;
                }
            })
        }
    }

    /**
     * Seeks time when slider position is changed by user
     * @memberof AlbumWebPlayer
     * @param time -percentage of the time chosen
     * @return {void}
     */
    seekSong=(time)=>{
        if(this.state.is_playing === true){
            this.audio.currentTime=this.audio.duration * (time/100);
        }
    }

    /**
     * Changes volume when volume slider position is changed by user
     * @memberof AlbumWebPlayer
     * @param volume -percentage of the volume chosen
     * @return {void}
     */
    setPlayerVolume=(volume)=>{
        this.audio.volume=volume/100;
    }

    /**
     * Play/Pause song when button on playing bar pressed
     * @memberof AlbumWebPlayer
     * @return {void}
     */
    PlayPauseButtonPressed=()=>{
        if(this.audio.src !== ""){
            if(this.state.is_playing){
                this.setState({
                    pausedtime:this.audio.currentTime,
                    is_playing:false
                })
                this.audio.pause();
            }
            else{
                this.setState({
                    is_playing:true
                })
                this.audio.play();
                this.audio.currentTime=this.state.pausedtime;
            }
        }
    }

    /**
     * Keeps the track slider moving dynamically according to the current time of playing song
     * @memberof AlbumWebPlayer
     * @return {void}
     */
    playingBarTimer = setInterval(() => {
        if(this.state.is_playing){
            var sec= Math.floor(this.audio.currentTime);
            if(sec > this.audio.duration-1){
                if(this.state.is_repeating){
                    this.audio.play();
                }
                else{
                    this.nextSong();
                }
            }
            else{
                this.setState({
                    playing_song_current_minutes: Math.floor(sec/60),
                    playing_song_current_seconds: (sec % 60).toFixed(0)
                })
            }
        }
    }, 200);

    /**
     * toggles the state of is_repeating when repeat button on playing bar is pressed
     * @memberof AlbumWebPlayer
     * @return {void}
     */
    repeatButtonPressed=()=>{
        this.setState(prevState =>({
            is_repeating:!prevState.is_repeating,
        }))
    }

    /**
     * toggles the state of is_shuffling when shuffle button on playing bar is pressed
     * @memberof AlbumWebPlayer
     * @return {void}
     */
    shuffleButtonPressed=()=>{
        this.setState(prevState =>({
            is_shuffling:!prevState.is_shuffling
        }))
    }

    render() {
        return (
            <div id="album-bar-webplayer-main-div" className="container-fluid">
                <div id="album-main-row" className="row">
                    <div className="col-lg-2">
                        <SideBar/>
                    </div>
                    <div className="col-lg-10">
                        <HomeNavBar/>
                        <div id="album-webplayer-main-div">
                           <div className="row">
                                <div className="row album-details-div">
                                    <div className="album-image-div">
                                        <img className="album-image" src={this.state.album_image} alt="album pic"/>   {/*TrackImage*/}
                                    </div>
                                    <div className="album-below-image-div">
                                        <div className="album-title-div">
                                            <h1 className="album-title">{this.state.album_name}</h1>
                                            <p className="album-artist">{this.state.artists}</p>
                                        </div>
                                        
                                        {this.props.location.state.myAlbum ? <Link
                                            to={{
                                                pathname: "/artist/track-upload",
                                                state: { myId: this.state.myId},
                                            }}
                                            > 
                                            <button type="button" class="btn btn-success">Upload song</button>

                                        </Link> : <div/> }
                                        
                                        <div className="row album-buttons-div">
                                            <div className="album-play-button-div">
                                                <button type="button" className={(this.state.is_playing?"pause-btn":"play-btn") + " btn btn-success"} onClick={this.PlayPauseButtonPressed}></button>
                                            </div>
                                            <div className="row album-options-div">
                                                <div className="album-heart-div">
                                                    <i className={(this.state.is_liked?"fas fa-heart":"far fa-heart")} title="Save to Your Library" onClick={this.likeButtonPressed}></i>
                                                </div>
                                                <div className="album-dots-div dropdown show" >
                                                    <p className="album-dots" id="albumdropdownMenuButton" data-toggle="dropdown" title="More">...</p>
                                                    <div className="dropdown-menu" aria-labelledby="albumdropdownMenuLink">
                                                        <a className="dropdown-item disabled" href="#">Start Radio</a>
                                                        <a className="dropdown-item disabled" href="#">Save to Your Library</a>
                                                        <a className="dropdown-item disabled" href="#">Add to PLaylist</a>
                                                        <a className="dropdown-item disabled" href="#">Copy Album Link</a>
                                                        <a className="dropdown-item disabled" href="#">Open in Desktop app</a>
                                                    </div>
                                                </div>
                                            </div>                                                
                                        </div>
                                    </div>
                                </div>
                                <div className="tracks-list-div">
                                    <hr className="appear-on-small-screens"/>
                                    <TracksList tracks={this.state.tracks} is_playing={this.state.is_playing} playing_song_id={this.state.playing_song_id} setPlayingSondId={this.setPlayingSondId} albumId={this.props.location.state.myId} myAlbumArtist={this.props.location.state.myAlbum} />
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="row">
                        <PlayingBar id={this.state.playing_song_id} name={this.state.playing_song_name} artist={this.state.playing_song_artist} minutes={this.state.playing_song_minutes} 
                        seconds={this.state.playing_song_seconds} is_playing={this.state.is_playing} current_minutes={this.state.playing_song_current_minutes} current_seconds={this.state.playing_song_current_seconds}
                        setPlayerVolume={this.setPlayerVolume} seekSong={this.seekSong} PlayPauseButtonPressed={this.PlayPauseButtonPressed} nextSong={this.nextSong} previousSong={this.previousSong} 
                        is_repeating={this.state.is_repeating} repeatButtonPressed={this.repeatButtonPressed} is_shuffling={this.state.is_shuffling} shuffleButtonPressed={this.shuffleButtonPressed} />
                </div>
            </div>
        )
    }
}

export default AlbumWebPlayer

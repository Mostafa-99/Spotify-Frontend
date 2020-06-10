import React, { Component } from 'react'
import axios from 'axios'
import HomeNavBar from './../Home/HomeNavBar.js'
import SideBar from './../../SideBar.js'
import Share from './Share'
import TracksList from './TracksList.js'
import PlayingBar from './PlayingBar.js'
import {ConfigContext} from '../../../../Context/ConfigContext'
import './AlbumWebPlayer.css'
import { responseHandler } from '../../../../ReduxStore/Shared.js'

  /**
 * Playlist web player class
 * @extends Component
 */
export class PlaylistWebPlayer extends Component {
    static contextType=ConfigContext;

    audio=new Audio();
    state={
        /**
         * Href of the playlist
         * @memberof PlaylistWebPlayer
         * @type {link}
         */
        myhref:{},
        /**
         * ID of the playlist
         * @memberof PlaylistWebPlayer
         * @type {Object}
         */
        myId:{},//id of current playlist
        /**
         * Name of the playlist
         * @memberof PlaylistWebPlayer
         * @type {String}
         */
        "playlist_name":"",
        /**
         * Array of artists' names
         * @memberof PlaylistWebPlayer
         * @type {Array<String>}
         */
        "artists":"",
        /**
         * Image url of the playlist
         * @memberof PlaylistWebPlayer
         * @type {String}
         */
        "playlist_image":"",
        /**
         * Array of tracks objects 
         * @memberof PlaylistWebPlayer
         * @type {Array<Object>}
         */
        "tracks":[],
        /**
         * States if the user liked the playlist or not
         * @memberof PlaylistWebPlayer
         * @type {Boolean}
         */
        "is_liked":false,
        /**
         * Array of liked tracks' ids
         * @memberof PlaylistWebPlayer 
         * @type {Array<String>}
         */
        "liked_tracks":[],
        /**
         * Total number of tracks in the playlist
         * @memberof PlaylistWebPlayer
         * @type {Number}
         */
        "playlist_total_tracks":0,
        /**
         * ID of the playing song
         * @memberof PlaylistWebPlayer
         * @type {String}
         */
        "playing_song_id":"",
        /**
         * Order of the playing song in the playlist
         * @memberof PlaylistWebPlayer
         * @type {Number}
         */
        "playing_song_number":0,
        /**
         * Name of the playing song
         * @memberof PlaylistWebPlayer
         * @type {String}
         */
        "playing_song_name":"",
        /**
         * if playing song is liked or not
         * @memberof PlaylistWebPlayer
         * @type {Boolean}
         */
        "playing_song_is_liked":false,
        /**
         * Artist of the playing song
         * @memberof PlaylistWebPlayer
         * @type {String}
         */
        "playing_song_artist":"",
        /**
         * Total number of minutes of the playing song
         * @memberof PlaylistWebPlayer
         * @type {Number}
         */
        "playing_song_minutes":0,
        /**
         * Total number of seconds of the playing song
         * @memberof PlaylistWebPlayer
         * @type {Number}
         */
        "playing_song_seconds":0,
        /**
         * Current minute of the playing song
         * @memberof PlaylistWebPlayer
         * @type {Number}
         */
        "playing_song_current_minutes":0,
        /**
         * Current second of the playing song
         * @memberof PlaylistWebPlayer
         * @type {Number}
         */
        "playing_song_current_seconds":0,
        /**
         * Time when the playing song was paused in seconds
         * @memberof PlaylistWebPlayer
         * @type {Number}
         */
        "pausedtime":0,
        /**
         * State of repeat button
         * @memberof PlaylistWebPlayer
         * @type {Boolean}
         */
        "is_repeating":false,
        /**
         * State of shuffle button
         * @memberof PlaylistWebPlayer
         * @type {Boolean}
         */
        "is_shuffling":false,
        /**
         * State of play/pause button
         * @memberof PlaylistWebPlayer
         * @type {Boolean}
         */
        "is_playing":false,
        "pageLoaded": false
    }

    componentDidMount(){
        window.scrollTo(0, 0);

        const{myId}=this.props.location.state;//getting id from parent component
        const{myhref}=this.props.location.state;
        this.state.myId=myId;
        this.state.myhref=myhref;
        this.getPlaylistDetails();
        this.getPlaylistTracks();

    }
    componentWillUnmount(){
        this.audio.pause();
    }

    /**
    * Gets playlist's name,image and get if the user likes the playlist
    * @memberof PlaylistWebPlayer
    */
    getPlaylistDetails(){
        //var link = this.context.baseURL+"/playlists/"+(this.context.baseURL === "https://totallynotspotify.codes/api"? this.state.myId:"12345");
        axios.get("https://spotify.mocklab.io/playlists/12345",{
            headers:{
                'Content-Type':'application/json',
                'authorization': "Bearer "+ localStorage.getItem("token"),
                "id": this.state.myId
            }
        })
        .then(res => {
            if(res.status===200){
                console.log("Playlist details here")
                console.log(res)
                this.setState({
                    playlist_image:res.data.data.playlist.images[0],
                    playlist_name:res.data.data.playlist.name,
                    playlist_total_tracks:res.data.data.playlist.totalTracks
                })
            }
            else responseHandler(res);
        })
        .catch(error => {
            console.log(error);
        })

        //check if playlist is liked
        axios.get("https://spotify.mocklab.io/me/likedPlaylists",{
            headers:{
                'Content-Type':'application/json',
                'authorization': "Bearer "+ localStorage.getItem("token")
            }
        })
        .then(res => {
            if(res.status===200){
                res.data.data.playlists.map((playlist) => {
                    if(playlist._id === this.state.myId){
                        this.setState({
                            is_liked:true
                        })
                        return playlist;
                    }
                })
            }
            else responseHandler(res);
        })
        .catch(error => {
            console.log(error);
        })
    }

    /**
    * Get playlist's tracks with their details in an array of objects
    * @memberof PlaylistWebPlayer
    */
    getPlaylistTracks(){
        //var link = this.context.baseURL+"/playlists/"+(this.context.baseURL === "https://totallynotspotify.codes/api"? this.state.myId:"12345")+"/tracks";
        axios.get("https://spotify.mocklab.io/playlists/12345/tracks",{
            headers:{
                'Content-Type':'application/json',
                'authorization': "Bearer "+ localStorage.getItem("token"),
                "id": this.state.myId
            }
        })
        .then(res => {
            if(res.status===200){
                console.log("Playlist details")
                console.log(res)
                this.setState({
                    tracks:res.data.data.tracksArray,
                    pageLoaded:true
                })
            }
            else responseHandler(res);
        })
        .catch(error => {
            console.log(error);
        })

        //gets array of liked tracks' ids
        axios.get("https://spotify.mocklab.io/me/likedTracks",{
            headers:{
                'Content-Type':'application/json',
                'authorization': "Bearer "+ localStorage.getItem("token")
            }
        })
        .then(res => {
            if(res.status===200){
                res.data.data.tracks.map((track) => (
                    this.state.liked_tracks.push(track._id)
                ))
                console.log("liked tracks: "+this.state.liked_tracks);
            }
            else responseHandler(res);
        })
        .catch(error => {
            console.log(error);
        })
    }

    /**
     * toggles is_liked and sends request to backend to update
     * @memberof PlaylistWebPlayer
     */
    likeButtonPressed=()=>{
        if(!this.state.is_liked){
            axios.put("https://spotify.mocklab.io/me/likePlaylist",{"id":this.state.myId},{
                headers:{
                    'authorization': "Bearer "+ localStorage.getItem("token"),
                }
            })
            .then(res => {
                if(res.status===204){
                    this.setState({
                        is_liked:true
                    })
                }
                else responseHandler(res);
            })
            .catch(error => {
            console.log(error);
            })
        }
        else{
            axios.delete("https://spotify.mocklab.io/me/unlikePlaylist",{
                headers:{
                    'authorization': "Bearer "+ localStorage.getItem("token"),
                },
                data:{
                    "id": this.state.myId
                }
            })
            .then(res => {
                if(res.status===204){
                    this.setState({
                        is_liked:false
                    })
                }
                else responseHandler(res);
            })
            .catch(error => {
            console.log(error);
            })
        }
    }

    /**
     * toggles playing_song_is_liked and sends request to backend
     * @memberof PlaylistWebPlayer
     */
    trackLikeButtonPressed=()=>{
        if(!this.state.playing_song_is_liked && this.state.playing_song_id !== ""){
            axios.put("https://spotify.mocklab.io/me/likeTrack",{"id":this.state.playing_song_id},{
                headers:{
                    'authorization': "Bearer "+ localStorage.getItem("token"),
                }
            })
            .then(res => {
                if(res.status===204){
                    this.setState({
                        playing_song_is_liked:true
                    })
                    this.state.liked_tracks.push(this.state.playing_song_id);
                    console.log("new liked tracks: "+this.state.liked_tracks);
                }
                else responseHandler(res);
            })
            .catch(error => {
            alert(error.response.data.message);
            })
        }
        else if(this.state.playing_song_id !== ""){
            axios.delete("https://spotify.mocklab.io/me/unlikeTrack",{
                headers:{
                    'authorization': "Bearer "+ localStorage.getItem("token"),
                },
                data:{
                    "id": this.state.playing_song_id
                }
            })
            .then(res => {
                if(res.status===204){
                    this.setState(prevState =>({
                        playing_song_is_liked:false,
                        liked_tracks:prevState.liked_tracks.filter(e => e !== prevState.playing_song_id)
                    }))
                    console.log("new liked tracks: "+this.state.liked_tracks);
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
     * @memberof PlaylistWebPlayer
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
                playing_song_is_liked:this.state.liked_tracks.includes(id),
                is_playing:true
            })
            ////////////to avoid integeration conflict/////////////
            if(url === undefined){  
                this.audio.src = "https://nogomistars.com/Online_Foldern/Amr_Diab/Sahraan/Nogomi.com_Amr_Diab-02.Sahran.mp3";
                this.setState({
                    playing_song_minutes:4,
                    playing_song_seconds:46
                })
            }
            else{
                this.audio.src = url;
                this.setState({
                    playing_song_minutes:minutes,
                    playing_song_seconds:seconds
                })
            }
            ///////////////////////////////////////////////////////
            this.audio.play();
        }
    }

    /**
     * Gets next song to play
     * @memberof PlaylistWebPlayer
     * @return {void}
     */
    nextSong=()=>{

        if(this.state.playing_song_number === this.state.playlist_total_tracks && !this.state.is_shuffling){
            this.setState({
                is_playing:false,
                playing_song_id:"",
                playing_song_name:"",
                playing_song_artist:"",
                playing_song_is_liked:false,
                playing_song_number:0
            })
            this.audio.pause();
            this.audio.src="";
        }
        else{
            var currentNum = this.state.playing_song_number;
            if(this.state.is_shuffling && this.state.playlist_total_tracks !== 1){
                currentNum = Math.floor(Math.random() * this.state.playlist_total_tracks);
                while(currentNum + 1 === this.state.playing_song_number){
                    currentNum = Math.floor(Math.random() * this.state.playlist_total_tracks);
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
                        playing_song_is_liked:this.state.liked_tracks.includes(track._id),
                        is_playing:true
                    })

                    ////////////to avoid integeration conflict/////////////
                    if(track.preview_url === undefined){  
                        this.audio.src = "https://nogomistars.com/Online_Foldern/Amr_Diab/Sahraan/Nogomi.com_Amr_Diab-02.Sahran.mp3";
                        this.setState({
                            playing_song_minutes:4,
                            playing_song_seconds:46
                        })
                    }
                    else{
                        this.audio.src=track.preview_url;
                        this.setState({
                            playing_song_minutes: Math.floor(track.durationMs / 60000),
                            playing_song_seconds: ((track.durationMs % 60000) / 1000).toFixed(0)
                        })
                    }
                    ///////////////////////////////////////////////////////

                    this.audio.play();
                    return track;
                }
            })
        }
    }

    /**
     * Gets previous song to play
     * @memberof PlaylistWebPlayer
     * @return {void}
     */
    previousSong=()=>{
        if(this.state.playing_song_number === 1 && !this.state.is_shuffling){
            this.setState({
                is_playing:false,
                playing_song_id:"",
                playing_song_name:"",
                playing_song_artist:"",
                playing_song_is_liked:false,
                playing_song_number:this.state.playlist_total_tracks+1
            })
            this.audio.pause();
            this.audio.src="";
        }
        else{
            var currentNum = this.state.playing_song_number;
            if(this.state.is_shuffling && this.state.playlist_total_tracks !== 1){
                currentNum = Math.floor(Math.random() * (this.state.playlist_total_tracks + 2) );
                while((currentNum - 1 === this.state.playing_song_number) | (currentNum - 1 <= 0)){
                    currentNum = Math.floor(Math.random() * (this.state.playlist_total_tracks + 2) );
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
                        playing_song_is_liked:this.state.liked_tracks.includes(track._id),
                        is_playing:true
                    })

                    ////////////to avoid integeration conflict/////////////
                    if(track.preview_url === undefined){  
                        this.audio.src = "https://nogomistars.com/Online_Foldern/Amr_Diab/Sahraan/Nogomi.com_Amr_Diab-02.Sahran.mp3";
                        this.setState({
                            playing_song_minutes:4,
                            playing_song_seconds:46
                        })
                    }
                    else{
                        this.audio.src=track.preview_url;
                        this.setState({
                            playing_song_minutes: Math.floor(track.durationMs / 60000),
                            playing_song_seconds: ((track.durationMs % 60000) / 1000).toFixed(0)
                        })
                    }
                    ///////////////////////////////////////////////////////
                    
                    this.audio.play();
                    return track;
                }
            })
        }
    }

    /**
     * Seeks time when slider position is changed by user
     * @memberof PlaylistWebPlayer
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
     * @memberof PlaylistWebPlayer
     * @param volume -percentage of the volume chosen
     * @return {void}
     */
    setPlayerVolume=(volume)=>{
        this.audio.volume=volume/100;
    }

    /**
     * Play/Pause song when button on playing bar pressed
     * @memberof PlaylistWebPlayer
     * @return {void}
     */
    PlayPauseButtonPressed=()=>{
        if(this.state.playing_song_name !== ""){
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
        else{
            this.nextSong();
        }
    }

    /**
     * Keeps the track slider moving dynamically according to the current time of playing song
     * @memberof PlaylistWebPlayer
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
     * @memberof PlaylistWebPlayer
     * @return {void}
     */
    repeatButtonPressed=()=>{
        this.setState(prevState =>({
            is_repeating:!prevState.is_repeating,
        }))
    }

    /**
     * toggles the state of is_shuffling when shuffle button on playing bar is pressed
     * @memberof PlaylistWebPlayer
     * @return {void}
     */
    shuffleButtonPressed=()=>{
        this.setState(prevState =>({
            is_shuffling:!prevState.is_shuffling
        }))
    }

    render() {
        return (
        <div>
            <Share url={this.props.location.state.myhref}/>
            <div id="album-bar-webplayer-main-div" className="container-fluid">
                <div id="album-main-row" className="row">
                    <div className="col-lg-2">
                        <SideBar/>
                    </div>
                    <div className="col-lg-10">
                        <HomeNavBar/>
                        <div id="album-webplayer-main-div">
                            {this.state.pageLoaded ? 
                            <div className="row">
                                <div className="row album-details-div">
                                    <div className="album-image-div">
                                        <img className="album-image" src={this.state.playlist_image} alt="playlist pic"/>
                                    </div>
                                    <div className="album-below-image-div">
                                        <div className="album-title-div">
                                            <h1 className="album-title">{this.state.playlist_name}</h1>
                                        </div>
                                        <div className="row album-buttons-div">
                                            <div className="album-play-button-div">
                                                <button type="button" className={"btn btn-success " + (this.state.is_playing?"pause-btn":"play-btn")} onClick={this.PlayPauseButtonPressed}></button>
                                            </div>
                                            <div className="row album-options-div">
                                                <div className="album-heart-div">
                                                    <i className={(this.state.is_liked?"fas fa-heart":"far fa-heart")} title="Save to Your Library" onClick={this.likeButtonPressed}></i>
                                                </div>
                                                <div className="album-dots-div dropdown show" >
                                                    <p className="album-dots" id="albumdropdownMenuButton" data-toggle="dropdown" title="More">...</p>
                                                    <div className="dropdown-menu" aria-labelledby="albumdropdownMenuLink">
                                                        <li className='dropdown-item '>
                                                            <button type="button" id="create-playlist" onClick={this.likeButtonPressed}>
                                                                <span className='list-item-text'>{this.state.is_liked? 'Remove from Your Library' : 'Save to Your Library'}</span>
                                                            </button>
                                                        </li>
                                                        <li className='dropdown-item '>
                                                            <button type="button" id="create-playlist" data-toggle="modal" data-target="#share-static-back-drop">
                                                                <span className='list-item-text'>Share </span>
                                                            </button>
                                                        </li>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tracks-list-div">
                                    <hr className="appear-on-small-screens"/>
                                    <TracksList tracks={this.state.tracks} is_playing={this.state.is_playing} playing_song_id={this.state.playing_song_id} setPlayingSondId={this.setPlayingSondId}/>
                                </div>
                            </div>
                            : 
                            <div className="container w-50 pb-5 align-middle align-self-center d-flex justify-content-center">
                                <div class="spinner-border text-success" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
                <div className="row">
                        <PlayingBar album_image={this.state.playlist_image} id={this.state.playing_song_id} name={this.state.playing_song_name} artist={this.state.playing_song_artist} minutes={this.state.playing_song_minutes} 
                        seconds={this.state.playing_song_seconds} is_playing={this.state.is_playing} current_minutes={this.state.playing_song_current_minutes} current_seconds={this.state.playing_song_current_seconds}
                        setPlayerVolume={this.setPlayerVolume} seekSong={this.seekSong} PlayPauseButtonPressed={this.PlayPauseButtonPressed} nextSong={this.nextSong} previousSong={this.previousSong} 
                        is_repeating={this.state.is_repeating} repeatButtonPressed={this.repeatButtonPressed} is_shuffling={this.state.is_shuffling} shuffleButtonPressed={this.shuffleButtonPressed} 
                        playing_song_is_liked={this.state.playing_song_is_liked} trackLikeButtonPressed={this.trackLikeButtonPressed} />
                </div>
            </div>
        </div>
        )
    }
}

export default PlaylistWebPlayer


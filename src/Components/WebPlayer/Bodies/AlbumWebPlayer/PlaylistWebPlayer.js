import React, { Component } from 'react'
import axios from 'axios'
import HomeNavBar from './../Home/HomeNavBar.js'
import SideBar from './../../SideBar.js'
import TracksList from './TracksList.js'
import {ConfigContext} from '../../../../Context/ConfigContext'
import './AlbumWebPlayer.css'

/**
 * Playlist web player class
 * @extends Component
 */
export class PlaylistWebPlayer extends Component {
    static contextType=ConfigContext;

    audio=new Audio();
    state={
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
        "is_liked":Boolean,
        /**
         * ID of the playing song
         * @memberof PlaylistWebPlayer
         * @type {String}
         */
        "playing_song_id":""
    }

    componentDidMount(){

        const{myId}=this.props.location.state;//getting id from parent component
        this.state.myId=myId;

        this.getPlaylistDetails();
        this.getPlaylistTracks();
    }

    /**
    * Gets playlist's name,image and get if the user likes the playlist
    * @memberof PlaylistWebPlayer
    */
    getPlaylistDetails(){
        axios.get(this.context.baseURL+"/playlists/"+this.state.myId,{
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
                    is_liked:false //get from backend
                })
            }
            else if(res.status===401){
                localStorage.removeItem("loginType");
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("token");
                localStorage.removeItem("userID");
            }
            else{
                alert("error");
            }
        })
        /*
        .catch(error => {
            alert(error.response.data.message);
        })*/
    }

    /**
    * Get playlist's tracks with their details in an array of objects
    * @memberof PlaylistWebPlayer
    */
    getPlaylistTracks(){
        axios.get(this.context.baseURL+"/playlists/"+this.state.myId+"/tracks",{
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
                this.setState({tracks:res.data.data.tracksArray})
            }
            else if(res.status===401){
                localStorage.removeItem("loginType");
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("token");
                localStorage.removeItem("userID");
            }
            else{
                alert("error");
            }
        })
        /*
        .catch(error => {
           alert(error.response.data.message);
        })*/
    }

    /**
     * toggles is_liked and sends request to backend to update
     * @memberof PlaylistWebPlayer
     */
    likeButtonPressed=()=>{
        //send request to like
        this.setState(prevState =>({
            is_liked:!prevState.is_liked
        }))
    }

    /**
     * Plays or stop song
     * @memberof PlaylistWebPlayer
     * @param {string} id -id of the song pressed
     * @return {void}
     */
    setPlayingSondId=(id,url)=>{
        if(this.state.playing_song_id===""){
            this.setState({
                playing_song_id:id
            })
            this.audio.src=url;
            this.audio.play();
        }
        else{
            if(this.state.playing_song_id===id){
                this.setState({
                    playing_song_id:""
                })
                this.audio.pause();
            }
            else{
                this.setState({
                    playing_song_id:id
                })
                this.audio.src=url;
                this.audio.play();
            }
        }
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
                                <img className="album-image" src={this.state.playlist_image} alt="playlist pic"/>
                            </div>
                            <div className="album-below-image-div">
                                <div className="album-title-div">
                                    <h1 className="album-title">{this.state.playlist_name}</h1>
                                </div>
                                <div className="row album-buttons-div">
                                    <div className="album-play-button-div">
                                        <button type="button" className="btn btn-success">PLAY</button>
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
                                                <a className="dropdown-item disabled" href="#">Copy Playlist Link</a>
                                                <a className="dropdown-item disabled" href="#">Open in Desktop app</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tracks-list-div">
                            <hr className="appear-on-small-screens"/>
                            <TracksList tracks={this.state.tracks} playing_song_id={this.state.playing_song_id} setPlayingSondId={this.setPlayingSondId}/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

export default PlaylistWebPlayer

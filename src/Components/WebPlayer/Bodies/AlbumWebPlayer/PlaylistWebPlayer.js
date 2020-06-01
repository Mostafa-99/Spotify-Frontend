import React, { Component } from 'react'
import axios from 'axios'
import HomeNavBar from './../Home/HomeNavBar.js'
import SideBar from './../../SideBar.js'
import Share from './Share'
import TracksList from './TracksList.js'
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
        "is_liked":Boolean,
        /**
         * ID of the playing song
         * @memberof PlaylistWebPlayer
         * @type {String}
         */
        "playing_song_id":""
    }

    componentDidMount(){

        const{myId}=this.props.location.state.myId;//getting id from parent component
       const{myhref}=this.props.location.state.myhref;
        this.state.myId=myId;
        this.state.myhref=myhref;
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
            else responseHandler(res);
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
            else responseHandler(res);
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
      //  console.log("My href")
        console.log(this.props.location.state);

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
                                                        <a className="dropdown-item " href="#">Start Radio</a>
                                                        <a className="dropdown-item " href="#">Save to Your Library</a>
                                                        <a className="dropdown-item " href="#">Add to PLaylist</a>
                                                        <a className="dropdown-item " href="#">Copy Playlist Link</a>
                                                        <a className="dropdown-item  " href="#">Open in Desktop app</a>
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
                                    <TracksList tracks={this.state.tracks} playing_song_id={this.state.playing_song_id} setPlayingSondId={this.setPlayingSondId}/>
                                </div>
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


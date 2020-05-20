import React, { Component } from 'react'
import axios from 'axios'
import HomeNavBar from './../Home/HomeNavBar.js'
import SideBar from './../../SideBar.js'
import TracksList from './TracksList.js'
import {ConfigContext} from '../../../../Context/ConfigContext'
import './AlbumWebPlayer.css'
import ArtistPageBtn from '../../../Artist/Albums/AlbumPageBtn'
import AlbumPageBtn from '../../../Artist/Albums/AlbumPageBtn'
import { Link } from "react-router-dom";

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
        /**
         * ID of the playing song
         * @memberof AlbumWebPlayer
         * @type {String}
         */
        "playing_song_id":""
    }

    componentDidMount(){

        const{myId}=this.props.location.state;//getting id from parent component
        this.state.myId=myId;
        console.log(myId);
        this.getAlbumDetails();
        this.getAlbumTracks();
    }

    /**
    * Gets album's name,image and get if the user likes the album
    * @memberof AlbumWebPlayer
    */
    getAlbumDetails(){
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
                    is_liked:false //get from backend
                })
                res.data.data.album.artists.map((artist)=>(
                    this.setState({
                        artists:artist.name
                    })
                ))
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
        .catch(error => {
            alert(error.response.data.message);
        })
    }

    /**
    * Get album's tracks with their details in an array of objects
    * @memberof AlbumWebPlayer
    */
    getAlbumTracks(){
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
        .catch(error => {
           alert(error.response.data.message);
        })
    }

    /**
     * toggles is_liked and sends request to backend to update
     * @memberof AlbumWebPlayer
     */
    likeButtonPressed=()=>{
        //send request to like or unlike
        this.setState(prevState =>({
            is_liked:!prevState.is_liked
        }))
    }

    /**
     * Plays or stop song
     * @memberof AlbumWebPlayer
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
                                <img className="album-image" src={this.state.album_image} alt="album pic"/>
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
                            <TracksList tracks={this.state.tracks} playing_song_id={this.state.playing_song_id} setPlayingSondId={this.setPlayingSondId} albumId={this.props.location.state.myId} myAlbumArtist={this.props.location.state.myAlbum} />
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

export default AlbumWebPlayer

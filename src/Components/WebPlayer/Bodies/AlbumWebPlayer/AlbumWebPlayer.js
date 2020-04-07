import React, { Component } from 'react'
import axios from 'axios'
import HomeNavBar from './../Home/HomeNavBar.js'
import SideBar from './../../SideBar.js'
import TracksList from './TracksList.js'
import Album_Image from './../../../../Images/albumImage.jpg'

import './AlbumWebPlayer.css'

/**
 * Album web player class
 * @extends Component
 */
export class AlbumWebPlayer extends Component {

    audio=new Audio();
    state={
        myId:{},//id of current album
        /**
         * Name of the album
         * @type {String}
         */
        "album_name":"",
        /**
         * ID of the album
         * @type {String}
         */
        "album_id":"",
        /**
         * Array of artists' names
         * @type {Array<String>}
         */
        "artists":[],
        /**
         * Image url of the album
         * @type {String}
         */
        "album_image_url":"",
        /**
         * Array of tracks objects 
         * @type {Array<Object>}
         */
        "tracks":[],
        /**
         * States if the user liked the album or not
         * @type {Boolean}
         */
        "is_liked":Boolean,
        /**
         * ID of the playing song
         * @type {String}
         */
        "playing_song_id":""
    }

    componentDidMount(){

        const{myId}=this.props.location.state;//getting id from parent component
        this.state.myId=myId;
        console.log("this album id is : ",this.state.myId);//this to how to get current album id to request data from back end (this.state.myId)

        this.getAlbumDetails();
        this.getAlbumTracks();
   }

   /**
    * Gets album's name,image url and get if the user likes the album
    */
   getAlbumDetails(){
       //http://localhost:3000/albums/1
        axios.get('http://localhost:3000/albums/'+this.state.album_id,{headers:{authorization:localStorage.getItem("token")}})
        .then(res => {
            if(res.status===200){  
                /*if returns array
                res.data.map((album)=>(
                    this.setState({
                    album_image_url:album.images,
                    album_name:album.name,
                    is_liked:false //get from backend
                })
                    album.artists.map(
                        (artist)=>(this.setState({artists:artist.name}))
                    )
                ))
                */

                //if object
                this.setState({
                    album_image_url:res.data.images,
                    album_name:res.data.name,
                    is_liked:false //get from backend
                })
                res.data.artists.map((artist)=>(this.setState({artists:artist.name})))
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
    */
   getAlbumTracks(){
    //'http://localhost:3000/album_tracks/1'
    axios.get('http://localhost:3000/albums/'+this.state.album_id+'/tracks',{headers:{authorization:localStorage.getItem("token")}})
           .then(res => {
               if(res.status===200){
                    /*if returns array
                    res.data.map((album_tracks)=>(
                        this.setState({tracks:album_tracks.items}))
                    )
                    */

                    //if object
                    this.setState({tracks:res.data.items})
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
     */
    likeButtonPressed=()=>{
        //send request to like
        this.setState(prevState =>({
            is_liked:!prevState.is_liked
        }))
    }

    /**
     * Plays or stop song
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
                                <img className="album-image" src={this.state.album_image_url} alt="album pic"/>
                            </div>
                            <div className="album-below-image-div">
                                <div className="album-title-div">
                                    <h1 className="album-title">{this.state.album_name}</h1>
                                    <p className="album-artist">{this.state.artists}</p>
                                </div>
                                <div className="row album-buttons-div">
                                    <div className="album-play-button-div">
                                        <button type="button" className="btn btn-success"></button>
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

export default AlbumWebPlayer

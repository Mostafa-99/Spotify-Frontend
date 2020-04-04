import React, { Component } from 'react'
import axios from 'axios'
import HomeNavBar from './../Home/HomeNavBar.js'
import SideBar from './../../SideBar.js'
import TracksList from './TracksList.js'
import Album_Image from './../../../../Images/albumImage.jpg'

import './AlbumWebPlayer.css'

export class AlbumWebPlayer extends Component {
    state={
        "name":"",
        "id":"",
        "artists":[],
        "image":"",
        "tracks":[],
        "is_liked":Boolean,
        "playing_song_id":""
    }

    componentDidMount(){
        this.getAlbumDetails();
        this.getAlbumTracks();
   }

   getAlbumDetails(){
        axios.get('http://localhost:3000/album/1')
        .then(res => {
            /*if returns array
            res.data.map((album)=>(
                this.setState({image:album.images}),
                this.setState({name:album.name}),
                album.artists.map(
                    (artist)=>(this.setState({artists:artist.name}))
                )
            ))
            */

           //if object
            this.setState({
                image:res.data.images,
                name:res.data.name,
                is_liked:false //get from backend
            })
            res.data.artists.map((artist)=>(this.setState({artists:artist.name})))
        }
        )
        .catch(error => {
            alert(error.response.data.message);
        })
   }

   getAlbumTracks(){
    axios.get('http://localhost:3000/album_tracks/1')
           .then(res => 
                /*if returns array
                res.data.map((album_tracks)=>(
                    this.setState({tracks:album_tracks.items}))
                )
                */

                //if object
                this.setState({tracks:res.data.items})
           )
           .catch(error => {
               alert(error.response.data.message);
           })
    }

    likeButtonPressed=()=>{
        this.setState(prevState =>({
            is_liked:!prevState.is_liked
        }))
    }

    setPlayingSondId=(id)=>{
        if(this.state.playing_song_id===id){
            this.setState({
                playing_song_id:""
            })
        }
        else{
            this.setState({
                playing_song_id:id
            })
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
                                <img className="album-image" src={Album_Image} alt="album pic"/>
                            </div>
                            <div className="album-below-image-div">
                                <div className="album-title-div">
                                    <h1 className="album-title">{this.state.name}</h1>
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

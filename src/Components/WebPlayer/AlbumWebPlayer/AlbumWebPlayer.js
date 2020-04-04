import React, { Component } from 'react'
import axios from 'axios'
import HomeNavBar from './../Bodies/Home/HomeNavBar.js'
import SideBar from '../SideBar.js'
import TracksList from './TracksList.js'
import Album_Image from './../../../Images/albumImage.jpg'

import './AlbumWebPlayer.css'

export class AlbumWebPlayer extends Component {
    state={
        "name":"",
        "id":"",
        "artists":[],
        "image":"",
        "tracks":[]
    }

    componentDidMount(){
        this.getAlbumDetails();
        this.getAlbumTracks();
   }

   getAlbumDetails(){
        axios.get('http://localhost:3000/album/')
        .then(res => {
            res.data.map((album)=>(
                this.setState({image:album.images}),
                this.setState({name:album.name}),
                album.artists.map(
                    (artist)=>(this.setState({artists:artist.name}))
                )
            ))
        }
        )
        .catch(error => {
            alert(error.response.data.message);
        })
   }

   getAlbumTracks(){
    axios.get('http://localhost:3000/album_tracks/')
           .then(res => 
                res.data.map((album_tracks)=>(
                    this.setState({tracks:album_tracks.items}))
                )
           )
           .catch(error => {
               alert(error.response.data.message);
           })
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
                                            <i className="fa fa-heart"title="Save to Your Library"></i>
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
                            <TracksList tracks={this.state.tracks}/>
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

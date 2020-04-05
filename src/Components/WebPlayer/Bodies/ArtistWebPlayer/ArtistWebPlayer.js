import React, { Component } from 'react';
import ArtistWebPlayerNavBar from './ArtistWebPlayerNavBar'
import SideBar from '../../SideBar'
import '../Bodies.css';
import './ArtistWebPlayer.css'
import axios from 'axios'
class ArtistWebPlayer extends Component {
    constructor(){
        super()
        this.state = {
            artist:{},
            albums:[],
            playLists:[],
            relatedArtists:[],
            bio:{},
            nowPlaying:{
                id:-1
            }
        }
        this.togglePlayPause=this.togglePlayPause.bind(this)

    }

    componentDidMount() {
        axios.get('http://www.mocky.io/v2/5e88c77e3100007c00d39aad')/* artist*/
            .then(res => {
                this.setState(prevState => ({
                    artist: {                   
                        ...prevState.artist,    
                        id:res.data.id,
                        name:res.data.name,
                        bio:res.data.artistInfo.biography      
                    }
                
            }))
        })
                   
            
        axios.get("http://www.mocky.io/v2/5e74bc56300000d331a5f62f")/* albums*/
            .then(res => {
                this.setState({
                    albums: res.data.map( album => ({
                        name:album.name,
                        id:album.id,
                        imageUrl:album.images[0]
                    }))
                })
                console.log(this.state.albums)
            })

        axios.get("http://www.mocky.io/v2/5e749724300000d431a5f4c6")/* playlists*/
            .then(res => {
                this.setState({
                    playLists: res.data.map( playList => ({
                        id:playList.id,
                        name:playList.name,
                        imageUrl:playList.images[0]
                    }))
                })
                console.log(this.state.playLists)
            })


        axios.get("http://www.mocky.io/v2/5e87635f3100002a003f44d4")/* related artists*/
            .then(res => {
                this.setState({
                    relatedArtists: res.data.map( relatedArtist => ({
                        id:relatedArtist.id,
                        name:relatedArtist.name,
                        imageUrl:relatedArtist.images[0],
                        type:relatedArtist.type
                    }))
                })
                console.log(this.state.relatedArtists)
                
            })                                           
    }
    
        togglePlayPause(sid) {
            if(this.state.nowPlaying.id==-1)
            {
                const cardButtons=document.getElementById(sid);
                const playButton = cardButtons.querySelector('.play-btn');
                const pauseButton = cardButtons.querySelector('.pause-btn');
                playButton.classList.toggle('active-play');
                pauseButton.classList.toggle('active-pause');
                this.setState({nowPlaying: {id: sid}})
            }
            else if(this.state.nowPlaying.id==sid)
            {
                const cardButtons=document.getElementById(sid);
                const playButton = cardButtons.querySelector('.play-btn');
                const pauseButton = cardButtons.querySelector('.pause-btn');
                playButton.classList.toggle('active-play');
                pauseButton.classList.toggle('active-pause');
                this.setState({nowPlaying: {id: -1}})
            }
            else
            {
                const nowPlayingSong=document.getElementById(this.state.nowPlaying.id);
                const playButtonPrev = nowPlayingSong.querySelector('.play-btn');
                const pauseButtonPrev = nowPlayingSong.querySelector('.pause-btn');
                playButtonPrev.classList.toggle('active-play');
                pauseButtonPrev.classList.toggle('active-pause');
                const cardButtons=document.getElementById(sid);
                const playButton = cardButtons.querySelector('.play-btn');
                const pauseButton = cardButtons.querySelector('.pause-btn');
                playButton.classList.toggle('active-play');
                pauseButton.classList.toggle('active-pause');
                this.setState({nowPlaying: {id: sid}})
            }
    }
    render()
    {
        console.log(localStorage);
    return(
        
        <div id='webplayer-layout'className="container webplayer col-12">
            <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/></head>
            <div className="row webplayer-body m-0">
                <nav className="col-lg-2 webplayer-sidebar-body colums-no-padding">
                    <SideBar/>
                </nav>
                <div className="col-lg-10 col-sm-12 webplayer-body-and-navbar colums-no-padding">
                    <ArtistWebPlayerNavBar/>
                    <div id="artist-webplayer">
                        <div id="artist-overview-section"className="artist-overview-section">
                            <div className="popular-sub-section">
                                
                            </div>
                            <div className="albums-sub-section">
                                <div className="card-group">
                                    {this.state.albums.map( album => (
                                        <div>
                                            <div className="card">
                                                <img src={album.imageUrl} className="card-img-top rounded-circle" alt="..."></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">{album.name}</h5>
                                                    <div id={album.id}>
                                                        <button className="btn btn-primary play-btn active-play" onClick={()=> this.togglePlayPause(album.id)}><i className="fa fa-play"></i></button>
                                                        <button className="btn btn-primary pause-btn" onClick={()=> this.togglePlayPause(album.id)}><i className="fa fa-pause"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    )}
                                </div>   
                            </div>
                            <div className="playlists-sub-section">
                                
                            </div>
                            
                        </div>
                        <div id="about-section" className="about-section hide">
                            <h2 className="section-title ">Biography</h2>
                            <p className="section-body">  {this.state.artist.bio} </p>
                        </div>
                        <div id="related-artists-section"className="related-artists-section hide">
                            <div className="card-group">
                                {this.state.relatedArtists.map( artist => (
                                    <div>
                                        <div className="card">
                                            <img src={artist.imageUrl.url} className="card-img-top rounded-circle" alt="..."></img>
                                            <div className="card-body">
                                                <h5 className="card-title">{artist.name}</h5>
                                                <p className="card-text">{artist.type}</p>
                                                <div id={artist.id}>
                                                    <button className="btn btn-primary play-btn active-play" onClick={()=> this.togglePlayPause(artist.id)}><i className="fa fa-play"></i></button>
                                                    <button className="btn btn-primary pause-btn" onClick={()=> this.togglePlayPause(artist.id)}><i className="fa fa-pause"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                                )}
                            </div>     
                            
                        </div>                                                                         
                     </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 colums-no-padding">
                    {/*<ProgressBar/>*/}
                </div>
            </div>
            
        </div>
    )
                        }
}
export default ArtistWebPlayer;
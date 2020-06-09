import React, { Component } from 'react';
import ArtistWebPlayerNavBar from './ArtistWebPlayerNavBar'
import SideBar from '../../SideBar'
import '../Bodies.css';
import './ArtistWebPlayer.css'
import axios from 'axios'
import TracksList from '../AlbumWebPlayer/TracksList';

import {ConfigContext} from '../../../../Context/ConfigContext'
import { Link } from 'react-router-dom';
import { responseHandler } from '../../../../ReduxStore/Shared';

/** Class of artist webplayer page.
 * @extends Component
 */
class ArtistWebPlayer extends Component {
    static contextType=ConfigContext;
    constructor(){
        super()
        this.state = {
            /**
             * ID of the current artist
             * @type {Object}
             */
            myId:{},
            /**the current artist
             * @memberof ArtistWebPlayer
             * @type {object}
             */
            artist:{},
            /**Array of Albums of the artist
             * @memberof ArtistWebPlayer
             * @type {Array}
             */
            albums:[],
            /**Array of playlists of the artist
             * @memberof ArtistWebPlayer
             * @type {Array}
             */
            playLists:[],
            /**Array of relted artists
             * @memberof ArtistWebPlayer
             * @type {Array}
             */
            relatedArtists:[],
            /**bio of the artist
             * @memberof ArtistWebPlayer
             * @type {string}
             */
            bio:{},
            /**Array of Albums of the artist
             * @memberof ArtistWebPlayer
             * @type {Array}
             */
            tracks:[],
            /**
            * ID of the playing song
            * @type {String}
            */
            nowPlaying:{
                id:-1
            },
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
           "artists":"",
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
           "playing_song_id":"",
           /**
            * States if the user following the artist or not
            * @type {string}
            */
           "isFollowed":Boolean,

        }
        this.togglePlayPause=this.togglePlayPause.bind(this);
        this.setFollowing=this.setFollowing.bind(this);
        this.followHandler=this.followHandler.bind(this);
    }
    
    /**When the component mounts it sends a request to the backend to load the albums
     * @memberof ArtistWebPlayer
     */
    componentDidMount() {
        window.scrollTo(0, 0);
        const{myId}=this.props.location.state;//getting id from parent component
        this.state.myId=myId;

        /*http://www.mocky.io/v2/5e88c77e3100007c00d39aad */
        /*' http://we871.mocklab.io/artists/200 */
       // axios.get(this.context.baseURL+"/artists/" + this.state.myId,{  /*artist*/
        axios.get("https://spotify.mocklab.io/artists/5e923dd09df6d9ca9f10a473",{  /*artist*/
            headers:{
                'authorization': "Bearer "+localStorage.getItem("token"),
                "id": this.state.myId
            }}
                )
            .then(res => {
                if(res.status===200)
                {   
                    this.setFollowing(res.data.data.following); 
                    this.setState(prevState => ({
                    artist: {                   
                        ...prevState.artist,    
                        id:res.data.data._id,
                        name:res.data.data.name,
                        bio:res.data.data.artistInfo.biography      
                    }
                }))
                }
                else responseHandler(res);
                
        })

            /* http://www.mocky.io/v2/5e74bc56300000d331a5f62f */
            /* /artists/"+this.state.myId+"/albums */
        axios.get(this.context.baseURL+"/artists/"+this.state.myId+"/albums",{/* albums */
            headers:{
                'authorization': "Bearer "+localStorage.getItem("token"),
                "id": this.state.myId
            }}
            )
            .then(res => {
                if(res.status===200)
                {   
                    this.setState({
                        albums: res.data.data.map( album => ({
                            name:album.name,
                            id:album._id,
                            imageUrl:album.image
                        }))
                    })
                }
                else responseHandler(res);
                
            })

            /*  http://www.mocky.io/v2/5e749724300000d431a5f4c6*/
        axios.get(this.context.baseURL+"/artists/"+this.state.myId+"/created-playlists",{/* playlists*/
            headers:{
                'authorization': "Bearer "+localStorage.getItem("token"),
                "id": this.state.myId
            }}
            )
            .then(res => {
                if(res.status===200)
                {   
                    this.setState({
                        playLists: res.data.data.map( playList => ({
                            id:playList._id,
                            name:playList.name,
                            imageUrl:playList.images[0]
                        }))
                    })
                }
                else responseHandler(res);
            })

                /* http://www.mocky.io/v2/5e87635f3100002a003f44d4*/
                /* */
                /**http://we871.mocklab.io/artists/200/relatedArtists */
        axios.get(this.context.baseURL+"/artists/"+this.state.myId+"/related-artists",{/* related artists*/
            headers:{
                'authorization': "Bearer "+localStorage.getItem("token"),
                "id": this.state.myId
            }}
            )
            .then(res => {
                if(res.status===200)
                {   
                    this.setState({
                        relatedArtists: res.data.data.map( relatedArtist => ({
                            id:relatedArtist._id,
                            name:relatedArtist.name,
                            imageUrl:relatedArtist.images[0],
                            type:relatedArtist.role
                        }))
                    })
                }
                else responseHandler(res);
            })     
            this.getAlbumTracks();    
                                                
    }
        /**get all tracks of the album 
         * @type {Function}
         * @memberof ArtistWebPlayer
         */
        getAlbumTracks(){
            /* http://localhost:3000/album_tracks/1*/
            axios.get(this.context.baseURL+"/artists/"+this.state.myId+"/top-tracks",{/* top tracks*/
                headers:{
                    'authorization': "Bearer "+localStorage.getItem("token"),
                    "id": this.state.myId
                }}
                )
                .then(res => {
                    if(res.status===200)
                {   
                    this.setState({tracks:res.data.data})
                }
                else responseHandler(res);
                }    
                )
                .catch(error => {
                    alert(error.response.data.message);
                })
                
            }

        /**set currently playing song to an id 
         * @type {Function}
         * @memberof ArtistWebPlayer
         */
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

        /**to determine which section we are in and choose it and makes its backgroung color changes
         * @type {Function}
         * @memberof ArtistWebPlayer
         */
        sectionTypeHandle(type){
            if(type===1)//overview
            {
                document.getElementById("artist-overview-section").classList.remove("hide");
                document.getElementById("about-section").classList.add("hide");
                document.getElementById("related-artists-section").classList.add("hide");

                document.getElementById("artist-overview-button").classList.add("background-grey");
                document.getElementById("about-button").classList.remove("background-grey");
                document.getElementById("related-artists-button").classList.remove("background-grey");
            }
            else if(type===2)//related artists
            {
                document.getElementById("artist-overview-section").classList.add("hide");
                document.getElementById("about-section").classList.add("hide");
                document.getElementById("related-artists-section").classList.remove("hide");

                document.getElementById("artist-overview-button").classList.remove("background-grey");
                document.getElementById("about-button").classList.add("background-grey");
                document.getElementById("related-artists-button").classList.remove("background-grey");
            }
            else if(type===3)//about
            {
                document.getElementById("artist-overview-section").classList.add("hide");
                document.getElementById("about-section").classList.remove("hide");
                document.getElementById("related-artists-section").classList.add("hide");

                document.getElementById("artist-overview-button").classList.remove("background-grey");
                document.getElementById("about-button").classList.remove("background-grey");
                document.getElementById("related-artists-button").classList.add("background-grey");
            }
        }
        
        /**toggle cards play pause buttons
         * @type {Function}
         * @memberof ArtistWebPlayer
         */
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
        /**toggle between follow and following buttons
         * @type {Function}
         * @memberof ArtistWebPlayer
         */
        setFollowing(type) {
            if(type==1){
                document.getElementById("artist-follow-button").classList.add("hide");
                document.getElementById("artist-following-button").classList.remove("hide");
            }
            else{
                document.getElementById("artist-follow-button").classList.remove("hide");
                document.getElementById("artist-following-button").classList.add("hide");
            }
        }
        /**toggle following statues, calls for follow/unfollow
         * @type {Function}
         * @memberof ArtistWebPlayer
         */
        followHandler(type){
            if(type==0){
                this.setState({isFollowed: '1'});
                this.follow();
                this.setFollowing(1);
            }
            else{
                this.setState({isFollowed: '0'});
                this.unfollow();
                this.setFollowing(0);
            }
        }
        /**sending requests for follow
         * @type {Function}
         * @memberof ArtistWebPlayer
         */
        follow(){
            console.log("before click ( followed? ):",this.state.isFollowed);
            axios
            .put("http://spotify.mocklab.io/me/following",{
              "id":this.state.myId
            } ,{
              headers: {
                authorization: "Bearer " + localStorage.getItem("token"),
              },
            })
            .then((res) => {
              console.log(res);
              if (res.status === 200) {
               console.log("edited : ",this.state.isFollowed);
              }
            });
          }
          /**sending requests for unfollow
         * @type {Function}
         * @memberof ArtistWebPlayer
         */
        unfollow(){
            console.log("before click ( followed? ):",this.state.isFollowed);
            axios
            .put("http://spotify.mocklab.io/me/following",{
              "id":this.state.myId
            } ,{
              headers: {
                authorization: "Bearer " + localStorage.getItem("token"),
              },
            })
            .then((res) => {
              console.log(res);
              if (res.status === 200) {
               console.log("edited : ",this.state.isFollowed);
              }
            });
          }
    render()
    {
        {document.title ="Spotify - "+this.state.artist.name }
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
                        <div id="artist-heading">
                            <h1 id="artist-heading-name"><strong>{this.state.artist.name}</strong></h1>
                            <div id="artist-buttons" className="col-4">
                                <span ><button id="artist-play-button">PLAY</button></span>
                                <span ><button id="artist-follow-button" onClick={event => this.followHandler(0)}>Follow</button></span>
                                <span ><button id="artist-following-button" className="hide"onClick={event => this.followHandler(1)}>Following</button></span>
                            </div>
                            <div id="artist-sections-nav">
                                <a id="artist-overview-button" onClick={() => this.sectionTypeHandle(1)} href="#" className="btn-outline btn-lg background-grey" role="button" aria-pressed="true">Overview</a>
                                <a id="about-button" onClick={() => this.sectionTypeHandle(2)} href="#" className="btn-outline btn-lg no-background" role="button" aria-pressed="true">Related artists</a>
                                <a id="related-artists-button" onClick={() => this.sectionTypeHandle(3)} href="#" className="btn-outline btn-lg no-background" role="button" aria-pressed="true">About</a>
                            </div>
                        </div>
                        <div id="artist-overview-section"className="artist-overview-section">
                            <div className="popular-sub-section">
                                <h2 className="section-title albums">Popular</h2>
                                <TracksList tracks={this.state.tracks} playing_song_id={this.state.playing_song_id} setPlayingSondId={this.setPlayingSondId}/>
                            </div>
                            <div className="albums-sub-section">
                                <h2 className="section-title albums">Albums</h2>
                                <div className="card-group">
                                    {this.state.albums.map( album => (
                                        <div>
                                            <Link to={{
                                                    pathname:"/webplayer/album",
                                                    state:{
                                                    myId :album.id
                                                    }
                                                }}>
                                                <div className="card" id={album.id}>
                                                    <img src={album.imageUrl} className="card-img-top" alt="..."></img>
                                                        <div className="card-body">
                                                            <h5 className="card-title">{album.name}</h5>
                                                            <div id={album.id}>
                                                                <button id={album.id} className="btn btn-primary play-btn active-play" onClick={()=> this.togglePlayPause(album.id)}><i className="fa fa-play"></i></button>
                                                                <button id={album.id} className="btn btn-primary pause-btn" onClick={()=> this.togglePlayPause(album.id)}><i className="fa fa-pause"></i></button>
                                                            </div>
                                                        </div> 
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>    
                            </div>
                            <div className="playlists-sub-section">
                                <h2 className="section-title playlists">Playlists</h2>
                                <div className="card-group">
                                    {this.state.playLists.map( playList => (
                                        <div>
                                             <Link to={{
                                                    pathname:"/playlist-webplayer",
                                                    state:{
                                                    myId :playList.id
                                                    }
                                                }}>
                                            <div className="card" id={playList.id}>
                                                <img src={playList.imageUrl} className="card-img-top" alt="..."></img>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{playList.name}</h5>
                                                        <div id={playList .id}>
                                                            <button id={playList.id} className="btn btn-primary play-btn active-play" onClick={()=> this.togglePlayPause(playList.id)}><i className="fa fa-play"></i></button>
                                                            <button id={playList.id} className="btn btn-primary pause-btn" onClick={()=> this.togglePlayPause(playList.id)}><i className="fa fa-pause"></i></button>
                                                        </div>
                                                    </div> 
                                                </div>
                                                </Link>
                                        </div>
                                    ))}
                                </div>   
                            </div>
                        </div>
                        <div id="about-section" className="about-section hide">
                            <h2 className="bio-title">Biography</h2>
                            <p className="section-body">  {this.state.artist.bio} </p>
                        </div>
                        <div id="related-artists-section"className="related-artists-section hide">
                            <div className="card-group">
                                {this.state.relatedArtists.map( artist => (
                                    <div>
                                        <div className="card">
                                            <img src={artist.imageUrl} className="card-img-top rounded-circle" alt="..."></img>
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
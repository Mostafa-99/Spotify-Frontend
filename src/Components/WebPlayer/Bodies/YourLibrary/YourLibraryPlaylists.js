import React, { Component } from 'react';
import YourLibraryNavBar from './YourLibraryNavBar';
import SideBar from '../../SideBar';
import '../Bodies.css';
import './YourLibrary.css';
import axios from 'axios';
import TracksList from '../AlbumWebPlayer/TracksList';

import { ConfigContext } from '../../../../Context/ConfigContext';
import { Link } from 'react-router-dom';
import { responseHandler } from '../../../../ReduxStore/Shared';

/** Class of Your library - playlists webplayer page.
 * @extends Component
 */
class YourLibraryPlaylists extends Component {
    static contextType=ConfigContext;
    constructor(){
        super()
        this.state = {
            /**Array of playlists of the artist
             * @memberof YourLibraryPlaylists
             * @type {Array}
             */
            playLists:[],
            /**Array of liked songs 
            * @memberof YourLibraryPlaylists
            * @type {Array}
            */
            likedSongs:[],
            /**
            * ID of the playing song
            * @type {String}
            */
            nowPlaying:{
                id:-1
            }

        }
        this.togglePlayPause=this.togglePlayPause.bind(this)

    }
    
    componentDidMount() {

    /*  http://www.mocky.io/v2/5e749724300000d431a5f4c6*/
    /*axios.get(this.context.baseURL+"/artists/"+this.state.myId+"/created-playlists",{/* playlists*/
        axios.get("https://spotify.mocklab.io/artists/5e923dd09df6d9ca9f10a473/created-playlists",{
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
                            imageUrl:playList.images[0],
                            href:playList.href
                        }))
                    })
                }
                else responseHandler(res);
            })

             /*  http://www.mocky.io/v2/5e749724300000d431a5f4c6*/
    /*axios.get(this.context.baseURL+"/artists/"+this.state.myId+"/created-playlists",{*/
    axios.get("https://spotify.mocklab.io/your-library",{
        headers:{
            'authorization': "Bearer "+localStorage.getItem("token"),
            "id": this.state.myId
        }}
        )
        .then(res => {
            if(res.status===200)
            {   
                this.setState({
                    likedSongs: res.data.likedTracks.map( likedSong => ({
                        id:likedSong._id,
                        name:likedSong.name,
                        artistname:likedSong.artists.name
                    }))
                })
            }
            else responseHandler(res);
        })
    }

    /**toggle cards play pause buttons
         * @type {Function}
         * @memberof YourLibraryPlaylists
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
        
	render() {
		/*console.log("liked songs : ",this.state.likedSongs);*/
		{document.title ="Spotify - Your Library"}
		return (
			<div id="webplayer-layout" className="container your-library webplayer col-12">
				<head>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
					/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
				</head>
                <h3 className="section-title playlists text-white mb-3 pb-3"><strong>Playlists</strong></h3>
				
                <div className="playlists-sub-section">
                                <div className="container card-group">
                                    <div id='liked-songs-container'className="col-4 webplayer-body ">
                                        <div to=''>{/* change div to Link for likes to work*/}
                                            <div id='likes-card' className="card bg-primary text-white text-left">
                                            {this.state.likedSongs.map( likedSong => (
                                                <div class="blockquote mb-0">
                                                    <h4 id='liked-songs-names'><strong><div id="in-same-line"> * </div></strong></h4>
                                                    <h4 id='liked-songs-names'>
                                                        <div id="in-same-line">{likedSong.artistname} </div>
                                                        <div id="in-same-line" className="text-grey ">{likedSong.name}</div>
                                                    </h4>
                                                    <footer class="container blockquote-footer text-left text-white text-bottom ">
                                                        <span className='bottom-card-text'>
                                                            <h2 className="mb-2 mt-0">Liked Songs</h2>
                                                            <h4 className="mb-0 mt-2">{this.state.likedSongs.length} liked songs</h4>
                                                        </span>
                                                        <span  id="liked-songs">
                                                                <button id="liked-songs" className="btn btn-primary play-btn active-play m-0 p-0 " onClick={()=> this.togglePlayPause("liked-songs")}><i className="fa fa-play"></i></button>
                                                                <button id="liked-songs" className="btn btn-primary pause-btn m-0 p-0" onClick={()=> this.togglePlayPause("liked-songs")}><i className="fa fa-pause"></i></button>
                                                        </span>
                                                    </footer>
                                                </div>
                                            ))}
                                            </div>
                                        </div>
                                    </div>
                                    {this.state.playLists.map( playList => (
                                        <div>
                                             <Link to={{
                                                    pathname:"/playlist-webplayer",
                                                    state:{
                                                    myId :playList.id,
                                                    myhref:playList.href,
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
				<div className="row">
					<div className="col-12 colums-no-padding">{/*<ProgressBar/>*/}</div>
				</div>
			</div>
		);
	}
}
export default YourLibraryPlaylists;

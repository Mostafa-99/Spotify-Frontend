import React, { Component } from 'react';
import YourLibraryNavBar from './YourLibraryNavBar';
import SideBar from '../../SideBar';
import '../Bodies.css';
import './YourLibrary.css';
import axios from 'axios';

import { ConfigContext } from '../../../../Context/ConfigContext';
import { Link } from 'react-router-dom';
import { responseHandler } from '../../../../ReduxStore/Shared';

/** Class of Your library - Albums webplayer page.
 * @extends Component
 */
class YourLibraryAlbums extends Component {
    static contextType=ConfigContext;
    constructor(){
        super()
        this.state = {
            /**Array of Albums of the artist
             * @memberof YourLibraryAlbums
             * @type {Array}
             */
            albums:[],
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
        

            /* http://www.mocky.io/v2/5e74bc56300000d331a5f62f */
            /* /artists/"+this.state.myId+"/albums */
            /*axios.get(this.context.baseURL+"/artists/"+this.state.myId+"/albums",{/* albums */
            axios.get(this.context.baseURL+"/artists/5e923dd09df6d9ca9f10a473/albums",{
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
    }

    /**toggle cards play pause buttons
         * @type {Function}
         * @memberof YourLibraryAlbums
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
		/*console.log("amr diab id is : ",this.state.myId);*/
		// {document.title ="Spotify - "+this.state.artist.name }
		return (
			<div id="webplayer-layout" className="container your-library webplayer col-12">
				<head>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
					/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
				</head>
                
                <h3 className="section-title playlists text-white mb-3 pb-3 ml-1"><strong>Albums</strong></h3>
                <div className="albums-sub-section">
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
			</div>
		);
	}
}
export default YourLibraryAlbums;

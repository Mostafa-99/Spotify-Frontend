import React, { Component } from 'react';
import YourLibraryNavBar from './YourLibraryNavBar';
import SideBar from '../../SideBar';
import '../Bodies.css';
import './YourLibrary.css';
import axios from 'axios';

import { ConfigContext } from '../../../../Context/ConfigContext';
import { Link } from 'react-router-dom';
import { responseHandler } from '../../../../ReduxStore/Shared';

/** Class of Your library - Artists webplayer page.
 * @extends Component
 */
class YourLibraryArtists extends Component {
    static contextType=ConfigContext;
    constructor(){
        super()
        this.state = {
            /**the current artist
             * @memberof YourLibraryArtists
             * @type {object}
             */
            relatedArtists:[],
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

    /* http://www.mocky.io/v2/5e87635f3100002a003f44d4*/
    /* */
    /**http://we871.mocklab.io/artists/200/relatedArtists */
    //axios.get(this.context.baseURL+"/artists/"+this.state.myId+"/related-artists",{/* related artists*/
    axios.get(this.context.baseURL+"/artists/5e923dd09df6d9ca9f10a473/related-artists",{
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
    }

    /**toggle cards play pause buttons
         * @type {Function}
         * @memberof YourLibraryArtists
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
                <h3 className="section-title playlists text-white mb-3 pb-3"><strong>Artists</strong></h3>
                <div className="card-group">
                    {this.state.relatedArtists.map( artist => (
                        <div>
                        <Link to={{
                               pathname:"/artist-webplayer",
                               state:{
                               myId :artist.id
                               }
                           }}>
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
                            </Link>
                        </div>
                            )
                    )}
                </div>     
			</div>
		);
	}
}
export default YourLibraryArtists;

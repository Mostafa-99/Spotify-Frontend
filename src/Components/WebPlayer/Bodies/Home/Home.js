import React, { Component } from 'react';
import HomeNavBar from './HomeNavBar'
import SideBar from '../../SideBar'
import '../Bodies.css';
import '../../WebplayerHome.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import  './PlaylistContextMenu.css';
import { theme, animation } from 'react-contexify';
import { Menu, Item} from 'react-contexify';
import { MenuProvider } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';

class Home extends Component {
    constructor(){
        super()
        this.state = {
            madeForYou:[],
            popularPlayLists:[],
            workOut:[],
            popularAlbums:[],
            artists:[],
            nowPlaying:{
                id:-1
            }
        }
        this.togglePlayPause=this.togglePlayPause.bind(this)

    }

    componentDidMount() {

        window.addEventListener('contextmenu',(event) =>{
            event.preventDefault() })

        axios.get("http://www.mocky.io/v2/5e749227300000e613a5f49b")
            .then(res => {
                this.setState({
                    madeForYou: res.data.map( playList => ({
                        id: playList.id,
                        title:playList.name,
                        imageUrl:playList.images,
                        description: playList.description
                    }))
                })
            })        
        axios.get("http://www.mocky.io/v2/5e749724300000d431a5f4c6")
            .then(res => {
                this.setState({
                    popularPlayLists: res.data.map( playList => ({
                        id:playList.id,
                        title:playList.name,
                        imageUrl:playList.images,
                        description: playList.description
                    }))
                })
            })
            axios.get("http://www.mocky.io/v2/5e749c66300000d431a5f4f4")
            .then(res => {
                this.setState({
                    workOut: res.data.map( playList => ({
                        id:playList.id,
                        title:playList.name,
                        imageUrl:playList.images,
                        description: playList.description
                    }))
                })
            })
            axios.get("http://www.mocky.io/v2/5e74bc56300000d331a5f62f")
            .then(res => {
                this.setState({
                    popularAlbums: res.data.map( album => ({
                        id:album.id,
                        title:album.name,
                        imageUrl:album.images
                    }))
                })
            })
            axios.get("http://www.mocky.io/v2/5e7f9ddb2f00005a4cbac4bb")
            .then(res => {
                this.setState({
                    artists: res.data.map( artist => ({
                        id:artist.id,
                        name:artist.name,
                        imageUrl:artist.images,
                        type:artist.type
                    }))
                })
            })                                            
    }
    
        togglePlayPause(sid) {
            if(this.state.nowPlaying.id===-1)
            {
                const cardButtons=document.getElementById(sid);
                const playButton = cardButtons.querySelector('.play-btn');
                const pauseButton = cardButtons.querySelector('.pause-btn');
                playButton.classList.toggle('active-play');
                pauseButton.classList.toggle('active-pause');
                this.setState({nowPlaying: {id: sid}})
            }
            else if(this.state.nowPlaying.id===sid)
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
        {document.title ="Spotify - Home"}
    return(
        
        <div id='webplayer-layout'className="container webplayer col-12">
        <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/></head>
        <div className="row webplayer-body m-0">
            <nav className="col-lg-2 webplayer-sidebar-body colums-no-padding">
                <SideBar/>
            </nav>
            <div className="col-lg-10 webplayer-body-and-navbar colums-no-padding">
                <HomeNavBar/>
                <div id="webplayer-home">
            <div className="made-for-you-section">
                <h2 className="section-title made-for-you">Made For You</h2>
                <div className="card-group">
                    {this.state.madeForYou.map( playList => (
                        <div>
                            <div className="card" id={playList.id}>
                            <MenuProvider id={playList.id} component="span" >
                        <Menu id={playList.id} theme={theme.dark} animation={animation.fade}>
                        <Item>Save To Library</Item>
                        <Item>Copy Playlist Link</Item>
                        <Item>Open in App</Item>
                        </Menu>

                                <img src={playList.imageUrl} className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">{playList.title}</h5>
                                    <p className="card-text">{playList.description}</p>
                                    <div id={playList.id}>
                                        <button id={playList.id} className="btn btn-primary play-btn active-play" onClick={()=> this.togglePlayPause(playList.id)}><i className="fa fa-play"></i></button>
                                        <button id={playList.id} className="btn btn-primary pause-btn" onClick={()=> this.togglePlayPause(playList.id)}><i className="fa fa-pause"></i></button>
                                    </div>
                                </div> </MenuProvider> 
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
            <div className="popular-playlists-section">
                <h2 className="section-title popular-playlists">Popular Playlists</h2>
                <div className="card-group">
                    {this.state.popularPlayLists.map( playList => (
                        <div>
                        <div className="card" id={playList.id}>
                            <MenuProvider id={playList.id} >
                        <Menu id={playList.id} theme={theme.dark} animation={animation.fade}>
                        <Item>Save To Library</Item>
                        <Item>Copy Playlist Link</Item>
                        <Item>Open in App</Item>
                        </Menu>                                        <img src={playList.imageUrl} className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">{playList.title}</h5>
                                    <p className="card-text">{playList.description}</p>
                                    <div id={playList.id}>
                                        <button id={playList.id} className="btn btn-primary play-btn active-play" onClick={()=> this.togglePlayPause(playList.id)}><i className="fa fa-play"></i></button>
                                        <button id={playList.id} className="btn btn-primary pause-btn" onClick={()=> this.togglePlayPause(playList.id)}><i className="fa fa-pause"></i></button>
                                    </div>
                                </div> </MenuProvider> 
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
            <div className="workout-playlists-section">
                <h2 className="section-title workout-playlists">Workout Playlists</h2>
                <div className="card-group">
                    {this.state.workOut.map( playList => (
                        <div>
                        <div className="card" id={playList.id}>
                            <MenuProvider id={playList.id} component="span" >
                        <Menu id={playList.id} theme={theme.dark} animation={animation.fade}>
                        <Item>Save To Library</Item>
                        <Item>Copy Playlist Link</Item>
                        <Item>Open in App</Item>
                        </Menu>  
                                 <img src={playList.imageUrl} className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">{playList.title}</h5>
                                    <p className="card-text">{playList.description}</p>
                                    <div id={playList.id}>
                                        <button id={playList.id} className="btn btn-primary play-btn active-play" onClick={()=> this.togglePlayPause(playList.id)}><i className="fa fa-play"></i></button>
                                        <button id={playList.id} className="btn btn-primary pause-btn" onClick={()=> this.togglePlayPause(playList.id)}><i className="fa fa-pause"></i></button>
                                    </div>    
                                </div></MenuProvider> 
                            </div>
                        </div>
                    )
                    )}  
                </div>
            </div>
            <div className="popular-albums-section">
                <h2 className="section-title popular-albums">Popular Albums</h2>
                <div className="card-group">
                    {this.state.popularAlbums.map( album => (
                        <div>
                            <Link to={{
                                    pathname:"/webplayer/album",
                                    state:{
                                    myId :album.id
                                    }
                                }}>
                                <div className="card" id={album.id}>
                                <MenuProvider id={album.id} component="span" >
                                    <Menu id={album.id} theme={theme.dark} animation={animation.fade}>
                                    <Item>Save To Library</Item>
                                    <Item>Copy Playlist Link</Item>
                                    <Item>Open in App</Item>
                                    </Menu>                                         <img src={album.imageUrl[0]} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{album.title}</h5>
                                        <div id={album.id}>
                                            <button id={album.id} className="btn btn-primary play-btn active-play" onClick={()=> this.togglePlayPause(album.id)}><i className="fa fa-play"></i></button>
                                            <button id={album.id} className="btn btn-primary pause-btn" onClick={()=> this.togglePlayPause(album.id)}><i className="fa fa-pause"></i></button>
                                        </div>    
                                    </div></MenuProvider>  
                                </div>
                            </Link>
                        </div>
                    )
                    )}
                </div>
            </div>
            <div className="popular-albums-section">
                <h2 className="section-title popular-albums">Popular Artists</h2>
                <div className="card-group">
                    {this.state.artists.map( artist => (
                        <div>
                            <Link to={{
                                    pathname:"/artist-webplayer",
                                    state:{
                                       myId :artist.id
                                    }
                                }}>
                                <div className="card" id={artist.id}>
                                    <MenuProvider id={artist.id} component="span" >
                                <Menu id={artist.id} theme={theme.dark} animation={animation.fade}>
                                <Item>Save To Library</Item>
                                <Item>Copy Playlist Link</Item>
                                <Item>Open in App</Item>
                                </Menu>                                          
                                <img src={artist.imageUrl[0].url} className="card-img-top rounded-circle" alt="..."></img>
                                        <div className="card-body">
                                            <h5 className="card-title">{artist.name}</h5>
                                            <p className="card-text">{artist.type}</p>
                                            <div id={artist.id}>
                                                <button className="btn btn-primary play-btn active-play" onClick={()=> this.togglePlayPause(artist.id)}><i className="fa fa-play"></i></button>
                                                <button className="btn btn-primary pause-btn" onClick={()=> this.togglePlayPause(artist.id)}><i className="fa fa-pause"></i></button>
                                            </div>
                                        </div></MenuProvider> 
                                </div>
                            </Link>
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
export default Home;
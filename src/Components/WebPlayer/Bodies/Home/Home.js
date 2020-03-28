import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeNavBar from './HomeNavBar'
import SideBar from '../../SideBar'
import ProgressBar from '../../ProgressBar'
import '../Bodies.css';
import '../../WebplayerHome.css'
import axios from 'axios'
class Home extends Component {
    constructor(){
        super()
        this.state = {
            madeForYou:[],
            popularPlayLists:[],
            workOut:[],
            popularAlbums:[],
            artists:[]
        }
    }

    componentDidMount() {
        axios.get("http://www.mocky.io/v2/5e749227300000e613a5f49b")
            .then(res => {
                this.setState({
                    madeForYou: res.data.map( playList => ({
                        id:playList.id,
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
    toggle = () => {
        console.log('enterd')
        const pauseButton=document.querySelector('.pause-btn');
        const playButton=document.querySelector('.play-btn');
        console.log(playButton);
        console.log(pauseButton);

        if(playButton.classList.contains('active'))        
        {
            playButton.classList.toggle('active');
            pauseButton.classList.toggle('active');
            console.log('if')
        }
        else
        {
            playButton.classList.toggle('active');
            pauseButton.classList.toggle('active');
            console.log('else')
        }
        console.log(playButton);
        console.log(pauseButton);
    }
    render()
    {
    return(
        
        <div id='webplayer-layout'className="container webplayer col-12">
            <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/></head>
            <div className="row webplayer-body">
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
                                <div className="card">
                                    <img src={playList.imageUrl} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{playList.title}</h5>
                                        <p className="card-text">{playList.description}</p>
                                        <button className="btn btn-primary play-btn"><i className="fa fa-play"></i></button>
                                    </div>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>
                <div className="popular-playlists-section">
                    <h2 className="section-title popular-playlists">Popular Playlists</h2>
                    <div class="card-group">
                        {this.state.popularPlayLists.map( playList => (
                            <div>
                                <div class="card">
                                    <img src={playList.imageUrl} class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title">{playList.title}</h5>
                                        <p class="card-text">{playList.description}</p>
                                        <button className="btn btn-primary play-btn"><i className="fa fa-play"></i></button>
                                    </div>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>
                <div className="workout-playlists-section">
                    <h2 className="section-title workout-playlists">Workout Playlists</h2>
                    <div class="card-group">
                        {this.state.workOut.map( playList => (
                            <div>
                                <div class="card">
                                    <img src={playList.imageUrl} class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title">{playList.title}</h5>
                                        <p class="card-text">{playList.description}</p>
                                        <button className="btn btn-primary play-btn"><i className="fa fa-play"></i></button>
                                    </div>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>
                <div className="popular-albums-section">
                    <h2 className="section-title popular-albums">Popular Albums</h2>
                    <div class="card-group">
                        {this.state.popularAlbums.map( album => (
                            <div>
                                <div class="card">
                                    <img src={album.imageUrl[0]} class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title">{album.title}</h5>
                                        <button className="btn btn-primary play-btn"><i className="fa fa-play"></i></button>
                                    </div>
                                </div>
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
                                <div class="card">
                                    <img src={artist.imageUrl[0].url} className="card-img-top rounded-circle" alt="..."></img>
                                    <div class="card-body">
                                        <h5 className="card-title">{artist.name}</h5>
                                        <p className="card-text">{artist.type}</p>
                                        <button className="btn btn-primary play-btn" onClick={()=> this.toggle()}><i className="fa fa-play"></i></button>
                                        <button className="btn btn-primary pause-btn active" onClick={()=> this.toggle()}><i className="fa fa-pause"></i></button>
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
export default Home;
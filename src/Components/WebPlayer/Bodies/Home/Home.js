import React, { Component } from 'react';
import HomeNavBar from './HomeNavBar'
import SideBar from '../../SideBar'
import '../Bodies.css';
import '../../WebplayerHome.css'
import axios from 'axios'
import {Link} from 'react-router-dom';
import  './PlaylistContextMenu.css';
import { theme, animation } from 'react-contexify';
//import { Menu, Item} from 'react-contexify';
import { MenuProvider } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';
import { ConfigContext } from '../../../../Context/ConfigContext'
/** Class of home in webplayer.
 * @extends Component
 */
class Home extends Component {
    /**Gets the baseURL from configrations context of the user
    * @memberof Home
    */
     static contextType=ConfigContext;
     constructor(){
         super()
         this.state = {
             /** Array of recently played playlists
              * @memberof Home
              * @type {Array<playlists>}
              */
             recentlyPlayed:[],
             /** Array of popular playlists
              * @memberof Home
              * @type {Array<playlists>}
              */
             popularPlayLists:[],
             /** Array of most recent playlists
              * @memberof Home
              * @type {Array<playlists>}
              */
             mostRecentPlayLists:[],
             /** Array of popular albums
              * @memberof Home
              * @type {Array<albums>}
              */
             popularAlbums:[],
             /** Array of most recent albums
              * @memberof Home
              * @type {Array<albums>}
              */
             mostRecentAlbums:[],
             /** Array of catagories that will show on home page
              * @memberof Home
              * @type {Array<categories>}
              */
             catagories:[],
             /** Array of playlists of first category
              * @memberof Home
              * @type {Array<playlists>}
              */
             firstCategory:[],
              /** Array of playlists of second category
              * @memberof Home
              * @type {Array<playlists>}
              */
             secondCategory:[],
             workOut:[],
             madeForYou:[],
              /** Array of artists
              * @memberof Home
              * @type {Array<artists>}
              */
             artists:[],
              /** object that stores the id of the selected playlist, album or artist
              * @memberof Home
              * @type {{id: string}}
              */
             nowPlaying:{
                 id:-1
             },       
         }
         this.togglePlayPause=this.togglePlayPause.bind(this)
 
     }
     /**
      * @property {Function} componentDidMount Fetch the data of the home page and put it in the state
      */
    componentDidMount() {

        window.addEventListener('contextmenu',(event) =>{
            event.preventDefault() })

        //browse catagories
        axios.get(this.context.baseURL+"/browse/categories", {
            headers: {
                'authorization': "Bearer "+localStorage.getItem("token"),
            },
            params: {
                limit: 2
            }
        })
            .then(res => {
                if(res.status === 200)
                {
                    this.setState({
                        catagories: res.data.data.categories.map( category => ({
                            id: category._id,
                            name:category.name,
                        })
                        )
                    })
                    axios.get(this.context.baseURL+"/browse/categories/"+this.state.catagories[0].id+"/playlists", {
                        headers: {
                            'authorization': "Bearer "+localStorage.getItem("token"),
                            //category id as path??
                        },
                        params: {
                            limit: 9
                        }
                    })
                    .then(res => {
                        if(res.status === 200)
                        {
                            this.setState({
                                firstCategory: res.data.data.playlists.map( playList => ({
                                    id:playList._id,
                                    title:playList.name,
                                    description: playList.description,
                                    imageUrl:playList.images[0],
                                    href:playList.href
                                })),
                            })

                        }
                        else if(res.status === 401)
                        {
                            localStorage.removeItem("loginType");
                            localStorage.removeItem("isLoggedIn");
                            localStorage.removeItem("token");
                            localStorage.removeItem("userID");
                        }
                    }) 
                    axios.get(this.context.baseURL+"/browse/categories/"+this.state.catagories[1].id+"/playlists", {
                        headers: {
                            'authorization': "Bearer "+localStorage.getItem("token"),
                            //category id as path??
                        },
                        params: {
                            limit: 9
                        }
                    })
                    .then(res => {
                        if(res.status === 200)
                        {
                            this.setState({
                                secondCategory: res.data.data.playlists.map( playList => ({
                                    id:playList._id,
                                    title:playList.name,
                                    description: playList.description,
                                    imageUrl:playList.images[0],
                                    href:playList.href
                                }))
                            })
                        }
                        else if(res.status === 401)
                        {
                            localStorage.removeItem("loginType");
                            localStorage.removeItem("isLoggedIn");
                            localStorage.removeItem("token");
                            localStorage.removeItem("userID");
                        }
                    }) 
                }
                else if(res.data.status === 401)
                {
                    localStorage.removeItem("loginType");
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("token");
                    localStorage.removeItem("userID");
                }
            })

         //artists   
         axios.get(this.context.baseURL+"/artists", {
            headers: {
                'authorization': "Bearer "+localStorage.getItem("token"),
            }
            /*params: {
                limit: 9 //3wzen n3rf btrg3 kam artist
            }*/
        })
            .then(res => {
                if(res.status === 200)
                {
                    this.setState({
                        artists: res.data.data.map( artist => ({
                            id:artist._id,
                            name:artist.name,
                            imageUrl:artist.images[0],
                        }))
                    })
                }
                else if(res.status === 401)
                {
                    localStorage.removeItem("loginType");
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("token");
                    localStorage.removeItem("userID");
                }
            })

        //recently played
        axios.get(this.context.baseURL+"/me/player/recentlyPlayed", {
            headers: {
                'authorization': "Bearer "+localStorage.getItem("token"),
            },
            params: {
                limit: 9
            }
        })
            .then(res => {
                if(res.status === 200)
                {
                    this.setState({
                        recentlyPlayed: res.data.data.items.map( playList => ({
                            id:playList._id,
                            title:playList.context.name,
                            imageUrl:playList.context.image,
                            href:playList.href
                        })
                        )
                    })
                }
                else if(res.status === 401)
                {
                    localStorage.removeItem("loginType");
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("token");
                    localStorage.removeItem("userID");
                }
            })

        //popular albums
        axios.get(this.context.baseURL+"/albums/top",{
            headers: {
                'authorization': "Bearer "+localStorage.getItem("token"),
            },
            params: {
                limit: 9,
                sort: "-popularity"
            }
        })
            .then(res => {
                if(res.status === 200)
                {
                    this.setState({
                        popularAlbums: res.data.data.albums.map( album => ({
                            id:album._id,
                            title:album.name,
                            imageUrl:album.image,
                            artist:album.artists[0].name
                        }))
                    })
                }
                else if(res.status === 401)
                {
                    localStorage.removeItem("loginType");
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("token");
                    localStorage.removeItem("userID");
                }
            }) 

        //most recent albums
        axios.get(this.context.baseURL+"/albums/top",{
            headers: {
                'authorization': "Bearer "+localStorage.getItem("token"),
            },
            params: {
                limit: 9,
                sort: "-releaseDate"
            }
        })
            .then(res => {
                if(res.status === 200)
                {
                    this.setState({
                        mostRecentAlbums: res.data.data.albums.map( album => ({
                            id:album._id,
                            title:album.name,
                            imageUrl:album.image,
                            artist:album.artists[0].name
                        }))
                    })
                }
                else if(res.status === 401)
                {
                    localStorage.removeItem("loginType");
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("token");
                    localStorage.removeItem("userID");
                }
            }) 

        //popular playlists
        axios.get(this.context.baseURL+"/playlists/top", {
            headers: {
                'authorization': "Bearer "+localStorage.getItem("token"),
            },
            params: {
                limit: 9,
                sort: "-popularity"
            }
        })
            .then(res => {
                if(res.status === 200)
                {
                    this.setState({
                        popularPlayLists: res.data.data.playlist.map( playList => ({
                            id:playList._id,
                            title:playList.name,
                            imageUrl:playList.images[0],
                            description: playList.description,
                            href:playList.href
                        }))
                    })
                }
                else if(res.status === 401)
                {
                    localStorage.removeItem("loginType");
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("token");
                    localStorage.removeItem("userID");

                }
            })

        //most recent playlists
        axios.get(this.context.baseURL+"/playlists/top", {
            headers: {
                'authorization': "Bearer "+localStorage.getItem("token"),
            },
            params: {
                limit: 9,
                sort: "-releaseDate"
            }
        })
            .then(res => {
                if(res.status === 200)
                {
                    this.setState({
                        mostRecentPlayLists: res.data.data.playlist.map( playList => ({
                            id:playList._id,
                            title:playList.name,
                            imageUrl:playList.images[0],
                            description: playList.description,
                            href:playList.href
                        }))
                    })
                }
                else if(res.status === 401)
                {
                    localStorage.removeItem("loginType");
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("token");
                    localStorage.removeItem("userID");
                }
            }) 

        /*axios.get("http://www.mocky.io/v2/5e749227300000e613a5f49b")
            .then(res => {
                this.setState({
                    madeForYou: res.data.map( playList => ({
                        id: playList.id,
                        imageUrl:playList.images,
                        title:playList.name,
                        imageUrl:playList.images,
                        description: playList.description
                    }))
                })
            })        

        axios.get("http://www.mocky.io/v2/5e749227300000e613a5f49b")
            .then(res => {
                this.setState({
                    madeForYou: res.data.map( playList => ({
                        id: playList.id,
                        imageUrl:playList.images,
                        title:playList.name,
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
            }) */                             
    }
        /**
         * @property {Function} togglePlayPause Function that handle the play and pause buttons in home page cards
         * @param {string} sid the card id
         */
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
                <h2 className="section-title made-for-you">Most Recent Playlists</h2>
                <div className="card-group">
                    {this.state.mostRecentPlayLists.map( playList => (
                        <div>
                            <Link to={{
                                    pathname:"/playlist-webplayer",
                                    state:{
                                    myId :playList.id,
                                    myhref:playList.href,
                                    }
                                }}>
                                <div className="card" id={playList.id}>
                             {/*   <MenuProvider id={playList.id} component="span" >
                            <Menu id={playList.id} theme={theme.dark} animation={animation.fade}>
                            <Item>Save To Library</Item>
                            <Item>Copy Playlist Link</Item>
                            <Item>Open in App</Item>
                            </Menu>*/}

                                    <img src={playList.imageUrl} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{playList.title}</h5>
                                        <p className="card-text">{playList.description}</p>
                                        <div id={playList.id}>
                                            <button id={playList.id} className="btn btn-primary play-btn active-play" onClick={()=> this.togglePlayPause(playList.id)}><i className="fa fa-play"></i></button>
                                            <button id={playList.id} className="btn btn-primary pause-btn" onClick={()=> this.togglePlayPause(playList.id)}><i className="fa fa-pause"></i></button>
                                        </div>
                                    </div>{/**</MenuProvider>  */} 
                                </div>
                                </Link>
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
                            <Link to={{
                                    pathname:"/playlist-webplayer",
                                    state:{
                                    myId :playList.id,
                                    myhref:playList.href,
                                    }
                                }}>
                            <div className="card" id={playList.id}>
                               
                               {/* <MenuProvider id={playList.id} >
                            <Menu id={playList.id} theme={theme.dark} animation={animation.fade}>
                            <Item>Save To Library</Item>
                            <Item>Copy Playlist Link</Item>
                            <Item>Open in App</Item>
                            </Menu>       */}                                 <img src={playList.imageUrl} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{playList.title}</h5>
                                        <p className="card-text">{playList.description}</p>
                                        <div id={playList.id}>
                                            <button id={playList.id} className="btn btn-primary play-btn active-play" onClick={()=> this.togglePlayPause(playList.id)}><i className="fa fa-play"></i></button>
                                            <button id={playList.id} className="btn btn-primary pause-btn" onClick={()=> this.togglePlayPause(playList.id)}><i className="fa fa-pause"></i></button>
                                        </div>
                                    </div> 
                                </div>
                                </Link>
                        </div>
                    )
                    )}
                </div>
            </div>
            <div className="workout-playlists-section">
                <h2 className="section-title workout-playlists">Most recent Albums</h2>
                <div className="card-group">
                    {this.state.mostRecentAlbums.map( album => (
                        <div>
                            <Link to={{
                                    pathname:"/webplayer/album",
                                    state:{
                                    myId :album.id,
                                    }
                                }}>
                            <div className="card" id={album.id}>
                               {/**  <MenuProvider id={album.id} component="span" >
                            <Menu id={album.id} theme={theme.dark} animation={animation.fade}>
                            <Item>Save To Library</Item>
                            <Item>Copy album Link</Item>
                            <Item>Open in App</Item>
                            </Menu>  */}
                                    <img src={album.imageUrl} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{album.title}</h5>
                                        <p className="card-text">{album.artist}</p>
                                        <div id={album.id}>
                                            <button id={album.id} className="btn btn-primary play-btn active-play" onClick={()=> this.togglePlayPause(album.id)}><i className="fa fa-play"></i></button>
                                            <button id={album.id} className="btn btn-primary pause-btn" onClick={()=> this.togglePlayPause(album.id)}><i className="fa fa-pause"></i></button>
                                        </div>    
                                    </div> 
                                </div>
                                </Link>
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
                                    myId :album.id,
                                    }
                                }}>
                                <div className="card" id={album.id}>
                                {/*<MenuProvider id={album.id} component="span" >
                                    <Menu id={album.id} theme={theme.dark} animation={animation.fade}>
                                    <Item>Save To Library</Item>
                                    <Item>Copy Playlist Link</Item>
                                    <Item>Open in App</Item>
                                    </Menu>   */}                                      <img src={album.imageUrl} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{album.title}</h5>
                                        <p className="card-text">{album.artist}</p>
                                        <div id={album.id}>
                                            <button id={album.id} className="btn btn-primary play-btn active-play" onClick={()=> this.togglePlayPause(album.id)}><i className="fa fa-play"></i></button>
                                            <button id={album.id} className="btn btn-primary pause-btn" onClick={()=> this.togglePlayPause(album.id)}><i className="fa fa-pause"></i></button>
                                        </div>    
                                    </div>  
                                </div>
                            </Link>
                        </div>
                    )
                    )}
                </div>
            </div>
            <div className="popular-albums-section">
                            {this.state.catagories.slice(0,1).map( category => (
                                <h2 className="section-title popular-albums">
                                    {category.name}
                                </h2>  
                            ))}
                <div className="card-group">
                    {this.state.firstCategory.map( playlist => (
                        <div>
                            <Link to={{
                                    pathname:"/playlist-webplayer",
                                    state:{
                                    myId :playlist.id,
                                    myhref:playlist.href,
                                    }
                                }}>
                                <div className="card" id={playlist.id}>
                             {/**    <MenuProvider id={playlist.id} component="span" >
                                    <Menu id={playlist.id} theme={theme.dark} animation={animation.fade}>
                                    <Item>Save To Library</Item>
                                    <Item>Copy Playlist Link</Item>
                                    <Item>Open in App</Item>
                                    </Menu> */}                                        <img src={playlist.imageUrl} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{playlist.title}</h5>
                                        <p className="card-text">{playlist.description}</p>
                                        <div id={playlist.id}>
                                            <button id={playlist.id} className="btn btn-primary play-btn active-play" onClick={()=> this.togglePlayPause(playlist.id)}><i className="fa fa-play"></i></button>
                                            <button id={playlist.id} className="btn btn-primary pause-btn" onClick={()=> this.togglePlayPause(playlist.id)}><i className="fa fa-pause"></i></button>
                                        </div>    
                                    </div> 
                                </div>
                            </Link>
                        </div>
                    )
                    )}
                </div>
            </div>
            <div className="popular-albums-section">
            {this.state.catagories.slice(1,2).map( category => (
                                <h2 className="section-title popular-albums">
                                    {category.name}
                                </h2>  
                            ))}
                <div className="card-group">
                    {this.state.secondCategory.map( playlist => (
                        <div>
                            <Link to={{
                                    pathname:"/playlist-webplayer",
                                    state:{
                                    myId :playlist.id,
                                    myhref:playlist.href,
                                    }
                                }}>
                                <div className="card" id={playlist.id}>
                            {/**    <MenuProvider id={playlist.id} component="span" >
                                    <Menu id={playlist.id} theme={theme.dark} animation={animation.fade}>
                                    <Item>Save To Library</Item>
                                    <Item>Copy Playlist Link</Item>
                                    <Item>Open in App</Item>
                                    </Menu>*/}                                          <img src={playlist.imageUrl} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{playlist.title}</h5>
                                        <p className="card-text">{playlist.description}</p>
                                        <div id={playlist.id}>
                                            <button id={playlist.id} className="btn btn-primary play-btn active-play" onClick={()=> this.togglePlayPause(playlist.id)}><i className="fa fa-play"></i></button>
                                            <button id={playlist.id} className="btn btn-primary pause-btn" onClick={()=> this.togglePlayPause(playlist.id)}><i className="fa fa-pause"></i></button>
                                        </div>    
                                    </div> 
                                </div>
                            </Link>
                        </div>
                    )
                    )}
                </div>
            </div>
            <div className="first-category-section">
                            {this.state.catagories.slice(0,1).map( category => (
                                <h2 className="section-title first-category">
                                    {category.name}
                                </h2>  
                            ))}
                <div className="card-group">
                    {this.state.firstCategory.map( playlist => (
                        <div>
                            <Link to={{
                                    pathname:"/playlist-webplayer",
                                    state:{
                                    myId :playlist.id,
                                    myhref:playlist.href,
                                    }
                                }}>
                                <div className="card" id={playlist.id}>
                             {/**    <MenuProvider id={playlist.id} component="span" >
                                    <Menu id={playlist.id} theme={theme.dark} animation={animation.fade}>
                                    <Item>Save To Library</Item>
                                    <Item>Copy Playlist Link</Item>
                                    <Item>Open in App</Item>
                                    </Menu> */}                                        <img src={playlist.imageUrl} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{playlist.title}</h5>
                                        <p className="card-text">{playlist.description}</p>
                                        <div id={playlist.id}>
                                            <button id={playlist.id} className="btn btn-primary play-btn active-play" onClick={()=> this.togglePlayPause(playlist.id)}><i className="fa fa-play"></i></button>
                                            <button id={playlist.id} className="btn btn-primary pause-btn" onClick={()=> this.togglePlayPause(playlist.id)}><i className="fa fa-pause"></i></button>
                                        </div>    
                                    </div> 
                                </div>
                            </Link>
                        </div>
                    )
                    )}
                </div>
            </div>
            <div className="second-category-section">
            {this.state.catagories.slice(1,2).map( category => (
                                <h2 className="section-title second-category">
                                    {category.name}
                                </h2>  
                            ))}
                <div className="card-group">
                    {this.state.secondCategory.map( playlist => (
                        <div>
                            <Link to={{
                                    pathname:"/playlist-webplayer",
                                    state:{
                                    myId :playlist.id,
                                    myhref:playlist.href,
                                
                                    }
                                }}>
                                <div className="card" id={playlist.id}>
                            {/**    <MenuProvider id={playlist.id} component="span" >
                                    <Menu id={playlist.id} theme={theme.dark} animation={animation.fade}>
                                    <Item>Save To Library</Item>
                                    <Item>Copy Playlist Link</Item>
                                    <Item>Open in App</Item>
                                    </Menu>*/}                                          <img src={playlist.imageUrl} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{playlist.title}</h5>
                                        <p className="card-text">{playlist.description}</p>
                                        <div id={playlist.id}>
                                            <button id={playlist.id} className="btn btn-primary play-btn active-play" onClick={()=> this.togglePlayPause(playlist.id)}><i className="fa fa-play"></i></button>
                                            <button id={playlist.id} className="btn btn-primary pause-btn" onClick={()=> this.togglePlayPause(playlist.id)}><i className="fa fa-pause"></i></button>
                                        </div>    
                                    </div> 
                                </div>
                            </Link>
                        </div>
                    )
                    )}
                </div>
            </div>
            <div className="popular-artists-section">
                <h2 className="section-title popular-artists">Popular Artists</h2>
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
                            {/**       <MenuProvider id={artist.id} component="span" >
                                <Menu id={artist.id} theme={theme.dark} animation={animation.fade}>
                                <Item>Save To Library</Item>
                                <Item>Copy Playlist Link</Item>
                                <Item>Open in App</Item>
                                </Menu>  */}                                          
                                <img src={artist.imageUrl} className="card-img-top rounded-circle" alt="..."></img>
                                        <div className="card-body">
                                            <h5 className="card-title">{artist.name}</h5>
                                            <p className="card-text">artist</p>
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
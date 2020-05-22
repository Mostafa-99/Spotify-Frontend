import React,{Component} from 'react';
import { Link,Redirect } from 'react-router-dom';
import { Route } from 'react-router';
import '../NavBars.css';
import './SearchNavBar.css';
import axios from 'axios'

import { ConfigContext } from '../../../../Context/ConfigContext'
import { ProfileContext } from '../../../../Context/ProfileContext'
import TracksList from '../AlbumWebPlayer/TracksList';
/** Class of Search navbar and display categories.
 * @extends Component
 */
class SearchNavBar extends Component {
    constructor(){
        super()
        this.state={
            /**
             * current user
             * @type {Object}
             */
            user:{},
            /**
             * type of user
             * @type {string}
             */
            loginType:'',
            /**
             * statues of the user
             * @type {string}
             */
            status:'',
            /**
            * input string in navbar
            * @type {string}
            */
            text:'',
            /**
            * searching or not 
            * @type {bool}
            */
            searchingstate:false,
            /**Array of searched artists
             * @memberof ArtistWebPlayer
             * @type {Array}
             */
            artists:[],
            /**Array of searched Albums
             * @memberof ArtistWebPlayer
             * @type {Array}
             */
            albums:[],
            /**Array of searched playlists 
             * @memberof ArtistWebPlayer
             * @type {Array}
             */
            playLists:[],
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
             * if not found
             * @type {String}
             */
            "notFound":"0"
        }
        this.searchHandler = this.searchHandler.bind(this);
    }
    /**When the component mounts it sends a request to the backend to load the albums
     * @memberof SearchNavBar
     */
    componentDidMount(){
        /*http://www.mocky.io/v2/5e88c77e3100007c00d39aad */
        /*' http://we871.mocklab.io/artists/200 */
        axios.get("http://spotify.mocklab.io/artists/5e923dd09df6d9ca9f10a473/related-artists",{  /*artist*/
        headers:{
            'authorization': "Bearer "+localStorage.getItem("token"),
            "id": this.state.myId
        }}
        )
        .then(res => {
            if(res.status===200)
            {   
                this.setState({
                    artists: res.data.data.map( relatedArtist => ({
                        id:relatedArtist._id,
                        name:relatedArtist.name,
                        imageUrl:relatedArtist.images[0],
                        type:relatedArtist.role
                    }))
                })
            }
            else if(res.status===401)
            {
                localStorage.removeItem("loginType");
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("token");
                localStorage.removeItem("userID");
            }
            else{
                alert(res.message);
            }
        })     
        

            /* http://www.mocky.io/v2/5e74bc56300000d331a5f62f */
            /* /artists/"+this.state.myId+"/albums */
        axios.get("http://spotify.mocklab.io/artists/5e923dd09df6d9ca9f10a473/albums",{/* albums */
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
                else if(res.status===401)
                {
                    localStorage.removeItem("loginType");
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("token");
                    localStorage.removeItem("userID");
                }
                else{
                    alert(res.message);
                }
                
            })

            /*  http://www.mocky.io/v2/5e749724300000d431a5f4c6*/
        axios.get("http://spotify.mocklab.io/artists/5e923dd09df6d9ca9f10a473/created-playlists",{/* playlists*/
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
                else if(res.status===401)
                {
                    localStorage.removeItem("loginType");
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("token");
                    localStorage.removeItem("userID");
                }
                else{
                    alert(res.message);
                }
            })
            this.getTracks();    
    }

    /**log out from spotify 
     * @type {Function}
     * @memberof SearchNavBar
     */
    logOut= () => {
        
        if(this.state.loginType==="fb")
        {
            window.FB.logout(function(response) {
          });
          
        }
        if(this.state.loginType==="email")
        {
          
        }
            
            this.setState({status:"not connected"})
            this.setState({loginType: ''})
            localStorage.setItem("userID", '');
            localStorage.setItem("isLoggedIn", "false");
            localStorage.setItem("token", '');
            localStorage.setItem("loginType", "");
    }

    /**toggle background color of profile
     * @type {Function}
     * @memberof SearchNavBar
     */
    toggleNavbarProfile=()=> {
        const element = document.getElementById("dropdownMenuLink");
        element.classList.toggle("toggle-background-color");
      }
      
      /**to switch between searching or not to know which page to  view
     * @type {Function}
     * @memberof SearchNavBar
     */
      searchHandler=(event)=>{
        this.setState({text:event});
        console.log("text inside search handler : ",this.state.text);
        if(event==''){
            this.state.searchingstate=false;
            document.getElementById("search-searching").classList.add("hide");
            document.getElementById("search-not-searching").classList.remove("hide");
            document.getElementById("search-not-found-searching").classList.add("hide");
            
        }
        else{    
            this.componentDidMount();  /** if he is searching for something that is in DB then perform all requests , called each time the input string changed to fetch new data (perform new requests)*/
            if(this.state.notFound!=0){
                this.state.searchingstate=true;
                document.getElementById("search-not-searching").classList.add("hide");
                document.getElementById("search-searching").classList.remove("hide");
                document.getElementById("search-not-found-searching").classList.add("hide");
               /* this.componentDidMount();  /** if he is searching for something that is in DB then perform all requests , called each time the input string changed to fetch new data (perform new requests)*/
            }
            else if(this.state.notFound==0){
                this.state.searchingstate=false;
                document.getElementById("search-not-searching").classList.add("hide");
                document.getElementById("search-searching").classList.add("hide");
                document.getElementById("search-not-found-searching").classList.remove("hide");
            }
        }
      }
    /**get all tracks of the album 
         * @type {Function}
         * @memberof ArtistWebPlayer
         */
        getTracks(){
            
            console.log("text before sending to search(in get tracks):",this.state.text);
            /* http://localhost:3000/album_tracks/1*/
            axios.get(this.context.baseURL+"/search?q="+this.state.text+"&limit=5")
                .then(res => {
                console.log("response of search:",res);
                if(res.status===200)
                {   
                    console.log("response of search (items):",res.data.data.items);
                    this.setState({tracks:res.data.data.items})
                    console.log("response of search (total):",res.data.data.total);
                    this.setState({notFound:res.data.data.total})
                }
                else if(res.status===401)
                {
                    localStorage.removeItem("loginType");
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("token");
                    localStorage.removeItem("userID");
                }
                else{
                    alert(res.message);
                }
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
      render()
      {
        const logInOrNot = localStorage.getItem("isLoggedIn");
        return (
            <ProfileContext.Consumer>{(profile) => (
                <ConfigContext.Consumer>{(config) => {
                    const {user}= profile
                        return(
                            <div>
                                <div id='root-navbar' className='root-navbar'>
                                        <head>
                                            <title>Google Icons</title>
                                            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                                        </head>
                                        <div id="root-navbar-container" className="container m-0 ">
                                            <div className="row">
                                                <div id="navbar-arrows"className="col-2 navbar-arrows">
                                                    <i id="root-navbar-arrows"className="material-icons btn " >keyboard_arrow_left</i>
                                                    <i id="root-navbar-arrows"className="material-icons btn" >keyboard_arrow_right</i>
                                                </div>
                                                <div id='search-input' className="col-8" >
                                                    <input onChange={event => this.searchHandler(event.target.value)} type="text" id="search-text-input" name="search-text-input" placeholder="Search for Artists, Albums, Or Songs" ></input>
                                                </div>
                                                {logInOrNot==="true" ? (
                                                
                                                    <div className="col-2 your-library-profile" id="navbar-profile-section" >
                                                        <div className="dropdown">
                                                            <a className="btn dropdown-toggle" href="#" role="button"  onClick={()=> this.toggleNavbarProfile()} id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                                                <span ><img src={user.images} id="navbar-profile-pic" className="rounded-circle" alt="Profile" ></img></span>
                                                                <span className='navbar-profile-button-name'><h2>{user.name}</h2></span>
                                                            </a>
                                                            <div id="navbar-profile-button-list"className="dropdown-menu p-0" aria-labelledby="dropdownMenuLink">
                                                                <Link to="/account-overview"id="navbar-profile-button-list-item"className="dropdown-item"  target="_blank" >Account</Link>
                                                                <a id="navbar-profile-button-list-item-hr" className="dropdown-item m-0 p-0" href="#"></a>
                                                                <span onClick={()=> this.logOut()}> <a id="navbar-profile-button-list-item"className="dropdown-item" href="#">Log out</a></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    )
                                                :(
                                                    <div>
                                                    <Link to="/login"><button id="navbar-login-button">Log in</button></Link> 
                                                    </div>  
                                                )}
                                            </div>
                                            
                                        </div> 
                                        </div>
                                        <div id="search-body">
                                            <div id='search-not-searching'  >
                                                <h1>Searching for something?</h1>
                                            </div>
                                            <div id='search-searching' className="hide">
                                                <h3 id="search-sections-header"className=" text-white pb-2"><strong>Songs</strong></h3>
                                                <TracksList tracks={this.state.tracks} playing_song_id={this.state.playing_song_id} setPlayingSondId={this.setPlayingSondId}/>
                                                <h3 id="search-sections-header"className=" text-white "><strong>Artists</strong></h3>
                                                <div className="card-group">
                                                    {this.state.artists.map( artist => (
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
                                                <h3 id="search-sections-header" className="text-white"><strong>Albums</strong></h3>
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
                                                <h3 id="search-sections-header"className=" text-white "><strong>Playlists</strong></h3>
                                                <div className="container card-group">
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
                                            <div id='search-not-found-searching' className="hide">{/*if you entered something that is not in DB (here if you entered space)*/}
                                                <h2>No results found for "{this.state.text}"</h2>
                                                <h4>Please make sure your words are spelled correctly or use less or different keywords.</h4>
                                            </div>
                                        </div>
                                
                                        
                            </div>               
                        );	
                        }}
            </ConfigContext.Consumer>
            )}</ProfileContext.Consumer>
        );
}
}
export default SearchNavBar;





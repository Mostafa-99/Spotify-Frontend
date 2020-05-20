import React,{Component} from 'react';
import { Link,Redirect } from 'react-router-dom';
import { Route } from 'react-router';
import '../NavBars.css';
import './YourLibraryNavBar.css';
import YouLibraryPlaylists from "./YourLibraryPlaylists"
import YourLibraryArtists from "./YourLibraryArtists"
import axios from 'axios'

import { ConfigContext } from '../../../../Context/ConfigContext'
import { ProfileContext } from '../../../../Context/ProfileContext'
import YourLibraryAlbums from './YourLibraryAlbums';


/** Class of Your Library navbar and chosen body.
 * @extends Component
 */
class YourLibraryNavBar extends Component {
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
            status:''
        }
    }
    /**When the component mounts it sends a request to the backend to load the albums
     * @memberof YourLibraryNavBar
     */
    componentDidMount(){
        this.setState(()=> ({}))
        
        let show=localStorage.getItem("isLoggedIn");
        if(show==="true")
        this.setState({status:"connected"})
          else  
        this.setState({status:"not connected"})
        
        axios.get('http://localhost:3000/users/1/')
            .then(res => {
              this.setState({user: res.data})
            })
    }

    /**log out from spotify 
     * @type {Function}
     * @memberof YourLibraryNavBar
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
     * @memberof YourLibraryNavBar
     */
    toggleNavbarProfile=()=> {
        const element = document.getElementById("dropdownMenuLink");
        element.classList.toggle("toggle-background-color");
      }
      
      sectionTypeHandle(type){
        if(type===1)//overview
        {
            document.getElementById("your-library-playlists").classList.remove("hide");
            document.getElementById("your-library-albums").classList.add("hide");
            document.getElementById("your-library-artists").classList.add("hide");

            document.getElementById("artist-overview-button").classList.add("background-grey");
            document.getElementById("about-button").classList.remove("background-grey");
            document.getElementById("related-artists-button").classList.remove("background-grey");
        }
        else if(type===2)//related artists
        {
            document.getElementById("your-library-playlists").classList.add("hide");
            document.getElementById("your-library-albums").classList.add("hide");
            document.getElementById("your-library-artists").classList.remove("hide");

            document.getElementById("artist-overview-button").classList.remove("background-grey");
            document.getElementById("about-button").classList.add("background-grey");
            document.getElementById("related-artists-button").classList.remove("background-grey");
        }
        else if(type===3)//about
        {
            document.getElementById("your-library-playlists").classList.add("hide");
            document.getElementById("your-library-albums").classList.remove("hide");
            document.getElementById("your-library-artists").classList.add("hide");

            document.getElementById("artist-overview-button").classList.remove("background-grey");
            document.getElementById("about-button").classList.remove("background-grey");
            document.getElementById("related-artists-button").classList.add("background-grey");
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
            <div id="your-library-webplayer">
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
                                            {logInOrNot==="true" ? (
                                                <div id="artist-sections-nav" className="col-8">  
                                                    <a id="artist-overview-button" onClick={() => this.sectionTypeHandle(1)} href="#" className="btn-outline btn-lg background-grey" role="button" aria-pressed="true">Playlists</a>
                                                    <a id="about-button" onClick={() => this.sectionTypeHandle(2)} href="#" className="btn-outline btn-lg no-background" role="button" aria-pressed="true">Artists</a>
                                                    <a id="related-artists-button" onClick={() => this.sectionTypeHandle(3)} href="#" className="btn-outline btn-lg no-background" role="button" aria-pressed="true">Albums</a>
                                                </div>
                                                )
                                                :
                                                (
                                                <div className="col-2">
                                                <Link to="/signup"><button id="navbar-signup-button">Sign up</button></Link>

                                                </div>
                                                )
                                            }
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
                            <div id='your-library-playlists' >
                                <YouLibraryPlaylists/>
                            </div>
                            <div id='your-library-artists' className="hide">
                                <YourLibraryArtists/>
                            </div>
                            <div id='your-library-albums' className="hide">
                                <YourLibraryAlbums/>
                            </div>
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
export default YourLibraryNavBar;





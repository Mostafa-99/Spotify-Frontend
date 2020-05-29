import React from 'react';
import {Link} from 'react-router-dom';
import './SideBar.css'
import spotify_white_logo from '../../Images/spotify_logo_white.png'
import CreatePlaylist from './Bodies/Home/CreatePlaylist/CreatePlaylist'
import MyPlaylists from './MyPlaylists'
import  { Component } from "react";

/** Class of SideBar in WebPlayer componenets
 * @extends Component
 */
class SideBar extends Component {
    render()  {
    /**Logged in or not
     * @memberof SideBar
     * @type {boolean}
     */
    const logInOrNot = localStorage.getItem("isLoggedIn");
    return(
    <div>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
            <script src='https://kit.fontawesome.com/a076d05399.js'></script>
            <meta name="viewport" content="width=900, initial-scale=1, shrink-to-fit=no"></meta>
        </head>

        <CreatePlaylist/>
        <nav id='webplayer-sidebar' className='webplayer-sidebar'>
            <div className="container webplayer-sidebar-container">
                <div className="row-6">
                    <div className="col-2 sidebar-section">
                        <Link to="/home"><img id='sidebar-logo' className="sidebar-logo" src={spotify_white_logo} alt="Spotify Logo White"/></Link>
                        <ul className='sidebar-list'>
                            <Link to="/home" className='text-decoration-none'><li className='sidebar-list-item sidebar-list-item-home'><span className="glyphicon glyphicon-home"></span><span className='list-item-text'>Home</span></li></Link>
                            <Link to="/search"className='text-decoration-none'><li className='sidebar-list-item sidebar-list-item-search'><span className="glyphicon glyphicon-search"></span><span className='list-item-text'>Search</span></li></Link>
                            <Link to="/your-library"className='text-decoration-none'><li className='sidebar-list-item sidebar-list-item-library'><svg viewBox="0 0 512 512" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z" fill="currentColor" ></path></svg><span className='list-item-text mt-auto ml-0 pl-3'>Your Library</span></li></Link>
                        </ul>
                    </div>
                </div>
                {logInOrNot==="true" ? (
                    <div>
                <div className="row-3 ">
                    <div className="col-2 sidebar-section">
                        <div id='sidebar-list-header' className='sidebar-list-item-header'>PLAYLISTS</div>
                        <ul className='sidebar-list'>
                            <div id="create-modal">
                  <button type="button" id="create-playlist" data-toggle="modal" data-target="#static-back-drop">
                   <li className='sidebar-list-item '>
                   <i className='fas fa-plus-square' ></i>
                   <span className='list-item-text'>Create Playlist</span></li>
                </button> 
                            </div>
                            <div to="/search"className='text-decoration-none'><li className='sidebar-list-item '><span className="glyphicon glyphicon-heart-empty"></span ><span className='list-item-text'>Liked Songs</span></li></div>
                        </ul>
                    </div>
                </div>
                <div className="row-3 ">
                    <div className="col-2 sidebar-section sidebar-list-item ">
                        <ul className='sidebar-list'>
                        <hr class="Rootlist__divider" id="horizontal-divider"/>
                             <MyPlaylists/> 
                           
                        </ul>
                    </div>
                </div>
                </div>
                ):(<div> </div>)}
                
            </div>
        </nav>    
    </div>     
    )
}}
export default SideBar;

import React from 'react';
import {Link} from 'react-router-dom';
import './SideBar.css'
import spotify_white_logo from '../../Images/spotify_logo_white.png'
function SideBar() {
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


        <nav id='webplayer-sidebar' className='webplayer-sidebar'>
            <div className="container webplayer-sidebar-container">
                <div className="row-6">
                    <div className="col-2 sidebar-section">
                        <Link to="/"><img id='sidebar-logo' className="sidebar-logo" src={spotify_white_logo} alt="Spotify Logo White"/></Link>
                        <ul className='sidebar-list'>
                            <Link to="/Home" className='text-decoration-none'><li className='sidebar-listitem sidebar-listitem-home'><span class="glyphicon glyphicon-home"></span><span className='list-item-text'>Home</span></li></Link>
                            <Link to="/Search"className='text-decoration-none'><li className='sidebar-listitem sidebar-listitem-search'><span class="glyphicon glyphicon-search"></span><span className='list-item-text'>Search</span></li></Link>
                            <Link to="/Search"className='text-decoration-none'><li className='sidebar-listitem sidebar-listitem-library'><span class="glyphicon glyphicon-search"></span><span className='list-item-text'>Library</span></li></Link>
                        </ul>
                    </div>
                </div>
                <div className="row-3 ">
                    <div className="col-2 sidebar-section">
                        <div id='sidebar-list-header' className='sidebar-listitem-header'>PLAYLISTS</div>
                        <ul className='sidebar-list'>
                            <Link to="/Home"className='text-decoration-none'><li className='sidebar-listitem '><i class='fas fa-plus-square' ></i><span className='list-item-text'>Create Playlist</span></li></Link>
                            <Link to="/Search"className='text-decoration-none'><li className='sidebar-listitem '><span class="glyphicon glyphicon-heart-empty"></span ><span className='list-item-text'>Liked Songs</span></li></Link>
                        </ul>
                    </div>
                </div>
                <div className="row-3 ">
                    <div className="col-2 sidebar-section sidebar-listitem ">
                        <ul className='sidebar-list'>
                            <li className='sidebar-listitem'>our created playlists</li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>    
    </div>     
    )
}
export default SideBar;
import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import spotify_white_logo from '../../Images/spotify_logo_white.png'
//navbar not fixed anymore
const MyDesktopNavbar=styled.nav`
display:flex;
flex-flow: row nowrap;
justify-content:space-evenly;
align-items:center;
background-color:rgba(0,0,0,0.6);

height:11vh;
width:100%;
z-index:1;
#mydesknavbar .links,.links0{
    
    font-size: calc(7px + .8vw);
    text-decoration:none;
    color:white;
    padding:10px;
    font-family: Circular, spotify-circular, Helvetica, Arial, sans-serif;
}
#mydesknavbar .links0
{
    cursor:default;
}

#mydesknavbar .nav-links{
    margin-top:-1%;
    display: flex;
    flex-flow:row nowrap;
    list-style:none;
    justify-content:space-evenly;
    width:35vw;
    text-align:right;
    position: absolute;
    left: 55%;
}

#mydesknavbar .links:hover{
    color:#1DB954;
}

#mydesknavbar .logo{
    width:132px;
    position: absolute;
    left: 12%;
    margin-top:-20px;
}

`
const desktop_navbar = () => {
    return (
        <MyDesktopNavbar>
            <div id="mydesknavbar">
           <Link to="/"><img className="logo" src={spotify_white_logo} alt="Spotify Logo White"/></Link>
            <div className="right">
            <ul className="nav-links" >
                <li>
                    <Link to="/" className="links">Premium</Link>
                </li>
                <li>
                    <Link to="/help" className="links">Help</Link>
                </li>
                <li>
                    <Link to="/" className="links">Download</Link>
                </li>
                <li>
                    <Link to="/" className="links0">|</Link>
                </li>
                <li>
                    <Link  to="/signup" className="links">Signup</Link>
                </li>
                
                <li>
                    <Link to="/login" className="links">Login</Link>
                </li>
                
            </ul>
            </div>
            </div>
        </MyDesktopNavbar>
        
    );
}

export default desktop_navbar
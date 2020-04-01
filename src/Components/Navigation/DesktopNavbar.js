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
background-color:rgba(0,0,0);
height:70px;
width:100%;
z-index:1;

#my-desk-navbar .links,.links-0{
    
    font-size: calc(7px + .8vw);
    text-decoration:none;
    color:white;
    padding:10px;
    font-family: Circular, spotify-circular, Helvetica, Arial, sans-serif;
}

#my-desk-navbar .links-0
{
    cursor:default;
}

#my-desk-navbar .nav-links{
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

#my-desk-navbar .links:hover{
    color:#1DB954;
}

#my-desk-navbar .logo{
    width:132px;
    position: absolute;
    left: 12%;
    margin-top:-20px;
}

`
const DesktopNavbar = () => {
    return (
        <MyDesktopNavbar>

            <div id="my-desk-navbar">
           <Link to="/"><img className="logo" src={spotify_white_logo} alt="Spotify Logo White"/></Link>

            <div className="right">
            <ul className="nav-links" >
                <li>
                    <Link to="/premium" className="links">Premium</Link>
                </li>
                <li>
                    <Link to="/help" className="links">Help</Link>
                </li>
                <li>
                    <a href="https://www.spotify.com/eg-en/download/windows/" className="links">Download</a>
                </li>
                <li>
                    <Link to="/" className="links-0">|</Link>
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

export default DesktopNavbar
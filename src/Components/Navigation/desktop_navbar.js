import React from 'react'
import styled from 'styled-components'
import {Link,Route,Router,NavLink, BrowserRouter} from 'react-router-dom'
import spotify_white_logo from '../../Images/spotify_logo_white.png'

const MyDesktopNavbar=styled.nav`
display:flex;
flex-flow: row nowrap;
justify-content:space-evenly;
align-items:center;
background-color:rgb(0,0,0,0.6);
position:fixed;
height:11vh;
width:100%;
z-index:1;
.links{
    
    font-size: calc(7px + .8vw);
    text-decoration:none;
    color:white;
    padding:10px;
    font-family: Circular, spotify-circular, Helvetica, Arial, sans-serif;
}

.nav-links{
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

.links:hover{
    color:#1DB954;
}

.logo{
    width:132px;
    position: absolute;
    left: 12%;
}

`
const desktop_navbar = () => {
    return (
        <MyDesktopNavbar>
       <BrowserRouter>
            <img className="logo" src={spotify_white_logo} alt="Spotify Logo White"/>
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
                    <Link to="/" className="links">|</Link>
                </li>
                <li>
                    <Link  to="/signup" className="links">Signup</Link>
                </li>
                
                <li>
                    <Link to="/login" className="links">Login</Link>
                </li>
                
            </ul>
            </div>
            </BrowserRouter>
        </MyDesktopNavbar>
        
    );
}

export default desktop_navbar
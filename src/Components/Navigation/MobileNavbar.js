import React, { Component } from "react";
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import spotify_white_logo from '../../Images/spotify_logo_white.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const MyMobileNavbar = styled.nav`
background:black;
height:60px;

#my-mob-navbar .logo{
    width:90px;
    margin-top: 12px;
    margin-left: 15%;
}
#my-mob-navbar .logo-2{
    width:90px;
    margin-left: -15px;
}

#my-mob-navbar .sidebar
{
    z-index:2;
    width:calc (330px+2vw);
    max-width:240px;
    height: 120%;
    margin-top:-50px;
    margin-left: 400%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    background-color: black;
    transition-duration: 650ms;
    
}
#my-mob-navbar .active
{
    display:block;
    position: fixed;
    background-color: black;
   width:430px;
   transition-duration: 650ms;
   right:0
}

#my-mob-navbar .sidebar li:hover
{
    color: #1DB954;
    cursor: pointer;
}

#my-mob-navbar .sidebar a:hover
{
    color: #1DB954;
    cursor: pointer;
}

#my-mob-navbar .sidebar li,ul
{ 
    text-align:left;
    list-style: none;
    font-weight:bold;
}

#my-mob-navbar .sidebar .ul1,.ul0
{ 
    color:rgb(255,255,255);  
    padding: 5px 20px;
    font-size:35px;
    text-align: left;
}

#my-mob-navbar .sidebar .ul0:hover{
    color:#ffffff;
    cursor: default;
}

#my-mob-navbar .sidebar .ul2
{ 
    color:rgba(255,255,255,0.7);
    padding: 8px 20px;
    font-size: 20px;
    letter-spacing:1px;
}
#my-mob-navbar .sidebar #ul3
{ 
    margin-top:230px;
    margin-left:15px;
    padding: 20px 20px;
}
#my-mob-navbar #exit{
    margin-left:75%;
    margin-top:-700px;
}
#my-mob-navbar #enter{
    float:right;
    margin-right:20px;
    margin-top:15px;

}
#my-mob-navbar .disappear {
    display:none;
}
#my-mob-navbar i{
    cursor: pointer;
}

#my-mob-navbar .black-box-active
{
    background-color:rgba(0,0,0,.7);
    position:relative;
    padding-top:1500px;
    margin-top:-1500px;
    padding-bottom: 1700px;
    margin-bottom: -1700px;
}

`

//var on_off=false;
class MobileNavbar  extends Component {
    
    togglesidebar = () => {
        document.querySelector(".sidebar").classList.toggle("active");
        // on_off=!on_off;
        if(document.querySelector(".sidebar").classList.contains("active"))
        {
            document.querySelector(".black-box").classList.toggle("black-box-active");
            document.querySelector("body").style.overflowY='hidden';
        }
        else
        {
            document.querySelector("body").style.overflowY='auto';
            document.querySelector(".black-box").classList.toggle("black-box-active"); 
        }
      }
      render() {
    return (
        
        <MyMobileNavbar>
            <div id="my-mob-navbar">
                <Link to="/" className="navbar-brand"><img className="logo" src={spotify_white_logo} alt="Spotify Logo White" /></Link>
                <span className="" onClick={()=> this.togglesidebar()}></span>
                <span id="enter" onClick={()=> this.togglesidebar()}><i className="fas fa-2x fa-align-justify white-text"></i></span>
                <div className="sidebar">
                    <br></br>
                <span id="exit"  onClick={()=> this.togglesidebar()}><i className="fas fa-times"></i></span>
                <div className="collapse navbar-collapse" id="basicExampleNav">'</div>
                <ul>
                    <Link  to="/premium"><li className="ul1">Premium</li></Link>
                    <Link to="/help"><li className="ul1">Help</li></Link>
                    <li><a className="ul1" href="https://www.spotify.com/eg-en/download/windows/">Download</a></li>    
                    <li className="ul0">_</li>    
                </ul>
                <ul> 
                    <Link to="/signup"><li className="ul2">Sign up</li></Link>
                   <Link to="/login"> <li className="ul2">Log in</li></Link>
                </ul>
                <ul id="ul3">
                <Link to="/"><img className="logo-2" src={spotify_white_logo} alt="Spotify Logo White"/></Link>
                </ul>
               </div> 
             <div className="black-box"></div> 
             </div>
        </MyMobileNavbar>
        
    )
}
}

export default MobileNavbar
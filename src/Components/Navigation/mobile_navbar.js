import React, { Component } from "react";
import styled from 'styled-components'
import spotify_white_logo from '../../Images/spotify_logo_white.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import {Link} from 'react-router-dom'

const MyMobileNavbar = styled.nav`
background:black;
height:60px;

#mymobnavbar .logo{
    width:90px;
    margin-left: 15%;
}
#mymobnavbar .logo2{
    width:90px;
    margin-left: -15px;
    margin-top: calc( -240px + -0.1vw);
}

#mymobnavbar .sidebar
{
    display:none;
    z-index:2;
    width:430px;
    height: 100%;
    margin-left: 200%;
    margin-right:-50px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    background-color: black;
    transition-duration: 450ms;
    
}
#mymobnavbar .active
{       display:block;

    background-color: black;
   width:430px;
   transition-duration: 450ms;
   padding-top: 1000px;
   margin-top: -1000px;
   padding-bottom: 500px;
   margin-bottom: -500px;
   margin-left: 52%;
}

#mymobnavbar .sidebar li:hover
{
    color: #1DB954;
    cursor: pointer;
}

#mymobnavbar .sidebar li,ul
{ 
    text-align:left;
    list-style: none;
    font-weight:bold;
}

#mymobnavbar .sidebar .ul1,.ul0
{ 
    color:rgb(255,255,255);  
    padding: 5px 20px;
    font-size:35px;
    text-align: left;
}

#mymobnavbar .sidebar .ul0:hover{
    color:#ffffff;
    cursor: default;
}

#mymobnavbar .sidebar .ul2
{ 
    color:rgba(255,255,255,0.7);
    padding: 8px 20px;
    font-size: 20px;
    letter-spacing:1px;
}
#mymobnavbar .sidebar #ul3
{ 
    margin-top:230px;
    margin-left:15px;
    padding: 20px 20px;
}
#mymobnavbar #exit{
    margin-left:75%;
    margin-top:-700px;
}
#mymobnavbar i{
    cursor: pointer;
}

#mymobnavbar .blackbox_active
{
    background-color:rgba(0,0,0,.7);
    z-index:1;
    position:relative;
    padding-top: 1000px;
    margin-top: -1000px;
    padding-bottom: 700px;
    margin-bottom: -700px;
}
#mymobnavbar .navbar{
    padding-bottom: 300px;
    margin-bottom: -300px;
    
}
#mymobnavbar .navbar-dark{

}
`

class mobile_navbar  extends Component {
    
    togglesidebar = () => {
        document.querySelector(".sidebar").classList.toggle("active");
        // on_off=!on_off;
        if(document.querySelector(".sidebar").classList.contains("active"))
        {
            document.querySelector(".blackbox").classList.toggle("blackbox_active");
            //document.querySelector("body").style.overflowY='hidden';
        }
        else
        {
            document.querySelector("body").style.overflowY='auto';
            document.querySelector(".blackbox").classList.toggle("blackbox_active"); 
        }
      }
      render() {
    return (
        
        <MyMobileNavbar >
            <div id="mymobnavbar">
            <nav className="navbar navbar-dark"> 
                <a className="navbar-brand" href="#"><img className="logo" src={spotify_white_logo} alt="Spotify Logo White" /></a>
                <span  className="navbar-toggler-icon" onClick={()=> this.togglesidebar()}></span>
                <div className="sidebar">
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
                <Link to="/"><img className="logo2" src={spotify_white_logo} alt="Spotify Logo White"/></Link>
                </ul>
               </div> 
             </nav>
             <div className="blackbox"></div> 
             </div>
        </MyMobileNavbar>
        
    )
}
}

export default mobile_navbar
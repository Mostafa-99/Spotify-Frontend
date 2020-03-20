import React, { Component } from "react";
import styled from 'styled-components'
import spotify_white_logo from '../../Images/spotify_logo_white.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

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
{
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

var on_off=false;
class mobile_navbar  extends Component {
    
    togglesidebar = () => {
        document.querySelector(".sidebar").classList.toggle("active");
        on_off=!on_off;
        if(on_off)
        {
            document.querySelector(".blackbox").classList.toggle("blackbox_active");
            document.querySelector("body").style.overflowY='hidden';
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
            <nav class="navbar navbar-dark"> 
                <a class="navbar-brand" href="#"><img class="logo" src={spotify_white_logo} alt="Spotify Logo White" /></a>
                <span  class="navbar-toggler-icon" onClick={()=> this.togglesidebar()}></span>
                <div class="sidebar">
                <span id="exit"  onClick={()=> this.togglesidebar()}><i class="fas fa-times"></i></span>
                <div class="collapse navbar-collapse" id="basicExampleNav">'</div>
                <ul>
                    <li class="ul1">Premium</li>
                    <li class="ul1">Help</li>
                    <li class="ul1">Download</li>    
                    <li class="ul0">_</li>    
                </ul>
                <ul> 
                    <li class="ul2">Sign up</li>
                    <li class="ul2">Log in</li>
                </ul>
                <ul id="ul3">
                <a href="#"><img class="logo2" src={spotify_white_logo} alt="Spotify Logo White" /></a>
                </ul>
               </div> 
             </nav>
             <div class="blackbox"></div> 
             </div>
        </MyMobileNavbar>
        
    )
}
}

export default mobile_navbar
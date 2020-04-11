import React, { Component } from "react";
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import spotify_white_logo from '../../Images/spotify_logo_white.png'
import { ConfigContext } from '../../Context/ConfigContext'
import { ProfileContext } from '../../Context/ProfileContext'
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
    width: calc(330px+2vw);
    max-width:240px;
    height: 120%;
    margin-top:-50px;
    margin-left: 200%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    background-color: black;
    transition-duration: 650ms;
    display:none;
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
#my-mob-navbar .profile-pic{

    float:right;   
    margin-right:15px;
    margin-top:17px;

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
@media screen and (max-width: 470px)
{

    #my-mob-navbar .sidebar
{
   max-width:100%;
    
}

#my-mob-navbar .sidebar #ul3
{ 
    margin-top:32%;
}

}

`

/**
 * Mobile Navbar Component
 * @extends Component
 */
class MobileNavbar  extends Component {
    
    constructor() {
        super()
        
    this.state ={
        status: 'not connected',
        usern:{},
        loginType:''
    }
    }

    /**
     * Mobile Navbar Component Mount state Intialization
     * 
     */
    componentDidMount = () => {

        this.setState(() => ({}))
        let show = localStorage.getItem("isLoggedIn");
        if (show === "true") {
            let type = localStorage.getItem("loginType");
            this.setState({ status: "connected" })
            this.setState({ loginType: type })
        }
        else {
            this.setState({ status: "not connected" })
        }
    }

    /**
     * Mobile Navbar function onchange to update state
     * 
     */
    componentDidUpdate = () => {

        let show = localStorage.getItem("isLoggedIn");
        if (show === "true" && this.state.status === "not connected") 
        {
            let type = localStorage.getItem("loginType");
            this.setState({ status: "connected" })
            this.setState({ loginType: type })
        }

    }

    /**
     * Function handeling log out whether with facebook or email
     * 
     */
    logOut= () => {
        
        if(this.state.loginType==="fb")
        {
            window.FB.logout(function(response) {
            //console.log(response);
          });

        }
        if(this.state.loginType==="email")
        {
          
        }

            this.setState({ status: "not connected" })
            this.setState({ loginType: '' })
            localStorage.removeItem("userID");
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("token");
            localStorage.removeItem("loginType");
            this.togglesidebar();
    }

    /**
     * Function handeling opening and closing of sidebar and it's effects' on document
     * 
     */
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
        const logInOrNot = this.state.status;
        return (
            <ProfileContext.Consumer>{(profile) => (
                <ConfigContext.Consumer>{(config) => {
                    const {user}= profile
                    //const {baseURL}= config
                    
    return (
    
        <MyMobileNavbar>
            <div id="my-mob-navbar">
                <Link to="/" className="navbar-brand"><img className="logo" src={spotify_white_logo} alt="Spotify Logo White" /></Link>
                <span className="" onClick={()=> this.togglesidebar()}></span>

                <span id="enter" onClick={()=> this.togglesidebar()}><i className="fas fa-2x fa-align-justify white-text"></i></span>
                {logInOrNot==="connected" ?(
                <span className="profile-pic" ><img src={user.images} id="navbar-profile-pic" className="rounded-circle" alt="Profile" ></img></span>
                )
                :
                (
                    <span></span>
                )}
                <div className="sidebar">
                    <br></br>
                <span id="exit"  onClick={()=> this.togglesidebar()}><i className="fas fa-times"></i></span>
                <div className="collapse navbar-collapse" id="basicExampleNav">'</div>
                <ul>
                    <Link  to="/premium"><li className="ul1"  onClick={()=> this.togglesidebar()}>Premium</li></Link>
                    <Link to="/help"><li className="ul1"  onClick={()=> this.togglesidebar()}>Help</li></Link>
                    <li onClick={()=> this.togglesidebar()}><a className="ul1" href="https://www.spotify.com/eg-en/download/windows/" >Download</a></li>    
                    <li className="ul0">_</li>    
                </ul>
                {logInOrNot==="connected" ?(
                    <ul> 
                    <Link to="/account-overview"><li className="ul2"  onClick={()=> this.togglesidebar()}>Account</li></Link>
                    <li className="ul2" onClick={()=> this.logOut()}>Log out</li>
                </ul>
                )
                :
                (
                <ul> 
                    <Link to="/signup" ><li className="ul2"  onClick={()=> this.togglesidebar()}>Sign up</li></Link>
                   <Link to="/login"> <li className="ul2"  onClick={()=> this.togglesidebar()}>Log in</li></Link>
                </ul>
                )}
                <ul id="ul3">
                <Link to="/"><img className="logo-2" src={spotify_white_logo} alt="Spotify Logo White"/></Link>
                </ul>
               </div> 
             <div className="black-box"></div> 
             </div>
        </MyMobileNavbar>
     )
    }}
    </ConfigContext.Consumer>
    )}</ProfileContext.Consumer>
);
}
}


export default MobileNavbar
import React, { Component } from 'react';
import styled from 'styled-components'
import {Link,useHistory} from 'react-router-dom'
import spotify_white_logo from '../../Images/spotify_logo_white.png'
import '../WebPlayer/Bodies/NavBars.css';
import axios from 'axios'
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
    margin-top:-2%;
}

#my-desk-navbar .nav-links{
    margin-top:-1.7%;
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

#my-desk-navbar .my-margins{
    margin: 5px 90px 0 0;
}

#my-desk-navbar .dropdown-item:hover{
    color:#1DB954;
    background-color:white;
}

#my-desk-navbar .neg-margin{
    margin-top:-6.5px;
}

#my-desk-navbar a:hover{
    background-color:transparent;
}

#my-desk-navbar #signup-login{
    display: flex;
    
}
#my-desk-navbar .right{
    margin-left:50px;
    
}

#my-desk-navbar .index-fixed{
    background-color:rgba(0,0,0.0.7);
    position:fixed;
}

`
class DesktopNavbar extends Component {

    constructor() {
        super()

    this.state ={
        user:{},
        status: 'not connected',
        loginType:''
    }

    }

    componentDidMount =()=>{

        this.setState(()=> ({}))
          let show=localStorage.getItem("isLoggedIn");
          if(show==="true")
          {
            let type=localStorage.getItem("loginType");
            this.setState({status:"connected"})
            this.setState({loginType: type})
            axios.get('http://localhost:3000/users/1/')
            .then(res => {
              this.setState({user: res.data})
            })
          }
          else
          {
            this.setState({status:"not connected"})
          }
    }

    componentDidUpdate=()=>{

        let show=localStorage.getItem("isLoggedIn");
          if(show==="true" && this.state.status==="not connected")
          {
            let type=localStorage.getItem("loginType");
            this.setState({status:"connected"})
            this.setState({loginType: type})
            axios.get('http://localhost:3000/users/1')
            .then(res => {

              this.setState({user: res.data})
            })
          }
        
    }

    logOut= () => {
        
        if(this.state.loginType==="fb")
        {
            window.FB.logout(function(response) {
            console.log(response);
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

    render(){
        const logInOrNot = this.state.status; 
    return (
        <MyDesktopNavbar >

            <div id="my-desk-navbar">
           <Link to="/"><img className="logo" src={spotify_white_logo} alt="Spotify Logo White"/></Link>

            <div className="right">
            <ul className="nav-links" >
                <li>
                    <Link to="/premium" className="links">Premium</Link>
                </li>
                <li>
                    <Link to="/help" className="links" >Help</Link>
                </li>
                <li>
                    <a href="https://www.spotify.com/eg-en/download/windows/" className="links">Download</a>
                </li>
                <li className="links-0">
                   |
                </li>
                {logInOrNot==="connected" ?(
                  
                   
                <div className="col-2 right" id="navbar-profile-section" >
                        <div className="dropdown">
                            <a className="btn dropdown-toggle neg-margin links" href="#!" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                            <span ><img src={this.state.user.image} id="navbar-profile-pic" className="rounded-circle" alt="Profile" ></img></span>
                            <span className="links">Profile</span>
                               
                            </a>
                            <div id="navbar-profile-button-list"className="dropdown-menu pt-2 pr-5 pl-3 white my-margins" aria-labelledby="dropdownMenuLink">
                                <Link to="/account-overview"id="navbar-profile-button-list-item"className="dropdown-item p-0" >Account</Link>
                               <span onClick={()=> this.logOut()}> <a id="navbar-profile-button-list-item" className="dropdown-item p-0" href="#">Log out</a></span>
                            </div>
                        </div>
                </div>
                
                )
                :
                (
                    <div id="signup-login">
                    <li>
                        <Link  to="/signup" className="links">Signup</Link>
                    </li>
                    
                    <li>
                        <Link to="/login" className="links">Login</Link>
                    </li>
                    </div>
                )
                }
                
            </ul>
            </div>
            </div>
        </MyDesktopNavbar>
        
    );
}
}

export default DesktopNavbar;
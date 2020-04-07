import React,{Component} from 'react';
import { Link,Redirect } from 'react-router-dom';
import { Route } from 'react-router';
import '../NavBars.css';
import axios from 'axios'

import { ConfigContext } from '../../../../Context/ConfigContext'
import { ProfileContext } from '../../../../Context/ProfileContext'

class ArtistWebPlayerNavBar extends Component {
    constructor(){
        super()
        this.state={
            user:{},
            loginType:'',
            status:''
        }
    }
    componentDidMount(){
        this.setState(()=> ({}))
        
        let show=localStorage.getItem("isLoggedIn");
        if(show==="true")
        this.setState({status:"connected"})
          else  
        this.setState({status:"not connected"})
        
        axios.get('http://localhost:3000/users/1/')
            .then(res => {
              this.setState({user: res.data})
            })
            console.log(this.status)
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

    toggleNavbarProfile=()=> {
        const element = document.getElementById("dropdownMenuLink");
        console.log(element);
        element.classList.toggle("toggle-background-color");
      }
      

      render()
      {
        return (
            <ProfileContext.Consumer>{(profile) => (
                <ConfigContext.Consumer>{(config) => {
                            
                            const logInOrNot = localStorage.getItem("isLoggedIn");
                        return(
                            
                            <div id='root-navbar' className='root-navbar'>
                                
                                    
                                <head>
                                    <title>Google Icons</title>
                                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                                </head>
                                <div id="root-navbar-container" className="container m-0 ">
                                    <div className="row">
                                        <div id="navbar-arrows"className="col-8 navbar-arrows">
                                            <i id="root-navbar-arrows"className="material-icons btn " >keyboard_arrow_left</i>
                                            <i id="root-navbar-arrows"className="material-icons btn" >keyboard_arrow_right</i>
                                        </div>
                                    {logInOrNot==="true" ? (
                                        <div id="navbar-upgrade-button-col" className="col-2">
                                        <Link to="/premium"><button id="navbar-upgrade-button">Upgrade</button></Link>
                                        </div>)
                                        :
                                        (
                                        <div className="col-2">
                                        <Link to="/signup"><button id="navbar-signup-button">Sign up</button></Link>

                                        </div>
                                        )
                                    }
                                        
                                {logInOrNot==="true" ? (
                                
                                    <div className="col-2 " id="navbar-profile-section" >
                                        <div className="dropdown">
                                            <a className="btn dropdown-toggle" href="#" role="button"  onClick={()=> this.toggleNavbarProfile()} id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                                <span ><img src={this.state.user.image} id="navbar-profile-pic" className="rounded-circle" alt="Profile" ></img></span>
                                                <span className='navbar-profile-button-name'><h2>{this.state.user.name}</h2></span>
                                            </a>
                                            <div id="navbar-profile-button-list"className="dropdown-menu p-0" aria-labelledby="dropdownMenuLink">
                                                <Link to="/account-overview"id="navbar-profile-button-list-item"className="dropdown-item"  target="_blank" >Account</Link>
                                                <a id="navbar-profile-button-list-item-hr" className="dropdown-item m-0 p-0" href="#"></a>
                                                <span onClick={()=> this.logOut()}> <a id="navbar-profile-button-list-item"className="dropdown-item" href="#">Log out</a></span>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                :(
                                    <div>
                                    <Link to="/login"><button id="navbar-login-button">Log in</button></Link> 
                                    </div>  
                                )}
                                    </div>
                                    
                                </div> 
                                
                            </div>
                            
                        );	
                        }}
            </ConfigContext.Consumer>
            )}</ProfileContext.Consumer>
        );
}
}
export default ArtistWebPlayerNavBar;




import React,{Component} from 'react';
import { Link,Redirect } from 'react-router-dom';
 import RecentActivity from './RecentActivity';
 import Pagination from './Pagination'
 import '../NavBars.css';
import axios from 'axios'

import { ConfigContext } from '../../../../Context/ConfigContext'
import { ProfileContext } from '../../../../Context/ProfileContext'
import { logout } from '../../../../ReduxStore/Shared';
/** Class of home webplayer navbar.
 * @extends Component
 */
class HomeNavBar extends Component {
    constructor(){
        super()
        this.state={
             /**
             * current user
             * @type {Object}
             */
            user:{},
            /**
             * type of user
             * @type {string}
             */
            loginType:'',
            /**
             * statues of the user
             * @type {string}
             */
            status:''
        }
    }
    /**When the component mounts it sends a request to the backend to load the albums
     * @memberof HomeNavBar
     */
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
    }

    /**log out from spotify 
     * @type {Function}
     * @memberof HomeNavBar
     */
    logOut= () => {
        
            this.setState({status:"not connected"})
        logout();
    }

    /**toggle background color of profile
     * @type {Function}
     * @memberof HomeNavBar
     */
    toggleNavbarProfile=()=> {
        const element = document.getElementById("dropdownMenuLink");
        element.classList.toggle("toggle-background-color");
      }
      

      render()
      {
        const logInOrNot = localStorage.getItem("isLoggedIn");
        return (
            <ProfileContext.Consumer>{(profile) => (
                <ConfigContext.Consumer>{(config) => {
                    const {user}= profile
                return(
                    
                    <div id='root-navbar' className='root-navbar'>
                        <head>
                            <title>Google Icons</title>
                            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                        </head>
                        <div id="root-navbar-container" className="container m-0 ">
                            <div className="row">
                                <div id="navbar-arrows"className="col-6 navbar-arrows">
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
                              {logInOrNot==="true"?(
                                <div className="col-2"><RecentActivity/>
                                </div> 

                             ):<div></div>}   
                            
                        {logInOrNot==="true" ? (
                        
                            <div className="col-2 " id="navbar-profile-section" >
                                <div className="dropdown">
                                    <a className="btn dropdown-toggle" href="#" role="button"  onClick={()=> this.toggleNavbarProfile()} id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                        <span ><img src={user.images} id="navbar-profile-pic" className="rounded-circle" alt="Profile" ></img></span>
                                        <span className='navbar-profile-button-name'><h2>{user.name}</h2></span>
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
export default HomeNavBar;




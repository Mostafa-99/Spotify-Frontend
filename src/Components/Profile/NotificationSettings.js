import React, { Component } from 'react'
import SideBar from './SideBar'
import axios from 'axios'
import {Link} from 'react-router-dom';
import './Profile.css';
import { responseHandler } from '../../ReduxStore/Shared';


class NotificationsSettings extends Component {
    constructor() {
        super()
        this.state = {
          user:{
              image:"",
          },
          Notifications:{},
          successMessage: false,
          failMessage: false
        }
        this.notificationTypeHandle=this.notificationTypeHandle.bind(this)
        this.saveNotificationsHandle=this.saveNotificationsHandle.bind(this)
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        axios.get("http://138.91.114.14/api/me", {
            headers: {
                'authorization': "Bearer "+localStorage.getItem("token"),
            },
        })
            .then(res => {
                console.log(res)
                if(res.status===200)
                {
                    this.setState(prevState => (
                        {
                        user: {                   
                            ...prevState.user,    
                            image: res.data.images    
                        }
                    }))
                }else
                responseHandler(res);
            })
        axios.get("http://138.91.114.14/api/me/notifications", {
            headers: {
                'authorization': "Bearer "+localStorage.getItem("token"),
            },
        })
            .then(res => {
                console.log(res)
                if(res.status===200)
                {
                    this.setState({Notifications:res.data})
                }
                else responseHandler(res);
            })
    }

    notificationTypeHandle(type){
        if(type===1)
        {
            const prevnewmusic = this.state.Notifications.newMusic
            this.setState(prevState => (
                {
                Notifications: {                   
                    ...prevState.Notifications,    
                    newMusic: !prevnewmusic        
                }
            }))
        }
        else if(type===2)
        {
            const prevartistupdates = this.state.Notifications.artistUpdates
            this.setState(prevState => (
                {
                Notifications: {                   
                    ...prevState.Notifications,    
                    artistUpdates: !prevartistupdates        
                }
            }))
        }
        else if(type===3)
        {
            const prevplaylistupdates = this.state.Notifications.playlistUpdates
            this.setState(prevState => (
                {
                Notifications: {                   
                    ...prevState.Notifications,    
                    playlistUpdates: !prevplaylistupdates        
                }
            }))
        }
    }

    saveNotificationsHandle(){
        axios.put('http://138.91.114.14/api/me/notifications', 
        this.state.Notifications,
        {
            headers: {
                'authorization': "Bearer "+localStorage.getItem("token"),
            }
        }
        )   
        .then(res => {
            console.log(res)
            if(res.status === 200)
            {
                this.setState(
                   {
                   successMessage: true,
                   failMessage: false
                   }
                )
            }
            else if(res.status === 401)
            {
                responseHandler(res);
            }
            else 
            {
                console.log("fail")
                this.setState({
                    failMessage: true,
                    successMessage: false
                })
            }
        })
    }

    render()
    {
        {document.title ="Notifications settings - Spotify"}

        return(
            <div className="bg-dark-clr">
            <div id="notifications-settings">
                <head>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
                </head>
                <div className="container notification-settings">
                    <div className="row">
                        <SideBar img={this.state.user.image} />
                        <div className="col-lg-9 notification-section">
                            <div className="notification-div">
                                <div>
                                    <h1 className="page-header">Notification settings</h1>
                                </div>
                                <div className="notification-info">
                                { this.state.successMessage && <div class="alert alert-success">
                                    <p>Notifications changed</p>
                                    </div> }
                                    { this.state.failMessage && <div class="alert alert-danger">
                                    <p>Error</p>
                                    </div> }
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                            <th className="table-head">Your Music</th>
                                            <th > <div className="push-div"><i class="material-icons ">content_copy</i> <p className="push-word">PUSH</p></div></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>
                                                <p className="row-head">New Music</p>
                                                <p className="row-descreption">Fresh tracks from artists you follow or might like</p>
                                            </td>
                                            <td>
                                                <label class="checkbox">
                                                    <input type="checkbox" checked={this.state.Notifications.newMusic} onChange={() => this.notificationTypeHandle(1)}/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <p className="row-head">Artist Updates</p>
                                                <p className="row-descreption">Hear about artists you listen to and artists we think you’ll like</p>
                                            </td>
                                            <td>
                                                <label class="checkbox">
                                                    <input type="checkbox" checked={this.state.Notifications.artistUpdates} onChange={() => this.notificationTypeHandle(2)}/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>
                                                <p className="row-head">Playlist Updates</p>
                                                <p className="row-descreption">A playlist you follow is updated</p>
                                            </td>
                                            <td>
                                                <label class="checkbox">
                                                    <input type="checkbox" checked={this.state.Notifications.playlistUpdates} onChange={() => this.notificationTypeHandle(3)}/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="buttons">
                                        <Link to="/account-overview" className="cancel-button">CANCEL</Link>
                                        <button className="btn-sm btn btn-success save-button" onClick={this.saveNotificationsHandle}>SAVE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default NotificationsSettings
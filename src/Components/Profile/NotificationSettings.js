import React, { Component } from 'react'
import SideBar from './SideBar'
import axios from 'axios'
import {Link} from 'react-router-dom';
import './Profile.css';

class NotificationsSettings extends Component {
    constructor() {
        super()
        this.state = {
          user:{},
          Notifications:{},
          messshow: false
        }
        this.notificationTypeHandle=this.notificationTypeHandle.bind(this)
        this.saveNotificationsHandle=this.saveNotificationsHandle.bind(this)
    }

    componentDidMount(){
        axios.get('http://localhost:3000/users/1/')
            .then(res => {
              this.setState({
                  user: res.data,
                  Notifications: res.data.notifications
                })
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
        axios.patch('http://localhost:3000/users/'+this.state.user.id+'/', {notifications: this.state.Notifications}) //must be put request
        .then(res => {console.log(res.data)})
        this.setState(()=> ({ messshow: true}))
    }

    render()
    {
        return(
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
                                    { 
                                        this.state.messshow && <div class="alert alert-success">
                                        <p>Notifications Saved</p>
                                        </div> 
                                    }
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
                                        <Link to="/accountoverview" className="cancel-button">CANCEL</Link>
                                        <button className="btn-sm btn btn-success save-button" onClick={this.saveNotificationsHandle}>SAVE</button>
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
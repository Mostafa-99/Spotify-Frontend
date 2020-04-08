import React, { Component } from 'react';
import './Profile.css';
import AccountSettings from './AccountSettings'
import EditProfile from './EditProfile'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import NotificationsSettings from './NotificationSettings';
class Profile extends Component {
  render()
  {
          
    return (
        <div className="Profile">
            <Route path="/account-overview" component={AccountSettings}/>
            <Route path="/edit-profile" component={EditProfile}/>
            <Route path="/notification-settings" component={NotificationsSettings}/>
        </div>
     
    );
  }
}
export default Profile
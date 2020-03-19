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
      <Router>
        <div className="Profile">
            <Route path="/accountoverview" component={AccountSettings}/>
            <Route path="/editprofile" component={EditProfile}/>
            <Route path="/notificationsettings" component={NotificationsSettings}/>
        </div>
      </Router>
    );
  }
}
export default Profile
import React from 'react';

//import SpotifyButton from './Components/Button/spotify_button'
//import Main from './Components/Main/Main'
//import PremiumNav from './Components/Premium/premiumNav'
//import MainIndex from './Components/userIndex/MainIndex.js'
//import Profile from './Components/Profile/Profile.js'

import SignUp from './Components/SignUp/sign_up.js'
import LogIn from './Components/Login/log_in.js'
import AccountSettings from './Components/Profile/AccountSettings.js'
import EditProfile from './Components/Profile/EditProfile.js'
import NotificationsSettings from './Components/Profile/NotificationSettings.js';

import HelpPage from './Components/HelpPage/HelpPage.js'
import MainPage from './Components/Main/Main.js'

// import AccountHelp from './Components/AccountHelp/AccountHelp';
// import SpotifyAndFacebook from './Components/AccountHelp/Articles/SpotifyAndFacebook'
// import HowToLogOut from './Components/AccountHelp/Articles/HowToLogOut'
// import CanNotActivatePremiumTrial from './Components/AccountHelp/Articles/CanNotActivatePremiumTrial'
// import ChangeEmailAddress from './Components/AccountHelp/Articles/ChangeEmailAddress'
// import ProfilePicture from './Components/AccountHelp/Articles/ProfilePicture'

import {withRouter} from 'react-router';
import {Link,Route,NavLink,BrowserRouter as Router,Switch} from 'react-router-dom'


function App() {
  return (

    <Router>
      <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/help" exact component={HelpPage}/>
        <Route path="/signup" exact component={SignUp}/>
        <Route path="/login" exact component={LogIn}/>
        <Route path="/accountoverview" component={AccountSettings}/>
        <Route path="/editprofile" component={EditProfile}/>
        <Route path="/notificationsettings" component={NotificationsSettings}/>
      </Switch>
    </Router>   
  );
}

export default App;

/*<myBody>
<BrowserRouter>

<Route path="/account_help" exact component={AccountHelp} />
<Route path="/profile-picture" exact component={ProfilePicture} />
<Route path="/using-spotify-with-facebook" exact component={SpotifyAndFacebook} />
<Route path="/how-to-log-out" exact component={HowToLogOut} />
<Route path="/cannot-activate-trial" exact component={CanNotActivatePremiumTrial} />
<Route path="/change-email-address" exact component={ChangeEmailAddress} />
<Route path="/" exact component={MainIndex}/>

<Route path="/premium" exact component={PremiumNav}/>
<Route  exact path="/" component={Main}/>  
    <HelpPage/>     
    </BrowserRouter>
    </myBody>
*/
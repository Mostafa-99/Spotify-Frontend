import React from 'react';

import SpotifyButton from './Components/Button/spotify_button'
import Main from './Components/Main/Main'
import PremiumNav from './Components/Premium/premiumNav'
import MainIndex from './Components/userIndex/MainIndex.js'
import Profile from './Components/Profile/Profile.js'

import HelpPage from './Components/HelpPage/HelpPage.js'
import SignUp from './Components/SignUp/sign_up.js'
import LogIn from './Components/Login/log_in.js'
import AccountSettings from './Components/Profile/AccountSettings.js'
import EditProfile from './Components/Profile/EditProfile.js'
import NotificationsSettings from './Components/Profile/NotificationSettings.js';

import MainPage from './Components/Main/Main.js'
import PremiumCode from './Components/Premium/premiumCode.js';
import Premium from './Components/Premium/premium.js';

import AccountHelp from './Components/HelpComponents/AccountHelp/AccountHelp'
import SpotifyAndFacebook from './Components/HelpComponents/AccountHelp/Articles/SpotifyAndFacebook'
import HowToLogOut from './Components/HelpComponents/AccountHelp/Articles/HowToLogOut'
import CanNotActivatePremiumTrial from './Components/HelpComponents/AccountHelp/Articles/CanNotActivatePremiumTrial'
import ChangeEmailAddress from './Components/HelpComponents/AccountHelp/Articles/ChangeEmailAddress'
import ProfilePicture from './Components/HelpComponents/AccountHelp/Articles/ProfilePicture'

import FeaturesMain from './Components/HelpComponents/Features/FeaturesMain'
import SearchFeature from './Components/HelpComponents/Features/SearchFeature.js';
import YourLibraryFeature from './Components/HelpComponents/Features/YourLibraryFeature.js';
import ShufflePlayFeature from './Components/HelpComponents/Features/ShufflePlayFeature.js';
import ArtistProfilesFeature from './Components/HelpComponents/Features/ArtistProfilesFeature.js';
import VideosFeature from './Components/HelpComponents/Features/VideosFeature.js';

import Home from './Components/WebPlayer/Bodies/Home/Home'
import Search from './Components/WebPlayer/Bodies/Search/Search'



import {withRouter} from 'react-router';
import {Link,Route,NavLink,BrowserRouter as Router,Switch} from 'react-router-dom'


function App() {
  return (

    <Router>
      <Switch>
        <Route path="/help" exact component={HelpPage}/>
        <Route path="/accountoverview" component={AccountSettings}/>
        <Route path="/editprofile" component={EditProfile}/>
        <Route path="/notificationsettings" component={NotificationsSettings}/>
        <Route path="/signup" exact component={SignUp}/>
        <Route path="/login" exact component={LogIn}/>
        <Route path="/premium" exact component={Premium}/>
        <Route path="/premiumcode" exact component={PremiumCode}/>
        <Route path="/main" exact component={MainIndex}/>
        <Route path="/" exact component={MainPage}/>

        <Route path="/account-help" exact component={AccountHelp} />
        <Route path="/profile-picture" exact component={ProfilePicture} />
        <Route path="/using-spotify-with-facebook" exact component={SpotifyAndFacebook} />
        <Route path="/how-to-log-out" exact component={HowToLogOut} />
        <Route path="/cannot-activate-trial" exact component={CanNotActivatePremiumTrial} />
        <Route path="/change-email-address" exact component={ChangeEmailAddress} />

        <Route path="/features-main" exact component={FeaturesMain}/>
        <Route path="/SearchFeature" exact component={SearchFeature}/>
        <Route path="/YourLibraryFeature" exact component={YourLibraryFeature}/>
        <Route path="/ShufflePlayFeature" exact component={ShufflePlayFeature}/>
        <Route path="/ArtistProfilesFeature" exact component={ArtistProfilesFeature}/>
        <Route path="/VideosFeature" exact component={VideosFeature}/>

        <Route path="/Home" exact component={Home} />
        <Route path="/Search" exact component={Search} />
      </Switch>
    </Router>   
  );
}

export default App;

/*<myBody>
<BrowserRouter>

<Route path="/" exact component={MainIndex}/>

<Route  exact path="/" component={Main}/>  
    <HelpPage/>     
    </BrowserRouter>
    </myBody>
*/
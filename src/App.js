import React from 'react';
import SignUp from './Components/Authentication/SignUp.js';
import LogIn from './Components/Authentication/LogIn.js';
import Navbar from './Components/Navigation/Navbar.js';
import Footer from './Components/Footer/Footer.js';
import PasswordReset from './Components/PasswordReset/PasswordReset.js'
import PasswordChange from './Components/PasswordReset/PasswordChange.js'
import NotFound from './Components/NotFound/NotFound.js'
import HelpPage from './Components/HelpPage/HelpPage.js'
import AccountSettings from './Components/Profile/AccountSettings.js'
import EditProfile from './Components/Profile/EditProfile.js'
import NotificationsSettings from './Components/Profile/NotificationSettings.js';
import ChangePasswrod from './Components/Profile/ChangePassword';
import PremiumCode from './Components/Premium/PremiumCode.js';
import Premium from './Components/Premium/Premium.js';
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
import MainSelector from './Components/Main/MainSelector' 
import CreateAlbum from './Components/Artist/UploadFile/CreateAlbum'
import TrackUpload from './Components/Artist/UploadFile/TrackUpload'
import AlbumPage from './Components/Artist/Albums/AlbumPage'
import Home from './Components/WebPlayer/Bodies/Home/Home'
import ArtistWebPlayer from './Components/WebPlayer/Bodies/ArtistWebPlayer/ArtistWebPlayer'
import AlbumWebPlayer from './Components/WebPlayer/Bodies/AlbumWebPlayer/AlbumWebPlayer.js'
import PlaylistWebPlayer from './Components/WebPlayer/Bodies/AlbumWebPlayer/PlaylistWebPlayer.js'
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import ArtistSelector from './Components/Artist/ArtistSelector'
import ProfileContextProvider from './Context/ProfileContext';
import ConfigContextProvider from './Context/ConfigContext'
import {ProtectedRoute} from './ProtectedRoute/ProtectedRoute'


import Overview from './Components/Artist/OverviewPage/Overview'
import ManageProfile from './Components/Artist/ManageProfile/ManageProfile'
import EditTrack from './Components/Artist/EditTrackAndAlbum/EditTrack'
import YourLibrary from './Components/WebPlayer/Bodies/YourLibrary/YourLibrary'
import Search from './Components/WebPlayer/Bodies/Search/Search'

function App() {

  return (
    
    <Router>
      <ConfigContextProvider>
      <ProfileContextProvider>
      <Navbar/>    
      <Switch>
        {/*Public pages */}
        <Route path="/help" exact component={HelpPage}/>
        <Route path="/account-overview" component={AccountSettings}/>
        <Route path="/edit-profile" component={EditProfile}/>
        <Route path="/notification-settings" component={NotificationsSettings}/>
        <Route path="/change-password" component={ChangePasswrod}/>
        <Route path="/signup" exact component={SignUp}/>
        <Route path="/login" exact component={LogIn}/>
        <Route path="/premium" exact component={Premium}/>
        <Route path="/password-reset" exact component={PasswordReset}/>
        <Route path="/resetPassword" component={PasswordChange}/>
        <Route path="/" exact component={MainSelector}/>
        <Route path="/account-help" exact component={AccountHelp} />
        <Route path="/profile-picture" exact component={ProfilePicture} />
        <Route path="/using-spotify-with-facebook" exact component={SpotifyAndFacebook} />
        <Route path="/how-to-log-out" exact component={HowToLogOut} />
        <Route path="/cannot-activate-trial" exact component={CanNotActivatePremiumTrial} />
        <Route path="/change-email-address" exact component={ChangeEmailAddress} />
       
        <Route path="/features-main" exact component={FeaturesMain}/>
        <Route path="/search-feature" exact component={SearchFeature}/>
        <Route path="/your-library-feature" exact component={YourLibraryFeature}/>
        <Route path="/shuffle-play-feature" exact component={ShufflePlayFeature}/>
        <Route path="/artist-profiles-feature" exact component={ArtistProfilesFeature}/>
        <Route path="/videos-feature" exact component={VideosFeature}/>
        <Route path="/home" exact component={Home} />
        <Route path="/webplayer/album" exact component={AlbumWebPlayer} />
        <Route path="/artist-webplayer" exact component={ArtistWebPlayer} />
        <Route path="/playlist-webplayer" exact component={PlaylistWebPlayer} />

        <Route path="/your-library"exact component={YourLibrary}/>
        <Route path="/search"exact component={Search}/>

        {/*Protected pages */}
        <ProtectedRoute path="/edit-profile" component={EditProfile}/>
        <ProtectedRoute path="/notification-settings" component={NotificationsSettings}/>
        <ProtectedRoute path="/premium-code" exact component={PremiumCode}/>
        <ProtectedRoute path="/account-overview" component={AccountSettings}/>
        <ProtectedRoute path="/artist" exact component={ArtistSelector}/>
        <ProtectedRoute path="/artist/track-upload" exact component={TrackUpload}/>
        <ProtectedRoute path="/artist/create-album" exact component={CreateAlbum}/>
        <ProtectedRoute path="/artist/album-page" exact component={AlbumPage}/>
        
        <ProtectedRoute path="/artist/manage-profile" exact component={ManageProfile}/>
        <ProtectedRoute path="/artist/overview" exact component={Overview}/>
        <ProtectedRoute path="/artist/edit-track" exact component={EditTrack}/>


       
       
        <Route path="/" component={NotFound}/>
      </Switch>
      <Footer/>
      </ProfileContextProvider>
      </ConfigContextProvider>
    </Router>   
  );
}

export default  App;


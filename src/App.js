import React from 'react';
import styled from 'styled-components'
import SpotifyButton from './Components/Button/spotify_button'
import Main from './Components/Main/Main'

import SignUp from './Components/SignUp/sign_up.js'
import LogIn from './Components/Login/log_in.js'
import Navbar from './Components/Navigation/navbar.js'
import Footer from './Components/Footer/footer.js'
import HelpPage from './Components/HelpPage/HelpPage.js'

import {withRouter} from 'react-router';

import Background_image from './Images/bk.jpg'
import {Link,Route,NavLink,BrowserRouter as Router,Switch} from 'react-router-dom'



function App() {
  return (
    <Router>
      
      <Navbar />
      <Switch>
        <Route path="/help" component={HelpPage}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={LogIn}/>
        <Route  exact path="/" component={Main}/>  
      </Switch>
      <Footer />
    </Router>   
  );
}

export default App;

/*<myBody>
    <BrowserRouter>
    
    <HelpPage/>
    
    
    </BrowserRouter>
    </myBody>
*/
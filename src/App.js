import React from 'react';
import styled from 'styled-components'
import SpotifyButton from './Components/Button/spotify_button'
import Background_image from './Images/bk.jpg'
import {Link,Route,Router,NavLink,BrowserRouter} from 'react-router-dom'

var main={
  backgroundImage: "url(" + Background_image + ")",
  width: "100%",
  height: "840px"
};

var mybutton={
  position:"absolute",
  marginTop:"60%"
};

function App() {
  return (
    <myBody>
    <BrowserRouter>

    <section style={ main }>
    <SpotifyButton style={mybutton} value='Get Spotify free'></SpotifyButton>
    </section>

    </BrowserRouter>
    </myBody>

  );
}

export default App;

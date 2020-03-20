import React from 'react';
import './main.css'
import Footer from '../Footer/footer.js'
import Navbar from '../Navigation/navbar.js'
import Spotifybutton from '../Button/spotify_button.js'

function Main() {
  return (
    <div>
      
    <section id="main-section">
    <Navbar id="main-navbar"/>
        <div class="bg-img">
            <div class="container">
                <h1>Music for everyone.</h1>
                <h4>Millions of songs. No credit card needed.</h4>
                <Spotifybutton id="ob" value="Get Spotify Free"></Spotifybutton>
            </div>
        </div> 
        
    </section>
    <Footer/>   
    </div>
   
  );
}

export default Main;

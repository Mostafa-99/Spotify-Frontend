import React from 'react';
import './main.css';
import Footer from '../Footer/Footer.js';
import Navbar from '../Navigation/Navbar.js';
import '../Button/spotify_button.css';
import '../../App';



function Main() {
 
  return (
    <div>
      
    <section id="main-section">
    <Navbar id="main-navbar"/>
        <div className="bg-img">
            <div className="container">
                <h1>Music for everyone.</h1>
                <h4>Millions of songs. No credit card needed.</h4>
                <button class="my-spotify-button">Get Spotify Free</button>
            </div>
        </div> 
        
    </section>
    <Footer/>   
    </div>
   
  );
}

export default Main;

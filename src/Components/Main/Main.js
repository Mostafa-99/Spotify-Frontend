import React from 'react';
import './main.css'
import Footer from '../Footer/Footer.js';
import Navbar from '../Navigation/Navbar.js';
import Spotifybutton from '../Button/spotify_button.js'
import '../Button/spotify_button.css'
import { Link } from 'react-router-dom';

function Main() {
  {document.title ="Music for everyone - Spotify"}


  return (
    <div>
      
    <section id="main-section">
    <Navbar id="main-navbar"/>
        <div className="bg-img">
            <div className="container">
                <h1>Music for everyone.</h1>
                <h4>Millions of songs. No credit card needed.</h4>
               <Link to="/signup"> <button id="ob"className="my-spotify-button" >Get Spotify Free</button></Link>

            </div>
        </div> 
        
    </section>
    <Footer/>   
    </div>
   
  );
}

export default Main;

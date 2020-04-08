import React from 'react';
import './main.css'

import '../Button/SpotifyButton.css'
import { Link } from 'react-router-dom';

function Main() {
  {document.title ="Music for everyone - Spotify"}


  return (
    <div>
      
    <section id="main-section">
        <div className="bg-img">
            <div className="container">
                <h1>Music for everyone.</h1>
                <h4>Millions of songs. No credit card needed.</h4>
               <Link to="/signup"> <button id="ob"className="my-spotify-button" >Get Spotify Free</button></Link>

            </div>
        </div> 
        
    </section>
    </div>
   
  );
}

export default Main;

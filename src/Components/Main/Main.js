import React from 'react';
import './Main.css'
import IndexDesktopNavbar from '../Navigation/IndexDesktopNavbar'
import '../Button/SpotifyButton.css'
import { Link } from 'react-router-dom';

function Main() {
  {document.title ="Music for everyone - Spotify"}


  return (
    
      
    <section id="main-section" >
      <IndexDesktopNavbar/>
        <section id="bg-img">
            <div id="container">
              <div className="h-1">Music for everyone.</div>
              <div className="h-4">Millions of songs. No credit card needed.</div>
               <Link to="/signup"> <button id="ob"className="my-spotify-button" >Get Spotify Free</button></Link>
               
            </div>
         </section>     
    </section> 
    
   
  );
}

export default Main;

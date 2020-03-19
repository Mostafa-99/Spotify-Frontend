import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

import './helpPage.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import './help';

function HelpPage() {
  
  return (
    <div>
      
      <div id="body">
        <section id="navigation-section">
          <div className="nav-section-container ">   
            <div>
              <h3>Account & Payment</h3>
              <ul>
                <li><a href="#">Account  Help</a></li>
              </ul>
            </div>
            <div>
              <h3>Using Spotify</h3>
              <ul>
                <li><a href="#">Features</a></li>
              </ul>
            </div>  
          </div>
        </section>

        <div className="container btn-container">
          <a className="scroll-button " href="#videos-section">
            <i className='fas fa-angle-double-down'></i>
          </a>
        </div>

        <section id="videos-section" >
          
          <div id="videos-slides-imgs" className="carousel slide" data-ride="carousel"> 
              <div id="videos-img">
                <div className="carousel-img">
                  <div className="carousel-item active">   
                    <img src="https://support.scdn.co/static/img/videos/video-offline.jpg" alt=""/>
                  </div>
                  <div className="carousel-item">
                    <img src="https://support.scdn.co/static/img/videos/video-connect.jpg" alt=""/>  
                  </div>
                  <div className="carousel-item">
                    <img src="https://support.scdn.co/static/img/videos/video-chromecast.jpg" alt=""/>
                  </div>
                  <div className="carousel-item">
                    <img src="https://support.scdn.co/static/img/videos/video-playlist.jpg" alt=""/>
                  </div>
                  <div className="carousel-item">
                    <img src="https://support.scdn.co/static/img/videos/video-search.jpg" alt=""/>
                  </div>
                </div> 
              </div>
            
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel"> 
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators"  data-slide-to="0" className="active" ></li>
                  <li data-target="#carouselExampleIndicators"  data-slide-to="1" ></li>
                  <li data-target="#carouselExampleIndicators"  data-slide-to="2" ></li>
                  <li data-target="#carouselExampleIndicators"  data-slide-to="3" ></li>
                  <li data-target="#carouselExampleIndicators"  data-slide-to="4" ></li>
                </ol> 
                <div className="carousel-inner container">      
                  <div className="carousel-item active" >
                    <div className="carousel-caption d-none d-md-block">
                      <h1>Listen Offline</h1>
                      <p>How to take your music with you in the car, on the plane, or wherever you may not be able to access the internet</p>       
                      <button type="button" className="btn btn-primary-outline" data-toggle="modal" data-target="#videoModal" data-video="https://player.vimeo.com/video/122512075"><i className='fas fa-caret-right'></i>
                      WATCH VIDEO</button>
                    </div>
                  </div>  
                  <div className="carousel-item" >
                    <div className="carousel-caption d-none d-md-block"> 
                      <h1>Spotify Connect</h1>
                      <p>Play Spotify on your speaker, sound system, or TV with Spotify Connect. Here's how!</p>
                      <button type="button" className="btn btn-primary-outline" data-toggle="modal" data-target="#videoModal" data-video="https://player.vimeo.com/video/126925524"><i className='fas fa-caret-right'></i>
                      WATCH VIDEO</button>
                    </div>       
                  </div>  
                  <div className="carousel-item" >
                    <div className="carousel-caption d-none d-md-block">                           
                      <h1>Spotify on Chromecast</h1>
                      <p>Spotify on your Chromecast? You heard us right! Here's how to team them up!</p>
                      <button type="button" className="btn btn-primary-outline" data-toggle="modal" data-target="#videoModal" data-video="https://player.vimeo.com/video/143256102"><i className='fas fa-caret-right'></i>
                      WATCH VIDEO</button>    
                    </div>
                  </div>
                  <div className="carousel-item" >
                    <div className="carousel-caption d-none d-md-block">     
                      <h1>Make a Playlist</h1>
                      <p>Playlists are your personal mixtapes that you can share or collaborate on with friends. Here's how to get started.</p> 
                      <button type="button" className="btn btn-primary-outline" data-toggle="modal" data-target="#videoModal" data-video="https://player.vimeo.com/video/122512074"><i className='fas fa-caret-right'></i>
                      WATCH VIDEO</button>    
                    </div>
                  </div>   
                  <div className="carousel-item" >
                    <div className="carousel-caption d-none d-md-block">
                      <h1>Search</h1>
                      <p>Search is the key to Spotify's vast library of music, 
                      whether you're looking for a particular artist, 
                      album, or song; or if you want Spotify to find music to match a mood, 
                      activity, or time of day.</p>       
                      <button type="button" className="btn btn-primary-outline" data-toggle="modal" data-target="#videoModal" data-video="https://player.vimeo.com/video/122512076"><i className='fas fa-caret-right'></i>
                      WATCH VIDEO</button>                  
                    </div>
                  </div>  
              </div>
                <div className="control-arrows">
                <a className="control-arrow left-arrow" href="#carouselExampleIndicators" role="button" data-slide="prev" >
                  <i className='fas fa-angle-left'></i>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="control-arrow right-arrow" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <i className='fas fa-angle-right'></i>
                  <span className="sr-only">Next</span>
                </a>
              </div>
          </div>             
        </div>   
        </section>
        
        <div className="container btn-container">
          <a className="scroll-button " href="#notspotify-section">
            <i className='fas fa-angle-double-down' ></i>
          </a>
        </div>

        <section id="notspotify-section">
          <div className="notspotify-container">
            <h1>Still not on Spotify?</h1>
            <div className="col-xs-10  col-sm-12 col-lg-6 col-md-6 col-sm-offset-3 container">
              <p>   
                Over 30 million tracks; thousands of curated playlists; 
                Discover Weekly; Spotify Running; Radio;
                Chromecast, sound system, car, TV, and PlayStation integration;
                sharing and creating playlists with your friends... All of this is ready for you.
              </p>
              <a className="btn btn-primary" href="#" role="button">Get Spotify</a> 
            </div>
          </div>
        </section>  

        <div className="modal fade" id="videoModal" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header bg-dark border-dark">
                <button type="button" className="close text-white" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body bg-dark p-0">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  
  );
}




export default  withRouter(HelpPage);


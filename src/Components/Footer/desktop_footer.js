import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import spotify_white_logo from '../../Images/spotify_logo_white.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const MyDesktopFooter=styled.footer`
justify-content:space-evenly;
background:black;
height:100%;

.col1
{
    margin-top:6%;
    margin-left:25%;
    text-align:left;
}
.col2
{
    margin-top:6%;
    margin-left:6%;
}
.col3
{
    margin-top:6%;
    margin-left:6%;
}
.col4
{

    margin-top:7%;
    margin-left:calc(14vw + 00px);
}
i{
    padding:5px 15px ;
}

h5
{
font-size:12px;
color:#919496;
letter-spacing:2px;
}
#mini_footer
{
    margin-top:7%;
    margin-left:12%;
    font-size:12px;
}

#mini_footer a
{
    
    padding:5px;
    color:#919496;
}
#mini_footer a:hover
{
    color:#1DB954;
}

ul
{
  padding:0; 
}
li
{
    list-style:none;
    font-family: Circular, spotify-circular, Helvetica, Arial, sans-serif;
    font-weight:lighter;
    text-align:left;
    padding:10px 2px;
}

a{
    text-decoration:none;
    text-transform:none;
    text-align:left;
    color:white;
}

a:hover{
   color:#1DB954;
}

.logo{
    margin-top:5.5%;
    width:132px;
    position: absolute;
    left: 12%;
}
.right{
  position: absolute;
  right: 10%;

}

.min {

  margin-left: calc(15% + 150px);
}

.max {
  margin-left: calc(50vw + 200px);
}

`


const desktop_footer = () => {
    return (
        
            <MyDesktopFooter>
 
                    <div className="row"> 
                    <img className="logo" src={spotify_white_logo} alt="Spotify Logo White"/>
                            <div className="col1 min">
                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4 ">Company</h5>
                                <ul>
                                    <li><a href="#!">About</a> </li>
                                </ul>
                            </div>
                        
                            <div className="col2">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Communities</h5>
                            <ul >
                                <li><a href="#!">For Artists</a></li>
                               
                            </ul>
                            </div>


                            <div className="col3">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Useful Links</h5>
                            <ul>
                                <li><a href="#!">Help</a> </li>
                                <li><a href="#!">Web Player</a></li>
                                <li><a href="#!">Free Mobile App</a></li>
                            </ul>
                            </div>

                            <div class="col4">  
                                 <a href="https://instagram.com/spotify"><i class="fab fa-2x fa-instagram white-text pr-4"> </i></a>
                                 <a href="https://twitter.com/spotify"><i class="fab fa-2x fa-twitter white-text pr-4"> </i></a>
                                 <a href="https://facebook.com/spotify"><i class="fab fa-2x fa-facebook-f white-text pr-4"> </i></a>

                            </div>

                    </div>
                    
                    
                    <div id="mini_footer">
                        
                    <ul>
                            <li className="list-inline-item left"><a href="#!">Legal</a></li>
                            <li className="list-inline-item left"><a href="#!">Privacy Center</a></li>
                            <li className="list-inline-item left"><a href="#!">Privacy Policy</a></li>
                            <li className="list-inline-item left"><a href="#!">Cookies</a></li>
                            <li className="list-inline-item left"><a href="#!">About Ads</a></li>
                            <li className="list-inline-item right"><a href="#!">©2020 Spotify AB</a></li>
                    </ul>
                    
                    </div>
                  
            </MyDesktopFooter>
        
    );
};

export default desktop_footer;
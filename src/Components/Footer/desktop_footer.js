import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import spotify_white_logo from '../../Images/spotify_logo_white.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';

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
    margin-top:6%;
    margin-left:6%;
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
 
                    <div class="row"> 
                    <img class="logo" src={spotify_white_logo} alt="Spotify Logo White"/>
                            <div class="col1 min">
                                <h5 class="font-weight-bold text-uppercase mt-3 mb-4 ">Company</h5>
                                <ul>
                                    <li><a href="#!">About</a> </li>
                                    <li><a href="#!">Jobs</a></li>
                                    <li><a href="#!">For the Record</a></li>
                                </ul>
                            </div>
                        
                            <div class="col2">
                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Communities</h5>
                            <ul >
                                <li><a href="#!">For Artists</a></li>
                                <li><a href="#!">Developers</a></li>
                                <li><a href="#!">Brands</a></li>
                                <li><a href="#!">Inverstors</a></li>
                                <li><a href="#!">Vendors</a></li>
                            </ul>
                            </div>


                            <div class="col3">
                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Useful Links</h5>
                            <ul>
                                <li><a href="#!">Help</a> </li>
                                <li><a href="#!">Web Player</a></li>
                                <li><a href="#!">Free Mobile App</a></li>
                            </ul>
                            </div>

                            <div class="col4">  
                            <MDBContainer>
                                 <MDBBtn social="fb">
                                 <i class="fab fa-facebook-f white-text mr-4"> </i>
                                      
                                 </MDBBtn>
                            </MDBContainer>     
                            </div>

                    </div>
                    
                    
                    <div id="mini_footer">
                        
                    <ul>
                            <li class="list-inline-item left"><a href="#!">Legal</a></li>
                            <li class="list-inline-item left"><a href="#!">Privacy Center</a></li>
                            <li class="list-inline-item left"><a href="#!">Privacy Policy</a></li>
                            <li class="list-inline-item left"><a href="#!">Cookies</a></li>
                            <li class="list-inline-item left"><a href="#!">About Ads</a></li>
                            <li class="list-inline-item right"><a href="#!">©2020 Spotify AB</a></li>
                    </ul>
                    
                    </div>
                  
            </MyDesktopFooter>
        
    );
};

export default desktop_footer;
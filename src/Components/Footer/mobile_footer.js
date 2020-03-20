import React from 'react'
import styled from 'styled-components'
import spotify_white_logo from '../../Images/spotify_logo_white.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const MyMobileFooter = styled.footer`
background:black;
height:100%;
padding-bottom: 10px;
margin-bottom: -10px;

#mobfooter .col1
{
    margin-top:8%;
    margin-left:8.5%;
    text-align:left;
}
#mobfooter .col2,.col3,.col4
{
    margin-top:6%;
    margin-left:6%;
}

#mobfooter .logo{
    width:100px;
    margin-top:2%;
    position: absolute;
    left: 6%;
}
#mobfooter h5
{
font-size:12px;
color:#919496;
letter-spacing:2px;
}
#mobfooter #mini_footer
{
    margin-top:7%;
    margin-left:3%;
    font-size:10px;
}

#mobfooter #mini_footer a
{ 
    padding:5px;
    color:#919496;
}
#mobfooter #mini_footer a:hover
{
    color:#1DB954;
}

#mobfooter ul
{
  padding:0; 
}
#mobfooter li
{
    list-style:none;
    font-family: Circular, spotify-circular, Helvetica, Arial, sans-serif;
    font-weight:lighter;
    text-align:left;
    padding:10px 2px;
}

#mobfooter a{
    text-decoration:none;
    text-transform:none;
    text-align:left;
    color:white;
}
#mobfooter a:hover{
   color:#1DB954;
}

`

const mobile_footer = () => {
    return (
        <MyMobileFooter>
            <div id="mobfooter">
             <a className="navbar-brand" href="#"><img className="logo" src={spotify_white_logo} alt="Spotify Logo White" /></a>
             <div className="row"> 
                            <div className="col1">
                                
                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4 ">Company</h5>
                                <ul>
                                    <li><a href="#!">About</a> </li>
                                    <li><a href="#!">Jobs</a></li>
                                    <li><a href="#!">For the Record</a></li>
                                </ul>
                            </div>
                            </div>
                        
                            <div className="col2">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Communities</h5>
                            <ul >
                                <li><a href="#!">For Artists</a></li>
                                <li><a href="#!">Developers</a></li>
                                <li><a href="#!">Brands</a></li>
                                <li><a href="#!">Inverstors</a></li>
                                <li><a href="#!">Vendors</a></li>
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
                   
                    
                    
                    {/* <div id="mini_footer">
                        
                    <ul>
                            <li className="list-inline-item left"><a href="#!">Legal</a></li>
                            <li className="list-inline-item left"><a href="#!">Privacy Center</a></li>
                            <li className="list-inline-item left"><a href="#!">Privacy Policy</a></li>
                            <li className="list-inline-item left"><a href="#!">Cookies</a></li>
                            <li className="list-inline-item left"><a href="#!">About Ads</a></li>
                            <li className="list-inline-item right"><a href="#!">©2020 Spotify AB</a></li>
                    </ul>
                    
                    </div> */}
                    </div>
        </MyMobileFooter>
    );
};

export default mobile_footer;
import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import spotify_white_logo from '../../Images/spotify_logo_white.png'
import fb_logo from '../../Images/facebook-icon.png'
import tw_logo from '../../Images/twitter-icon.png'
import in_logo from '../../Images/instagram-icon.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const MyMobileFooter = styled.footer`
background:black;
height:100%;
padding-bottom: 10px;
margin-bottom: -10px;


#my-mob-footer .my-col-1
{
    margin-top:12%;
    margin-left:8.2%;
    
}
#my-mob-footer .my-col-2,.my-col-3,.my-col-4
{
    margin-top:6%;
    margin-left:6%;
}

#my-mob-footer .logo{
    width:100px;
    margin-top:4%;

    position: absolute;
    left: 6%;
}
#my-mob-footer h5
{
font-size:12px;
color:#919496;
letter-spacing:2px;
}

#my-mob-footer .invert{
 filter:invert();
 width:25px;
 margin-left:8px;
 margin-top:7.5px;
}

#my-mob-footer i{
    padding:10px 10px 5px 13px ;
}

#my-mob-footer #mini-footer
{
    margin-top:7%;
    margin-left:3%;
    font-size:10px;
}

#my-mob-footer #mini-footer a
{ 
    padding:5px;
    color:#919496;
}
#my-mob-footer #mini-footer a:hover
{
    color:#1DB954;
}

#my-mob-footer ul
{
  padding:0; 
}
#my-mob-footer li
{
    list-style:none;
    font-family: Circular, spotify-circular, Helvetica, Arial, sans-serif;
    font-weight:lighter;
    
    text-align:left;
    padding:10px 2px;
}

#my-mob-footer a{
    text-decoration:none;
    text-transform:none;
    text-align:left;
    color:white;
    font-family: Circular, spotify-circular, Helvetica, Arial, sans-serif;
}
#my-mob-footer a:hover{
   color:#1DB954;
}
#my-mob-footer .row{
    width:100%;
}

#my-mob-footer .dot {
  height: 40px;
  width: 40px;
  background-color: #222326;
  border-radius: 50%;
  display: inline-block;
  margin-right:10px;
  cursor:pointer;
}
@media screen and (max-width: 470px)
{
    #my-mob-footer .my-col-1
{
    margin-top:15%;
    margin-left:10%;
    
}

}

`

const MobileFooter = () => {
    return (
        <MyMobileFooter>
            <div id="my-mob-footer">
             <Link to="/" className="navbar-brand"><img className="logo" src={spotify_white_logo} alt="Spotify Logo White"></img></Link>

             <div className="row"> 
                            <div className="my-col-1">
                                
                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Company</h5>
                                <ul>
                                    <li><a href="https://www.spotify.com/eg-en/about-us/contact/">About</a> </li>
                                    {/* <li><a >Jobs</a></li>
                                    <li><a >For the Record</a></li> */}
                                </ul>
                            </div>
                            </div>
                        
                            <div className="my-col-2">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Communities</h5>
                            <ul >
                                <Link to="/artist"><li>For Artists</li></Link>

                                {/* <li><a >Developers</a></li>
                                <li><a >Brands</a></li>
                                <li><a >Inverstors</a></li>
                                <li><a >Vendors</a></li> */}
                            </ul>
                            </div>


                            <div className="my-col-3">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Useful Links</h5>
                            <ul>
                                <Link to="/help"><li>Help </li></Link>
                                <Link to="/home"><li>Web Player</li></Link>
                                {/* <li><a href="#!">Free Mobile App</a></li> */}
                            </ul>
                            </div>
                            <div className="my-col-4">  
                            <span className="dot"><a href="https://instagram.com/spotify"><i className="fab fa-instagram"></i></a></span>
                            <span className="dot"><a href="https://twitter.com/spotify"><i className="fab fa-twitter"></i></a></span>
                            <span className="dot"><a href="https://facebook.com/spotify"><i className="fab fa-facebook-f"></i></a></span>
                                 {/* <span className="dot"><a href="https://instagram.com/spotify"><i className="fab fa-2x fa-instagram white-text pr-4"> </i></a></span>
                                 <span className="dot"><a href="https://twitter.com/spotify"><i className="fab fa-2x fa-twitter white-text pr-4"> </i></a></span>
                                 <span className="dot"><a href="https://facebook.com/spotify"><i className="fab fa-2x fa-facebook-f white-text pr-4"> </i></a></span> */}
                            </div>
                   
                    
                    
                            <div id="mini-footer"> 
                            <li className="list-inline-item left  mb-4"><a href="https://www.spotify.com/eg-en/legal/end-user-agreement/" target="_blank">Legal</a></li>
                            <li className="list-inline-item left mb-4"><a href="https://www.spotify.com/eg-en/privacy/" target="_blank">Privacy Center</a></li>
                            <li className="list-inline-item left mb-4"><a href="https://www.spotify.com/eg-en/legal/privacy-policy/" target="_blank">Privacy Policy</a></li>
                            <li className="list-inline-item left mb-4"><a href="https://www.spotify.com/eg-en/legal/cookies-policy/" target="_blank">Cookies</a></li>
                            <li className="list-inline-item left mb-4"><a href="https://www.spotify.com/eg-en/legal/privacy-policy/#s3" target="_blank">About Ads</a></li>
                            <li className="list-inline-item right mb-4"><a href="#!" >©2020 Spotify AB</a></li>
                            </div>

                    </div>
        </MyMobileFooter>
    );
};

export default MobileFooter;
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


#my-desk-footer .my-col-1
{
    margin-top:6%;
    margin-left:25%;
    text-align:left;
}
#my-desk-footer .my-col-2
{
    margin-top:6%;
    margin-left:6%;
}
#my-desk-footer .my-col-3
{
    margin-top:6%;
    margin-left:6%;
}
#my-desk-footer .my-col-4
{

    margin: 100px auto;
}
#my-desk-footer i{
    padding:10px 10px 5px 13px ;
}

#my-desk-footer h5
{
font-size:12px;
color:#919496;
letter-spacing:2px;
}
#my-desk-footer #mini-footer
{
     margin-top:7%;
    margin-left:12%; 
    font-size:12px;
}

#my-desk-footer #mini-footer a
{
    
    padding:5px;
    color:#919496;
}
#my-desk-footer #mini-footer a:hover
{
    color:#1DB954;
}

#my-desk-footer ul
{
  padding:0; 
}
#my-desk-footer li
{
    list-style:none;
    font-family: Circular, spotify-circular, Helvetica, Arial, sans-serif;
    font-weight:lighter;
    text-align:left;
    padding:10px 2px;
}

#my-desk-footer a{
    text-decoration:none;
    text-transform:none;
    text-align:left;
    color:white;
    font-family: Circular, spotify-circular, Helvetica, Arial, sans-serif;
}


#my-desk-footer a:hover{
   color:#1DB954;
}

#my-desk-footer .logo{
    margin-top:5.5%;
    width:132px;
    position: absolute;
    left: 12%;
}
#my-desk-footer .right{
  position: absolute;
  right: 10%;

}

#my-desk-footer .invert{
 filter:invert();
 width:35px;
 margin-left:10px;
 margin-top:9px;
}


#my-desk-footer .dot {
  height: 55px;
  width: 55px;
  background-color: #222326;
  border-radius: 50%;
  display: inline-block;
  margin-right:10px;
  cursor:pointer;
}

#my-desk-footer .min {

  margin-left: calc(15% + 150px);
}

#my-desk-footer .max {
  margin-left: calc(50vw + 200px);
}
#my-desk-footer .row{
    width:100%;
}
`


const DesktopFooter = () => {
    return (
        
            <MyDesktopFooter>
 <div id="my-desk-footer">
                    <div className="row"> 
                   <Link to="/"> <img className="logo" src={spotify_white_logo} alt="Spotify Logo White"/></Link>
                            <div className="my-col-1 min">
                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4 ">Company</h5>
                                <ul>
                                    <li><a href="https://www.spotify.com/eg-en/about-us/contact/">About</a> </li>
                                </ul>
                            </div>
                        
                            <div className="my-col-2">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Communities</h5>
                            <ul >
                            <Link to="/artist"><li>For Artists</li></Link>
                               
                            </ul>
                            </div>


                            <div className="my-col-3">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Useful Links</h5>
                            <ul>
                            <Link to="/help" ><li>Help</li></Link>
                            <Link to="/home"> <li>Web Player</li></Link>
                                {/* <li><a href="#!">Free Mobile App</a></li> */}
                            </ul>
                            </div>

                            <div className="my-col-4"> 
                            <span className="dot"><a href="https://instagram.com/spotify"><i className="fab fa-instagram fa-2x"></i></a></span>
                            <span className="dot"><a href="https://twitter.com/spotify"><i className="fab fa-twitter fa-2x"></i></a></span>
                            <span className="dot"><a href="https://facebook.com/spotify"><i className="fab fa-facebook-f fa-2x"></i></a></span>

                            {/* <span className="dot"><a href="https://instagram.com/spotify"><i className="fab fa-2x fa-instagram white-text pr-4"> </i></a></span>
                            <span className="dot"><a href="https://twitter.com/spotify"><i className="fab fa-2x fa-twitter white-text pr-4"> </i></a></span>
                            <span className="dot"><a href="https://facebook.com/spotify"><i className="fab fa-2x fa-facebook-f white-text pr-4"> </i></a></span> */}
                            </div>

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
            </MyDesktopFooter>
        
    );
};

export default DesktopFooter;
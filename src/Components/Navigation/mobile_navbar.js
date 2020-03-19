import React from 'react'
import styled from 'styled-components'
import spotify_white_logo from '../../Images/spotify_logo_white.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const MyMobileNavbar = styled.nav`
background:black;
height:12vh;

.logo{
    width:100px;
    left: 12%;
}
.navbar-toggler
{
    outline:0;
}
.navbar-toggler:focus
{
    border-color:none;
}
.navbar-nav{
    background-color:black;
}
.nav-item{
    padding-left:25px;
}
.navbar-toggler{
    position:relative;
    margin-left:80%;
    margin-top:-40px;
}

`

const mobile_navbar = () => {
    return (
        <MyMobileNavbar>

            <nav className="navbar navbar-expand-lg navbar-dark primary-color">
                <a className="navbar-brand" href="#"><img className="logo" src={spotify_white_logo} alt="Spotify Logo White" /></a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="basicExampleNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active ">
                            <a className="nav-link" href="#">Home
                         <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Premium</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Help</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Download</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sign up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Log in</a>
                        </li>

                    </ul>
                </div>
            </nav>

        </MyMobileNavbar>
    );
}

export default mobile_navbar
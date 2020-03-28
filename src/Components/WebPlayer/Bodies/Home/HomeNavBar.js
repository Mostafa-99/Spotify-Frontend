import React from 'react';
import { Link } from 'react-router-dom';
import '../NavBars.css';


function HomeNavBar() {
    const mystyle = {
        fontSize:"36px"
      };
    return(
        <div id='root-navbar' className='root-navbar'>
            <head>
                <title>Google Icons</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            </head>

            <div className="container ">
                <div className="row">
                    <div className="col-9 navbar-arrows">
                        <i className="material-icons btn" style={mystyle}>keyboard_arrow_left</i>
                        <i className="material-icons btn" style={mystyle}>keyboard_arrow_right</i>
                    </div>
                    <div class="col-2">
                        <button id="Upgrade-button">Upgrade</button>
                    </div>
                </div>
            </div> 
        </div>
    )
}
export default HomeNavBar;
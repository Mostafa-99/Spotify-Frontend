import React, { Component } from 'react';
import YourLibraryNavBar from './YourLibraryNavBar'
import SideBar from '../../SideBar'
import axios from 'axios'
import {ConfigContext} from '../../../../Context/ConfigContext'
import { Link } from 'react-router-dom';



/** Class of YourLibrary webplayer page.
 * @extends Component
 */
class YourLibrary extends Component { render()
    {
        /*console.log("amr diab id is : ",this.state.myId);*/
       // {document.title ="Spotify - "+this.state.artist.name }
    return(
        
        <div id='webplayer-layout'className="container webplayer col-12">
            <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/></head>
            <div className="row webplayer-body m-0">
                <nav className="col-lg-2 webplayer-sidebar-body colums-no-padding">
                    <SideBar/>
                </nav>
                <div className="col-lg-10 col-sm-12 webplayer-body-and-navbar colums-no-padding">
                    <YourLibraryNavBar/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 colums-no-padding">
                    {/*<ProgressBar/>*/}
                </div>
            </div>
        </div>
    )
    }
}
export default YourLibrary;
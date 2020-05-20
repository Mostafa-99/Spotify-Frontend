import React, { Component } from 'react';
import SearchNavBar from './SearchNavBar'
import SideBar from '../../SideBar'
import axios from 'axios'
import {ConfigContext} from '../../../../Context/ConfigContext'
import { Link } from 'react-router-dom';



/** Class of Search webplayer page.
 * @extends Component
 */
class Search extends Component { 
    render()
    {
    return(
        
        <div id='webplayer-layout'className="container webplayer col-12">
            <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/></head>
            <div className="row webplayer-body m-0">
                <nav className="col-lg-2 webplayer-sidebar-body colums-no-padding">
                    <SideBar/>
                </nav>
                <div className="col-lg-10 col-sm-12 webplayer-body-and-navbar colums-no-padding">
                    <SearchNavBar/>
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
export default Search;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import SearchNavBar from './SearchNavBar'
import SideBar from '../../SideBar'
import ProgressBar from '../../ProgressBar'
import '../Bodies.css';
function Search() {

    return(
            <div id='webplayer-layout'className="container webplayer col-12">
                <div className="row webplayer-body">
                    <nav className="col-lg-2 webplayer-sidebar-body colums-no-padding">
                        <SideBar/>
                    </nav>
                    <div className="col-lg-10 webplayer-body-and-navbar colums-no-padding">
                        <SearchNavBar/>
                        <div>
                            <p>Home</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 colums-no-padding">
                        <ProgressBar/>
                    </div>
                </div>
                
            </div>
        )
}
export default Search;
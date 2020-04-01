import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import CardComponent from './cardComponent';
import TopCover from './topCover';
import Footer from '../Footer/Footer.js'
import Navbar from '../Navigation/Navbar.js'
export class MainIndex extends Component {
    render() {
        {document.title ="Music for everyone - Spotify"}

        return (
                <div>
                    <Navbar/>
                    <TopCover />
                    <CardComponent />
                    <Footer/>
                </div>
        )
    }
}

export default MainIndex

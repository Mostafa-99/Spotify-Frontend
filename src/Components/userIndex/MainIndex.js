import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import CardComponent from './cardComponent';
import TopCover from './topCover';
export class MainIndex extends Component {
    render() {
        {document.title ="Music for everyone - Spotify"}

        return (
                <div>
                    <TopCover />
                    <CardComponent />
                </div>
        )
    }
}

export default MainIndex

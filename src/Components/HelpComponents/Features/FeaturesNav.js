import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import FeaturesMain from './FeaturesMain.js';
import SearchFeature from './SearchFeature.js';
import YourLibraryFeature from './YourLibraryFeature.js';
import ShufflePlayFeature from './ShufflePlayFeature.js';
import ArtistProfilesFeature from './ArtistProfilesFeature.js';
import VideosFeature from './VideosFeature.js';

import './FeaturesMain.css';

export class FeaturesNav extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={FeaturesMain}/>
                    <Route path="/SearchFeature" exact component={SearchFeature}/>
                    <Route path="/YourLibraryFeature" exact component={YourLibraryFeature}/>
                    <Route path="/ShufflePlayFeature" exact component={ShufflePlayFeature}/>
                    <Route path="/ArtistProfilesFeature" exact component={ArtistProfilesFeature}/>
                    <Route path="/VideosFeature" exact component={VideosFeature}/>
                </Switch>
            </Router>
        )
    }
}

export default FeaturesNav

import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import PremiumCode from './premiumCode.js';
import Premium from './premium.js';

export class PremiumNav extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Premium}/>
                    <Route path="/premiumCode" component={PremiumCode}/>
                </Switch>
            </Router>
        )
    }
}

export default PremiumNav

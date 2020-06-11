import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './NotFound.css'

/**
 * Not Found Page Component
 * @extends Component
 */
export default class NotFound extends Component {
    render() {
        return (
            <div id="my-not-found">
                <div id="text">
                    <br/><br/><br/>
                <h1>404s and heartbreaks</h1>
                <p>We couldn’t find the page you were looking for.<br/> 
                Maybe our FAQ or Community can help?</p>
                <Link to="/" className="home">Go Home</Link>
                </div>
                <img className="img-responsive record" src="//www.scdn.co/i/404/record.svg"></img>
                <br/><br/><br/>
            </div>
        )
    }
}

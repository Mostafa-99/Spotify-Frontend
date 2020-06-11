import React, { Component } from 'react'
import Main from './Main'
import MainIndex from '../UserIndex/MainIndex'

/**
 * Main Selector choosing which index to load depending on user is logged in or not
 * @extends Component
 */
class MainSelector extends Component {
 
    render() {
        return (
            <div>
            {localStorage.getItem("isLoggedIn")==="true" ?(
                <MainIndex/>
            )  : (
                <Main/>
            )}
                
            </div>
        )
    }
}
export default MainSelector;
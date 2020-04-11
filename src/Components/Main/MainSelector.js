import React, { Component } from 'react'
import Main from './Main'
import MainIndex from '../UserIndex/MainIndex'
/** Class of Main index page selector. It checks if the user is logged in or not to show the proper page.
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
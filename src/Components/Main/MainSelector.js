import React, { Component } from 'react'
import Main from './Main'
import MainIndex from '../userIndex/MainIndex'

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
import React, { Component } from 'react'
import Main from './Main'
import MainIndex from '../userIndex/MainIndex'

class MainSelector extends Component {
    componentDidMount(){
        localStorage.setItem("isLoggedIn",false);
        console.log(localStorage.getItem("isLoggedIn"));
    }
    render() {
        return (
            <div>
            {localStorage.getItem("isLoggedIn")=="true" ?(
                <MainIndex/>
            )  : (
                <Main/>
            )}
                
            </div>
        )
    }
}
export default MainSelector;
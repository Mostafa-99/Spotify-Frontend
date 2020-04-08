import React, { Component } from 'react'
import Albums from './Albums/Albums'
import UpgradeArtist from './UpgradeArtist/UpgradeArtist'
import {ProfileContext} from '../../Context/ProfileContext'
class MainSelector extends Component {
    static contextType=ProfileContext;
    
    render() {
        return (
            <div>
            {this.context.user.role==="artist" ?(
                <Albums/>
            )  : (
                <UpgradeArtist/>
            )}
                
            </div>
        )
    }
}
export default MainSelector;
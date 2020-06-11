import React, { Component } from 'react'
import CardComponent from './CardComponent';
import TopCover from './TopCover';

/** Class of Albums of artist. It gets the albums of the artist in the artist mode
 * @extends Component
 */
export class MainIndex extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render() {
       document.title ="Music for everyone - Spotify"
        return (
                <div>
                    <TopCover />
                    <CardComponent />
                </div>
        )
    }
}

export default MainIndex

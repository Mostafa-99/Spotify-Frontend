import React, {Component} from "react"
//import './MyPlaylists.css'

/** Class of My playlists components seen in the side bars 
 * @extends Component
 */


class MyPlaylists extends Component {

    constructor() {
        super()
        this.state = {
            /** Array of my PLatlists 
            * @extends MyPlaylists
            * @type {Array<playLists>}
            */
            playLists:[],

        }
    }
 /**Sends request to the backend to  get users Playlists 
   * @type {Function}
   * @memberof MyPlaylists
   */
    componentDidMount() {
        fetch("https://my-json-server.typicode.com/youmnakhaled/FakeData/MyPlaylists")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    playLists: data.map( playList => ({
                        /**
                         @type {string}
                         @memberof MyPlaylists
                         */
                        id:playList.id,
                         /**
                         @type {string} 
                         @memberof MyPlaylists
                         */
                        title:playList.name
                    }))
             
             
                })
            })        
            
    }

    render() {
        return (<div id="playlist-list-item">
           
 {this.state.playLists.map(playList => (
 <li className='sidebar-list-item'>{playList.title} </li>
 
))}

    
        </div>
        )
    }
}
export default MyPlaylists;
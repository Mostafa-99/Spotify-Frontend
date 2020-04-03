import React, {Component} from "react"
import './myplaylist.css'

class MyPlaylists extends Component {

    constructor() {
        super()
        this.state = {
            playLists:[],

        }
    }

    componentDidMount() {
        fetch("https://my-json-server.typicode.com/youmnakhaled/FakeData/MyPlaylists")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    playLists: data.map( playList => ({
                        id:playList.id,
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
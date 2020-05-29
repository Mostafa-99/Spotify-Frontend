import React, {Component} from "react"
import {ConfigContext} from "../../../src/Context/ConfigContext"
import axios from 'axios'
import { responseHandler } from "../../ReduxStore/Shared"
import { Link } from 'react-router-dom';
import './MyPlaylists.css'

/** Class of My playlists components seen in the side bars 
 * @extends Component
 */


class MyPlaylists extends Component {
    static contextType=ConfigContext;
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
        axios.get(this.context.baseURL +'/users/playlists',
        {
           headers:{'authorization':"Bearer "+localStorage.getItem('token')}
           }
        ) 
        .then(res => {
            if(res.status===200)
            { 
                console.log(res)
                   this.setState({
                      playLists: res.data.data.playlist.map( playlist => ({
                      
                          /**
                          * ID of the playlist
                           @memberof MyPlaylists
                           @type {String}
                          *
                          */
                         id:playlist._id,
                        /**
                          * name  of the playlist
                           @memberof MyPlaylists
                          * 
                           @type {String}
                          */
                      title:playlist.name,
                        /**
                          * Link to tracks of my playlist
                           @memberof MyPlaylists
                           @type {Route}
                          * 
                          */
                      href:playlist.href,
                    
                  }))
              }) } else 
              responseHandler(res);
          }).catch(res=>{
              console.log(res);
          } )
        
           
            
    }

    render() {
        
        return (
        <div id="playlist-list-item">
           
 {this.state.playLists.map(playlist => (

<Link to={{
    pathname:"/playlist-webplayer",
    state:{
    myId :playlist.id,
    myhref:playlist.href,
    }
}}>
     <li className='sidebar-list-item' id={playlist.id} >{playlist.title} </li>
  
</Link>  

 
))}

    
        </div>
        )
    }
}
export default MyPlaylists;
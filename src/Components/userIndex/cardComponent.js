import React, {Component} from "react"
import "./userIndex.css"
import axios from 'axios'

class CardComponent extends Component {

    constructor() {
        super()
        this.state = {
            playlists:[],

        }
    }
 //Good luck yaall   
// limit get six Playlists 
// request used here is get/playlist/top
// URL?_limit=6,-popularity
// to get 6  most popular descendingly  
// Remove Comments when integrating 
    componentDidMount() {
            axios.get("http://my-json-server.typicode.com/youmnakhaled/Fakedata/tracks?_limit=6" )
            .then(res => {
              /*if(res.status===200)
              { */
                     this.setState({
                    playlists: res.data.map( playlist => ({
                        id:playlist.id,
                        title:playlist.name,
                        artist:playlist.owner[0].name,
                        imageUrl:playlist.images,
                        href:playlist.tracks.href
                    }))
                })
            })
           /* }
                else{
                    alert("Error.");
                }
            }) 
            .catch(error => {
                alert(error.response.data.message);
            }) */
    }

    render() {
        return (
            <div id="lowersection">
             <section>
                 <div className="container" id="low-sec-container">
                     <div className="row" id="row-lower">
                     <h2 className="h1-spotify" id="row-lower-font ">Looking for music?</h2>
                     <p className="lead" id="user-index-lead-1">Start listening to the best new releases.</p>
                        <a href="https://open.spotify.com/browse" >
                         <button id="launch-button">Launch Web Player</button>
                         </a>
                        
                     </div>

                     <div className="row" id="userindexrow3">
                     <div className="items-wrapper">

            {this.state.playlists.map(playlist => (
  
                                        <div className="item-wrapper" id={playlist.id}>
                                            <div className="index-img-background" id={playlist.id} >
                                                <img src={playlist.imageUrl} alt="Playlist cover pictutre here"></img>
                                                <div className="img-text-wrapper" id={playlist.id}>               
                                                    <div className="subtitle" id={playlist.id} >
                                                        <div className="playlist-info">
                                                            <div id="title"> {playlist.title}</div>
                                                            <div id="artist"> {playlist.artist}</div>
                                                            </div>
                                                            
                                                           {/* This should be a link Link here to {playlist.href
                                                            <link to="/">
                                                            <button id="button-outline">Play  Now</button> 
                                                            </link>    
                                                                     */}
                                                            <button id="button-outline">Play  Now</button> 
                                                    </div>
                                                </div> 
                                            </div>
                                        </div>      ))}

                
                </div>
                 </div>
                 </div>
                </section>
              </div>
              )
    }
}
export default CardComponent



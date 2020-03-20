import React, {Component} from "react"
import "./userIndex.css"

class CardComponent extends Component {

    constructor() {
        super()
        this.state = {
            playLists:[],

        }
    }

    componentDidMount() {
        fetch("https://my-json-server.typicode.com/youmnakhaled/FakeData/tracks")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    playLists: data.map( playList => ({
                        id:playList.id,
                        title:playList.name,
                        imageUrl:playList.images,
                        artist:playList.owner
                    }))
             
             
                })
            })        
            
    }

    render() {
        return (
            <div id="lowersection">
             <section>
                 <div className="container" id="lowseccontainer">
                     <div className="row" id="rowlower">
                     <h2 className="h1spotify" id="rowlowerfont">Looking for music?</h2>
                     <p className="lead" id="userindexlead1">Start listening to the best new releases.</p>
                        <a href="https://open.spotify.com/browse" >
                         <button id="launchbutton">Launch Web Player</button>
                         </a>
                     </div>

                     <div className="row" id="userindexrow3">
                     <div className="itemswrapper">

            {this.state.playLists.map(playList => (
  
                                        <div className="itemwrapper">
                                            <div className="imgbackground" >
                                                <img src={playList.imageUrl}></img>
                                                <div className="imagetextwrapper">               
                                                    <div className="subtitle">
                                                        <div className="playlistinfo">
                                                            <div id="title"> {playList.title}</div>
                                                            <div id="artist"> {playList.artist}</div>
                                                            </div>
                                                            <a href="https://google.com"> 
                                                            <button id="buttonoutline">Play  Now</button> 
                                                            </a>                
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



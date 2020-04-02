import React, {Component} from "react"
import "./userIndex.css"
import { Link } from "react-router-dom"

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
                        <Link to="/home">
                         <button id="launchbutton">Launch Web Player</button>
                        </Link>
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
                                                           <Link to="/home"> 
                                                            <button id="buttonoutline">Play  Now</button> 
                                                            </Link>                
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



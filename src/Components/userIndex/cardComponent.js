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
            <div className="lowerSection">
             <section>
                 <div className="container">
                     <div className="row" id="rowLower">
                     <h2 className="h1">Looking for music?</h2>
                     <br/>
                     <p className="lead">Start listening to the best new releases.</p>
                    <br/><br/>
                        <a href="https://open.spotify.com/browse" >
                         <button id="launchButton">Launch Web Player</button>
                         </a>
                     </div>

                     <div className="row">
                     <div className="portfolio-items-wrapper">

            {this.state.playLists.map(playList => (
  
                                        <div className="portfolio-item-wrapper">
                                            <div className="img-background" >
                                                <img src={playList.imageUrl}></img>
                                                <div className="image-text-wrapper">               
                                                <div className="subtitle">
                                                    <div className="playlistInfo">
                                                        <div id="title"> {playList.title}</div>
                                                        <div id="artist"> {playList.artist}</div>
                                                        </div>
                                                        <a href="https://google.com"> 
                                                        <button id="buttonOutline">Play  Now</button> 
                                                        </a>                
                                                </div>
                                                </div> 
                                            </div>
                                        </div>   

                                        ))}

                
                </div>
                 </div>
                 </div>
                </section>
              </div>
              )
    }
}
export default CardComponent



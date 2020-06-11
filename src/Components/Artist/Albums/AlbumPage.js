import React, { Component } from "react";
import "../SideBar/ArtistSidebar";
import "../UploadFile/UploadFile.css";
import "../../WebPlayer/WebplayerHome.css";
import AlbumWebPlayer from '../../WebPlayer/Bodies/AlbumWebPlayer/AlbumWebPlayer'
import { Link } from "react-router-dom";

class AlbumPage extends Component {

  constructor(){
    super()
    this.state = {
        myId:{},
    }}

    componentDidMount() {
        
      const{myId}=this.props.location.state;//getting id from parent component
      this.state.myId=myId;
    }
  
  render() {
    return (
      <div className="artist-body">
          <Link to="/artist/track-upload"><button className="btn-primary-outline add-album">Track Upload</button></Link>
          <AlbumWebPlayer myId={this.state.myId}/>
      </div>
    );
  }
}

export default AlbumPage;

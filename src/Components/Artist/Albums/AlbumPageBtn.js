import React, { Fragment, useState, Component } from "react";
import "../SideBar/ArtistSidebar";
import "../UploadFile/UploadFile.css";
import "../../WebPlayer/WebplayerHome.css";
import { ProfileContext } from '../../../Context/ProfileContext'
import { Link } from "react-router-dom";

class AlbumPageBtn extends Component {
  static contextType=ProfileContext;
 

  
  render() {
    return (
      <div>
      {this.context.user.role==="artist" ?(
      <Link to={{
             pathname:"/artist/track-upload",
             state: { myId: this.props.id }}}
           ><button className="btn-primary-outline add-album">Track Upload</button>
          </Link>      
          )  : (
          null
      )}
          
      </div>
    );
  }
}

export default AlbumPageBtn;

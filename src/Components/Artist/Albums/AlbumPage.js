import React, { Fragment, useState, Component } from "react";
import axios from "axios";
import "../SideBar/ArtistSidebar";
import "../UploadFile/uploadfile.css";
import "../../WebPlayer/WebplayerHome.css";
import ArtistSidebar from "../SideBar/ArtistSidebar";
import AlbumWebPlayer from '../../WebPlayer/Bodies/AlbumWebPlayer/AlbumWebPlayer'
import { Link } from "react-router-dom";

class AlbumPage extends Component {
  render() {
    return (
      <div className="artist-body">
          <Link to="/artist/track-upload"><button className="btn-primary-outline add-album">Track Upload</button></Link>
          <AlbumWebPlayer/>
      </div>
    );
  }
}

export default AlbumPage;

import React, { Fragment, useState, Component } from "react";
import axios from "axios";
import SideBar from "../../Profile/SideBar";
import "../UploadFile/uploadfile.css";
import "../../WebPlayer/WebplayerHome.css";

class Albums extends Component {
  constructor() {
    super();
    this.state = {
      artistAlbums: []
    };
  }

  componentDidMount() {
    axios.get("http://www.mocky.io/v2/5e74bc56300000d331a5f62f").then(res => {
      this.setState({
        artistAlbums: res.data.map(album => ({
          id: album.id,
          title: album.name,
          imageUrl: album.images
        }))
      });
    });
  }
  render() {
    return (
      <div className="artist-body" id="webplayer-home">
        <div className="full-page container albums-page">
          <SideBar />
          <div className="albums-section">
            <h2 className="section-title albums">Albums</h2>
            <div className="card-group">
              {this.state.artistAlbums.map(album => (
                <div>
                  <div className="card">
                    <img
                      src={album.imageUrl[0]}
                      className="card-img-top"
                      alt="..."
                    ></img>
                    <div className="card-body">
                      <h5 className="card-title">{album.title}</h5>
                      <p className="card-text">{album.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Albums;

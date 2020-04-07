import React, { Fragment, useState, Component } from "react";
import axios from "axios";
import "../SideBar/ArtistSidebar";
import "../UploadFile/uploadfile.css";
import "../../WebPlayer/WebplayerHome.css";
import ArtistSidebar from "../SideBar/ArtistSidebar";
import { Link } from "react-router-dom";

class Albums extends Component {
  constructor() {
    super();
    this.state = {
     artistAlbums: [],
    };
  }

  componentDidMount() {
    console.log("errrrrrr");
    {
      /*/me/albums */
    }
    axios
      .get("http://138.91.114.14/api/me/albums", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log("most recent albums", res);
          this.setState({
          artistAlbums: res.data.data.map((album) => ({
              id: album._id,
              title: album.name,
              imageUrl: album.image,
              artist: album.artists.name,
            })),
          });
        } else if (res.status === 401) {
          localStorage.removeItem("loginType");
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("token");
          localStorage.removeItem("userID");
        }
      });
  }
  render() {
    return (
      <div className="artist-body" id="webplayer-home">
        <div className="full-page container albums-page">
          <ArtistSidebar />
          <div className="albums-section">
            <div className="header-button-container">
              <h2 className="section-title albums">Albums</h2>
              <Link to="/artist/create-album">
                <button className="btn-primary-outline add-album">
                  Add Album
                </button>
              </Link>
            </div>
            <div className="card-group">
              {this.state.artistAlbums.map((album) => (
                <Link
                  to={{
                    pathname: "/artist/album-page",
                    state: { myId: this.state.artistAlbums.id },
                  }}
                >
                  <div className="card">
                    <img
                      src={album.imageUrl}
                      className="card-img-top"
                      alt="..."
                    ></img>
                    <div className="card-body">
                      <h5 className="card-title">{album.title}</h5>
                      <p className="card-text">{album.description}</p>
                      <div id={album.id}>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Albums;

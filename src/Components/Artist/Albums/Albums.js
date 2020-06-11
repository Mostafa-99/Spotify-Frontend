import React, { Component } from "react";
import axios from "axios";
import "../SideBar/ArtistSidebar";
import "../UploadFile/UploadFile.css";
import "../../WebPlayer/WebplayerHome.css";
import ArtistSidebar from "../SideBar/ArtistSidebar";
import { Link } from "react-router-dom";
import { ConfigContext } from "../../../Context/ConfigContext";
import ArtistHeading from "../ManageProfile/ArtistHeading";
import Message from "../UploadFile/Message";

import "./AlbumPage.css";
import { responseHandler } from "../../../ReduxStore/Shared";
/** Class of Albums of artist. It gets the albums of the artist in the artist mode
 * @extends Component
 */
class Albums extends Component {
  /**Gets the baseURL from configrations context of the user
   * @memberof Albums
   */
  static contextType = ConfigContext;

  constructor() {
    super();
    this.state = {
      /**Array of Albums of the artist
       * @memberof Albums
       * @type {Array<Albums>}
       */
      artistAlbums: [],
      pageLoaded: false,
    };
  }
  /**When the component mounts it sends a request to the backend to load the albums
   * @memberof Albums
   */
  componentDidMount() {
    window.scrollTo(0, 0);

    axios
      .get(this.context.baseURL + "/me/albums", {
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
              artist: album.artists[0].name,
            })),
            pageLoaded:true,
          });
        }
      })
      .catch((res) => {
        responseHandler(res);
      });
  }

  render() {
    return (
      <div className="artist-body pt-0" id="webplayer-home">
        <ArtistHeading />
        <div className="full-page container albums-page artist-albums-page">
          <div className="row container">
            <ArtistSidebar />
            <div className="col-lg-9 albums-section">
              <div className="header-button-container">
                <h2 className="section-title albums">Albums</h2>
                <Link
                  to={{
                    pathname: "/artist/create-album",
                    state: { myAlbum: false },
                  }}
                  >
                  <button className="btn-primary-outline add-album">
                    Add Album
                  </button>
                </Link>
              </div>
              {this.state.message ? <Message msg={this.state.message} /> : null}

              {this.state.pageLoaded ? 
              <div className="card-group">
                {this.state.artistAlbums.map((album) => (
                  <div id={album.id}>
                    <Link
                      to={{
                        pathname: "/webplayer/album",
                        state: { myId: album.id, myAlbum: true },
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
                          <p className="card-text">{album.artist}</p>
                        </div>
                        <div>
                          <Link
                            to={{
                              pathname: "/artist/create-album",
                              state: { myId: album.id, myAlbum: true },
                            }}
                          >
                            <button
                              type="button"
                              id={album.id}
                              className="btn btn-danger cancel-btn"
                            >
                              <i className="fa fa-edit text-light"></i>
                            </button>
                          </Link>
                        </div>
                        <div>
                          <Link
                            to={{
                              pathname: "/artist/overview",
                              state: { albumId: album.id, myAlbum: true },
                            }}
                          >
                            <button
                              type="button"
                              id={album.id}
                              className="btn btn-primary stats-btn"
                            >
                              <i className="fa fa-bar-chart text-light" aria-hidden="true"></i>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
           
            : 
            <div className="container w-50 pb-5 align-middle align-self-center d-flex justify-content-center">
            <div class="spinner-border text-success" role="status">
            <span class="sr-only">Loading...</span>
          </div>
              </div>}
            </div>
         </div>
        </div>
      </div>
    );
  }
}

export default Albums;

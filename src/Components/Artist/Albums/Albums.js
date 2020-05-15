import React, { Component } from "react";
import axios from "axios";
import "../SideBar/ArtistSidebar";
import "../UploadFile/UploadFile.css";
import "../../WebPlayer/WebplayerHome.css";
import ArtistSidebar from "../SideBar/ArtistSidebar";
import { Link } from "react-router-dom";
import { ConfigContext } from "../../../Context/ConfigContext";
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
    };
  }
  /**When the component mounts it sends a request to the backend to load the albums
   * @memberof Albums
   */
  componentDidMount() {
    {
      /*/me/albums */
    }
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
          });
        }
      })
      .catch((res) => {
        if (res.status === 401) {
          localStorage.removeItem("loginType");
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("token");
          localStorage.removeItem("userID");
        } else {
          alert(res.message);
        }
      });
  }
  render() {
    return (
      <div className="artist-body" id="webplayer-home">
        <div className="full-page container albums-page artist-albums-page">
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
                    pathname: "/webplayer/album",
                    state: { myId: album.id },
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
                      <div id={album.id}></div>
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

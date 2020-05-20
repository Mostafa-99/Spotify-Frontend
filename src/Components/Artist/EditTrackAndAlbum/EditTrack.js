import React, { Component } from "react";
import axios from "axios";
import "../SideBar/ArtistSidebar";
import ArtistSidebar from "../SideBar/ArtistSidebar";
import { Link } from "react-router-dom";
import { ConfigContext } from "../../../Context/ConfigContext";
import {ProfileContext} from '../../../Context/ProfileContext'
import ArtistHeading from "../ManageProfile/ArtistHeading";
import "../ManageProfile/ManageProfile.css";
import "../ArtistBody.css";
/** Class of Albums of artist. It gets the albums of the artist in the artist mode
 * @extends Component
 */
class EditTrack extends Component {
  static contextType = ConfigContext;
 

  constructor() {
    super();
    this.state = {
      albumId:"",
      trackId:"",
      trackNewName:"",
    };
  }
  componentDidMount() {
      this.state.albumId=this.props.location.state.albumId;
      this.state.trackId=this.props.location.state.trackId;
      console.log(this.state.albumId);
      console.log(this.state.trackId);
  }
  onChangeTrackName = (e) => {
    this.setState({
      trackNewName: e.target.value,
    });
    console.log(this.state.trackNewName);
  };
  onSubmit=()=>{
    console.log(this.state.trackNewName);
    axios
    .put(this.context.baseURL+"/meArtist/albums/"+this.state.albumId+"/tracks/"+this.state.trackId,{
      "name":this.state.trackNewName
    } ,{
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
       console.log("edited");
      }
    });
  }
  deleteTrack=()=>{
    console.log(this.state.trackNewName);
    axios
    .delete(this.context.baseURL+"/meArtist/albums/"+this.state.albumId+"/tracks/"+this.state.trackId,{
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
       console.log("deleted");
      }
    });
  }
  
  render() {
    
    return (
      <div className="artist-body pt-0" id="artist-manage-profile">
        <ArtistHeading />
        <div className="full-page container albums-page artist-albums-page">
          <div className="row container">
            <ArtistSidebar/>
            <div className="col-lg-9 container top-section">
              <div className="name-container">
                  <h1 className="display-5 text-light mt-5 text-center">Edit Track</h1>
                <div className="input-group  d-flex flex-column mb-5  mt-5 w-50 container ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    aria-label="Name"
                    aria-describedby="basic-addon2"
                    name="fullName"
                    onChange={this.onChangeTrackName}
                  />
                  <div className="">
                    <button
                      className="btn btn-primary-outline w-100 mt-5"
                      type="button"
                      onClick={this.onSubmit}
                    >
                     Edit Track
                    </button>
                    <button
                      className="btn btn-danger rounded-pill w-100"
                      type="button"
                      onClick={this.deleteTrack}
                    >
                     Delete Track
                    </button>
                  </div>
                </div>
              </div>
              </div>
              </div>
              </div>
              </div>
    );
  }
}

export default EditTrack;

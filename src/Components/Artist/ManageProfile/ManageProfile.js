import React, { Component } from "react";
import axios from "axios";
import "../SideBar/ArtistSidebar";
import ArtistSidebar from "../SideBar/ArtistSidebar";
import { Link } from "react-router-dom";
import { ConfigContext } from "../../../Context/ConfigContext";
import {ProfileContext} from '../../../Context/ProfileContext'
import ArtistHeading from "../ManageProfile/ArtistHeading";
import "./ManageProfile.css";
import "../ArtistBody.css";
/** Class of Albums of artist. It gets the albums of the artist in the artist mode
 * @extends Component
 */
class ManageProfile extends Component {
  static contextType = ConfigContext;
 

  constructor() {
    super();
    this.state = {
      nameInput: "",
      bioInput: "",
      file: "",
      fileName: "Choose Image",
      user: {
        image: "",
        background: "",
        name: "",
        bio: "",
      },
    };
  }
  toggleDisplay(claasPassed) {
    const page = document.getElementById("artist-manage-profile");
    const nameContainer = page.querySelector(claasPassed);
    nameContainer.classList.toggle("d-none");
  }
  componentDidMount() {
    console.log(this.state.fileName);
    console.log(this.context);
    
    /*/me/albums */

    /*http://localhost:3000/me*/
    axios
      .get(this.context.baseURL+"/me", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.setState((prevState) => ({
            user: {
              ...prevState.user,
              image: res.data.images,
              name: res.data.name,
              background: res.data.artistInfo.background,
              bio: res.data.artistInfo.bio,
            },
          }));
          console.log(this.state.user.image);
        }
      });
  }
  changeNameText = (e) => {
    this.setState({
      nameInput: e.target.value,
    });
  };
  changeName = () => {
    console.log(this.state.nameInput);
  };

  changeBioText = (e) => {
    this.setState({
      bioInput: e.target.value,
    });
  };
  changeBio = () => {
    console.log(this.state.bioInput);
  };
  changeFile = (e) => {
    this.setState({
      file: e.target.files[0],
      fileName: e.target.files[0].name,
    });
  };
  changeBackground = () => {
    console.log(this.state.file);
    const formData = new FormData();
    formData.append("img", this.state.file);
  };
  render() {
    return (
      <div className="artist-body pt-0" id="artist-manage-profile">
        <ArtistHeading />
        <div className="full-page container albums-page artist-albums-page">
          <div className="row container">
            <ArtistSidebar img={this.state.user.image} />
            <div className="col-lg-9 container top-section">
              <div className="bg-layer"></div>
              <div className="manage-profile-top block">
                <img
                  src={this.state.user.background}
                  className="manage-profile-background"
                  alt="Profile"
                ></img>
                <h2 className="artist-name text-white">
                  {this.state.user.name}
                </h2>
              </div>
              <div className="container row d-flex">
                <div className="container pt-3 col-lg-8 ml-0">
                  <h2 className="text-white text-left mb-3">Biography</h2>
                  <p className="text-white text-left mb-8">
                    {this.state.user.bio}
                  </p>
                </div>
                <div className="d-flex align-items-center mb-5 mt-3 flex-column">
                  <button
                    type="button"
                    className="btn btn-primary-outline w-100"
                    onClick={() => this.toggleDisplay(".name-container")}
                  >
                    Change Name
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary-outline w-100"
                    onClick={() => this.toggleDisplay(".background-container")}
                  >
                    Edit Background
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary-outline w-100"
                    onClick={() => this.toggleDisplay(".bio-container")}
                  >
                    Edit Biography
                  </button>
                </div>
              </div>

              <div className="name-container d-none">
                <div className="input-group  d-flex flex-column mb-5  mt-5 w-50 container ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    aria-label="Name"
                    aria-describedby="basic-addon2"
                    name="fullName"
                    onChange={this.changeNameText}
                  />
                  <div className="">
                    <button
                      className="btn btn-primary-outline w-100"
                      type="button"
                      onClick={() => this.changeName()}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>

              <div className="container w-50 mt-5 mb-5 background-container d-none">
                <div className="input-group d-flex flex-column">
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile04"
                      onChange={this.changeFile}
                    />
                    <label
                      className="custom-file-label"
                      for="inputGroupFile04"
                      value={this.state.fileName}
                    >
                      {this.state.fileName}
                    </label>
                  </div>
                  <div className="">
                    <button
                      className="btn btn-primary-outline w-100"
                      type="button"
                      onClick={() => this.changeBackground()}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-none bio-container">
                <div className="input-group  d-flex flex-column w-50 container mb-5 ">
                  <div className="input-group-prepend">
                    <textarea
                      className="form-control"
                      rows="7"
                      aria-label="With textarea"
                      onChange={this.changeBioText}
                    ></textarea>
                  </div>
                  <button
                    className="btn btn-primary-outline w-100"
                    type="button"
                    onClick={() => this.changeBio()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageProfile;

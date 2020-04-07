import React, { Fragment, useState } from "react";
import axios from "axios";
import Message from "./Message";
import SideBar from "../../Profile/SideBar";
import "../UploadFile/uploadfile.css";
import ArtistSidebar from "../SideBar/ArtistSidebar";
import Progress from "./Progress";
const CreateAlbum = () => {
  const [albumName, setAlbumName] = useState("Album name");
  const [albumType, setAlbumType] = useState("Album type");
  const [albumGenre, setAlbumGenre] = useState("Album genre");

  //const [track, setTrack] = useState("");
  //const [trackName, setTrackName] = useState("Choose track");

  const [img, setImg] = useState("");
  const [imgName, setImgName] = useState("Choose image");

  //const [uploadedFile, setUploadedFile] = useState({});
  //const [uploadPercentage, setUploadPercentage] = useState(0);
  const [message, setMessage] = useState("");

  const onChangeAlbumName = (e) => {
    setAlbumName(e.target.value);
    // console.log(e.target.value);
  };
  const onChangeAlbumType = (e) => {
    setAlbumType(e.target.value);
    // console.log(e.target.value);
  };
  const onChangeAlbumGenre = (e) => {
    setAlbumGenre(e.target.value);
    // console.log(e.target.value);
  };

  const onChangeImg = (e) => {
    setImg(e.target.files[0]);
    setImgName(e.target.files[0].name);
    // console.log(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(albumName);
    // console.log(albumType);
    // console.log(img);
    const formData = new FormData();
   const genre=[];
   genre[0]=albumGenre;
    formData.append("name", albumName);
    formData.append("albumType", albumType);
    formData.append("genre", genre);
    formData.append("image", img);

    try {
      const res = await axios.post(
        "http://138.91.114.14/api/me/albums",
        formData,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );

      setMessage("Album created");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else if (err.response.status === 401) {
        localStorage.removeItem("loginType");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("token");
        localStorage.removeItem("userID");
        alert("Your session has ended");
      } else {
        setMessage(err.response.message);
      }
    }
  };
  return (
    <div className="artist-body">
      <div className="full-page container upload-page">
        <Fragment>
          <ArtistSidebar />
          <form className="container" onSubmit={onSubmit}>
            {message ? <Message msg={message} /> : null}
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="label"
                placeholder="Album name"
                onChange={onChangeAlbumName}
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Album type"
                onChange={onChangeAlbumType}
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Genre"
                onChange={onChangeAlbumGenre}
              />
            </div>
            <div className="custom-file mb-4 ">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
                onChange={onChangeImg}
              />
              <label className="custom-file-label" htmlFor="customFile">
                {imgName}
              </label>
            </div>

            <input
              type="submit"
              value="Create"
              className="btn btn-primary-outline btn-block mt-4"
            ></input>
          </form>
        </Fragment>
      </div>
    </div>
  );
};

export default CreateAlbum;

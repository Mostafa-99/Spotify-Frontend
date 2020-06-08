import React, { Fragment, useState, useContext,useEffect } from "react";
import axios from "axios";
import Message from "./Message";
import "../UploadFile/UploadFile.css";
import ArtistSidebar from "../SideBar/ArtistSidebar";
import { ConfigContext } from "../../../Context/ConfigContext";
import {ProfileContext} from "../../../Context/ProfileContext";
/** Functional component to Create albums using react hooks.
 * @class
 */
const CreateAlbum = (props) => {
  
  /**Gets the baseURL from configrations context of the user
   * @memberof CreateAlbum
   */
  const url = useContext(ConfigContext);
  const user = useContext(ProfileContext);
  console.log(props);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  /**Album name
   * @memberof CreateAlbum
   * @constant albumName
   */
  /**Set album name function
   * @memberof CreateAlbum
   * @constant setAlbumName
   */
  const [albumName, setAlbumName] = useState("Album name");
  /**Album type
   * @memberof CreateAlbum
   * @constant albumType
   */
  /**Set album type function
   * @memberof CreateAlbum
   * @constant setAlbumType
   */
  const [albumType, setAlbumType] = useState("Album type");

  /**Album genre
   * @memberof CreateAlbum
   * @constant albumGenre
   */
  /**Set album genre function
   * @memberof CreateAlbum
   * @constant setAlbumGenre
   */
  const [albumGenre, setAlbumGenre] = useState("Album genre");

  /**Image object
   * @memberof CreateAlbum
   * @constant img
   */
  /**Set image object function
   * @memberof CreateAlbum
   * @constant setImg
   */
  const [img, setImg] = useState("");

  /**Image name
   * @memberof CreateAlbum
   * @constant imgName
   */
  /**Set Image name function
   * @memberof CreateAlbum
   * @constant setImgName
   */
  const [imgName, setImgName] = useState("Choose image");

  /**Message name
   * @memberof CreateAlbum
   * @constant message
   */
  /**Set Message name function
   * @memberof CreateAlbum
   * @constant setMessage
   */
  const [message, setMessage] = useState("");

  /**Album name change event listener
   * @memberof CreateAlbum
   * @type {Function}
   */
  const onChangeAlbumName = (e) => {
    setAlbumName(e.target.value);
  };

  /**Album Type change event listener
   * @memberof CreateAlbum
   * @type {Function}
   */
  const onChangeAlbumType = (e) => {
    setAlbumType(e.target.value);
  };
  /**Album genre change event listener
   * @memberof CreateAlbum
   * @type {Function}
   */
  const onChangeAlbumGenre = (e) => {
    setAlbumGenre(e.target.value);
  };
  /**Album Image change event listener
   * @memberof CreateAlbum
   * @type {Function}
   */
  const onChangeImg = (e) => {
    setImg(e.target.files[0]);
    setImgName(e.target.files[0].name);
    // console.log(e.target.files[0]);
  };
  
  /**Submit Album info to the backend in a request
   * @memberof CreateAlbum
   * @type {Function}
   */
  const onSubmit = async (e) => {
    console.log(user);
    console.log(url);
    e.preventDefault();
    const formData = new FormData();
    const genre = [];
    genre[0] = albumGenre;
    formData.append("name", albumName);
    formData.append("albumType", albumType);
    formData.append("genre", genre);
    formData.append("image", img);
    if(props.location.state.myAlbum){
      console.log("edit album:",props.location.state.myId)
      try {
        const res = await axios.patch(url.baseURL + "/me/albums/"+props.location.state.myId, formData, {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
       if(res.status===200){
         setMessage("Album edited");
         window.location.replace("/artist");
       }
      } catch (err) {
        console.log(err);
      }
    }else{
      console.log("Create album:")

      try {
        const res = await axios.post(url.baseURL + "/me/albums", formData, {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        if(res.status===200){
        setMessage("Album created");
        window.location.replace("/artist");
      }
      } catch (err) {
        console.log(err);
      }
    }
  };
  const deleteAlbum = async (e) => {
    try {
      const res = await axios.delete(url.baseURL + "/me/albums/"+props.location.state.myId, {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if(res.status===200){
      setMessage("Album deleted");
      window.location.replace("/artist");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="artist-body">
      <div className="full-page container upload-page">
        <Fragment>
          <ArtistSidebar/>
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
           {props.location.state.myAlbum ? 
            <input
              type="submit"
              value="Edit"
              className="btn btn-primary-outline btn-block mt-4"
            ></input> :
            <input
              type="submit"
              value="Create"
              className="btn btn-primary-outline btn-block mt-4"
            ></input>}

            {props.location.state.myAlbum ? 
             <button
            className="btn btn-danger rounded-pill w-100"
            type="button"
           onClick={deleteAlbum}
            >
            Delete Album
           </button> :null }
          </form>
        </Fragment>
      </div>
    </div>
  );
};

export default CreateAlbum;

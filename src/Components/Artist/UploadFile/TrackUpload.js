import React, { Fragment, useState, useContext } from "react";
import axios from "axios";
import Message from "./Message";
import "../UploadFile/UploadFile.css";
import Progress from "./Progress";
import ArtistSidebar from "../SideBar/ArtistSidebar";
import { ConfigContext } from '../../../Context/ConfigContext'
import { ProfileContext } from '../../../Context/ProfileContext'
import { responseHandler } from "../../../ReduxStore/Shared";

/** Functional component for track upload.
 * @class
 * @param props
 */
const TrackUpload = (props) => {
  /**Gets the baseURL from configrations context of the user
   * @memberof TrackUpload
   */
  const url = useContext(ConfigContext);
  /**File object (for track)
   * @memberof TrackUpload
   * @constant file
   */
  /**Set file object function
   * @memberof TrackUpload
   * @constant setFile
   */
  const [file, setFile] = useState("");
  /**File name
   * @memberof TrackUpload
   * @constant fileName
   */
  /**Set file name function
   * @memberof TrackUpload
   * @constant setFilename
   */
  const [fileName, setFilename] = useState("Choose Track");
  /**Track name
   * @memberof TrackUpload
   * @constant trackName
   */
  /**Set track name function
   * @memberof TrackUpload
   * @constant setTrackName
   */
  const [trackName, setTrackName] = useState("Track Name");
  /**Uploaded file indecator
   * @memberof TrackUpload
   * @constant uploadedFile
   */
  /**Set uploaded file indecator function
   * @memberof TrackUpload
   * @constant setAlbumName
   */
  const [uploadedFile, setUploadedFile] = useState({});
  /**Message name
   * @memberof TrackUpload
   * @constant message
   */
  /**Set message name function
   * @memberof TrackUpload
   * @constant setMessage
   */
  const [message, setMessage] = useState("");
  /**Upload percentage
   * @memberof TrackUpload
   * @constant uploadPercentage
   */
  /**Set upload percentage function
   * @memberof TrackUpload
   * @constant setUploadPercentage
   */
  const [uploadPercentage, setUploadPercentage] = useState(0);
  /**File name event listener
   * @memberof TrackUpload
   * @type {Function}
   * @param e - Event
   */
  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };
  /**Track name event listener
   * @memberof TrackUpload
   * @type {Function}
   * @param e - Event
   */
  const onChangeTrackName = (e) => {
    setTrackName(e.target.value);
    console.log(e.target.value);
  };
  /**Submit track Function sends the track to the backend and indecates the percentage
   * @memberof TrackUpload
   * @type {Function}
   * @param e - Event
   */
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", trackName);
    formData.append("trackAudio", file);
    try {
      console.log(props.location.state.myId);
      const res = await axios.post(
        url.baseURL + "/me/albums/" + props.location.state.myId + "/tracks",
        formData,
        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
          onUploadProgress: (progressEvent) => {
            setUploadPercentage(
              parseInt(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              )
            );
          },
        }
      );

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });
      setMessage("File uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
      responseHandler(err.response)
    }
  };
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
                placeholder="Track Name"
                onChange={onChangeTrackName}
              />
            </div>
            <div className="custom-file mb-4 ">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
                onChange={onChange}
              />
              <label className="custom-file-label" htmlFor="customFile">
                {fileName}
              </label>
            </div>
            <Progress percentage={uploadPercentage} />
            <input
              type="submit"
              value="Upload"
              className="btn btn-primary-outline btn-block mt-4"
            ></input>
          </form>
        </Fragment>
      </div>
    </div>
  );
};

export default TrackUpload;

import React, { Fragment, useState } from "react";
import axios from "axios";
import Message from "./Message";
import SideBar from "../../Profile/SideBar";
import "../UploadFile/uploadfile.css";
import Progress from "./Progress";
import ArtistSidebar from '../SideBar/ArtistSidebar'
const TrackUpload = () => {
    const [file, setFile] = useState("");
    const [fileName, setFilename] = useState("Choose Track");
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState("");
    const [uploadPercentage, setUploadPercentage] = useState(0);

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
        // console.log(e.target.files[0]);
    };

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", fileName);
        formData.append("trackAudio", file);
        
        console.log(formData.form);
        try {
            const res = await axios.post("http://138.91.114.14/api/me/albums/5e8ca99d53ea29db54a3942c", formData, {
                headers: {
                    "authorization":localStorage.getItem('token'),
                },
                onUploadProgress: progressEvent => {
                    setUploadPercentage(
                        parseInt(
                            Math.round((progressEvent.loaded * 100) / progressEvent.total)
                        )
                    );
                }
            });

            const { fileName, filePath } = res.data;

            setUploadedFile({ fileName, filePath });
            setMessage("File uploaded");
        } catch (err) {
            if (err.response.status === 500) {
                setMessage("There was a problem with the server");
            }else if(err.response.status === 401) {
                localStorage.removeItem("loginType");
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("token");
                localStorage.removeItem("userID");
                alert("Your session has ended");
            }
            else {
                setMessage(err.response.data.msg);
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

import React, { Component } from "react";
import axios from "axios";
import "./UpgradeArtist.css";
import { ConfigContext } from "../../../Context/ConfigContext";
import { responseHandler } from "../../../ReduxStore/Shared";
/** Class of Upgrade to artist page. It sends a request to upgrade to artist then confirms it.
 * @extends Component
 */
class UpgradeArtist extends Component {
  /**Gets the baseURL from configrations context of the user
   * @memberof UpgradeArtist
   */
  static contextType = ConfigContext;

  state = {
    /**Code entered by the user to upgrade to artist
     * @memberof UpgradeArtist
     * @type {number | string}
     */
    code: "",
  };
  /**Sends request to the backend to send email with the code.
   * @type {Function}
   * @memberof UpgradeArtist
   */
  sendMail = () => {
    axios
      .post(
        this.context.baseURL + "/me/Artist",
        {},
        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        if (res.status === 204) {
          alert("An email has been sent");
        } else {
          alert("Please try again");
        }
      })
      .catch((res) => {
        responseHandler(res);
      });
  };
  /**Sends a request to the backend with the code the user entered to check it.
   * @type {Function}
   * @memberof UpgradeArtist
   */
  checkCode = () => {
    if (this.state.code !== "") {
      let code = this.state.code;
      axios
        .post(
          this.context.baseURL + "/me/upgrade/" + code,
          {},
          {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          if (res.status === 204) {
            alert("Congratulations! You are Artist now.");
          } else if (res.status === 401) {
            responseHandler(res);
          } else {
            alert("The subscription code is invalid.");
          }
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    } else {
      alert("please enter code!");
    }
  };
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  /**Change the state of the code.
   * @type {Function}
   * @memberof UpgradeArtist
   */
  onChange = (e) => this.setState({ code: e.target.value });

  render() {
    {
      document.title = "Spotify";
    }

    return (
      <div id="upgrade-to-artist-body" className="container-fluid">
        <div className="dark">
          <h1 className="bold-header">Be Artist</h1>
          <ul className="">
            <li className="checklist">Upload Tracks</li>
            <li className="checklist">Create Albums</li>
            <li className="checklist">View your statistics</li>
          </ul>
        </div>

        <div className="second-part">
          <div className="box-div">
            <div className="form-group">
              <button
                id="artist-send-mail-button"
                onClick={this.sendMail}
                type="button"
                className="btn btn-success btn-block"
              >
                GET CODE
              </button>
              <label htmlFor="formGroupExampleInput">Subscription code</label>
              <input
                value={this.state.code}
                onChange={this.onChange}
                type="text"
                name="code"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="XXXX"
              />
            </div>
            <button
              id="artist-check-code-button"
              onClick={this.checkCode}
              type="button"
              className="btn btn-success btn-block"
            >
              START MY SPOTIFY ARTIST
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default UpgradeArtist;

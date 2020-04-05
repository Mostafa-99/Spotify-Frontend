import React, { Component } from 'react'
import axios from 'axios'
import './UpgradeArtist.css'
class UpgradeArtist extends Component {
    state={
        code: ''
    }

    sendMail = () => {
        axios.post('')
            .then(res => {
                if(res.status===204){
                    alert("An email has been sent");
                }
                else{
                    alert("Please try again");
                }
            })
            .catch(error => {
                alert(error.response.data.message);
            })
    }

    checkCode = () => {
        if(this.state.code !== ""){
            let code=this.state.code;
            console.log(code);
            axios.post('http://localhost:3000/subscriptionCodes/',{code})
            .then(res => {
                if(res.status===204){
                    alert("Congratulations! You are PREMIUM now.");
                }
                else{
                    alert("The subscription code is invalid.");
                }
            })
            .catch(error => {
                alert(error.response.data.message);
            })
        }
        else{
            alert("please enter code!")
        }
    }

    onChange = (e) => this.setState({ code: e.target.value });
    
    render() {
        {document.title ="Spotify"}

        return (
            <div id="upgrade-to-artist-body" className="container-fluid">
                
                <div className="dark">
                    <h1 className="bold-header">Be Artist</h1>
                    <ul className="">
                        <li  className="checklist">Upload Tracks</li>
                        <li  className="checklist">Create Albums</li>
                        <li  className="checklist">View your statistics</li>
                    </ul>
                </div>

                <div className="second-part">
                    <div className="box-div">
                        <div className="form-group">
                        <button id="artist-send-mail-button" onClick={this.sendMail} type="button" className="btn btn-success btn-block">GET CODE</button>
                            <label htmlFor="formGroupExampleInput">Subscription code</label>
                            <input value={this.state.code} onChange={this.onChange} type="text" name="code" className="form-control" id="formGroupExampleInput" placeholder="XXXX"/>
                        </div>
                        <button id="artist-check-code-button" onClick={this.checkCode} type="button" className="btn btn-success btn-block">START MY SPOTIFY ARTIST</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default UpgradeArtist;
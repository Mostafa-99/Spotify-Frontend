import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
/**
 * Function to make the cover photo in the top of account overview page
 * @class
 */
function ArtistHeading() {
    return(
        <div id="profile-account-heading"className="container jumbotron pb-5">
			<div className="row pb-10">
			    <div className="col-lg-8 head container">
					<h1 className="display-3 font-weight-bold container">Spotify For Artists</h1>
			    </div>

		   </div>
        </div>
    )
}
export default ArtistHeading;
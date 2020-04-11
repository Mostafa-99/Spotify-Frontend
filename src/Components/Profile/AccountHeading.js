import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
/**
 * Function to make the cover photo in the top of account overview page
 * @class
 */
function AccountHeading() {
    return(
        <div id="profile-account-heading"className="container jumbotron">
			<div className="row">
			    <div className="col-lg-6 head">
					<h1 className="display-3 font-weight-bold">Music without limits</h1>
					<p className="header-para">Premium lets you play any song, anytime. You can even listen when you’re offline. No restrictions. No ads.</p>
				<Link to="/premium-code"><button className="btn btn-success bt-lg premium-button">GET PREMIUM</button></Link>
			    </div>
			  <img src="https://www.scdn.co/i/account/overview/iphone-ddd9e69.png" alt="iphone" className="rounded float-right col-lg-4 col-md-12 col-sm-12"></img>

		   </div>
        </div>
    )
}
export default AccountHeading;
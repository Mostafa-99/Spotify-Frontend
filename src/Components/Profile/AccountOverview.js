import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Profile.css';
/**
 * Function that make the account overview page that view email and date of birth
 * @class
 * @param {JSON} props object that contains logged in person info
 */
function AccountOverview(props) {

    return(
        <div id="account-overview" className="col-lg-9 content-accountoverview">
			    	<h1 className="overview">Account overview</h1>
			    	<div className="profile">
			    		<h3>Profile</h3>
			    		<br></br>
			    		<table className="col-lg-11 col-md-11 col-sm-11">
						  <tr>
							<th>Email</th> 
							<td>{props.info.email}</td>
						  </tr>
						  <tr>
						    <th>Date of birth</th>
							<td>{props.info.dateOfBirth}</td>

						  </tr>
					    </table>
			    	</div>
                    <Link to="/edit-profile"><button className="btn btn-outline-secondary account-overview-buttons">EDIT PROFILE</button></Link>
					<div className="plan">
						<h3 className="yourplan">Your plan</h3>
						<br></br>
						<div className="free">
							<h3 className="spotifyfree">Spotify Free</h3>
						</div>
						<div className="card">
							<p className="playp p">Play music in shuffle mode only, with ads.</p>
							<p className="playp f">Free</p>
						</div>
					</div>
				<Link to="/premium-code"><button className="btn btn-outline-secondary account-overview-buttons">JOIN PREMIUM</button></Link>
		</div>
    
    )
}
export default AccountOverview;
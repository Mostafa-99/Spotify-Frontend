import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import '../../Profile/Profile.css'
/**
 * Artist Sidebar page
 * @class
 * @param {string} props image of the artist
 */
function ArtistSidebar(props) {
    return(
        <div id="profile-sidebar" className="col-lg-3 sidebar">
            <head>	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </head>
            <div>
                    <img  src={props.img} className="rounded-circle" alt="Profile" ></img>
					<ul className="sidelist">
                        <li className="list first"><span className="fa fa-home icon"></span> Overview </li>
						<li className="list"><i className="fa fa-pencil icon"></i> Manage Profile </li>
                        <li className="list"><i className="fa fa-users icon"></i> Audience </li>
                        <Link to="/artist"><li className="list"><i className="fa fa-music icon"></i> My Music </li></Link>
					</ul>
			    </div>
        </div>        
    )
}
export default ArtistSidebar;
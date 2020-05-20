import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
//import '../../Profile/Profile.css'
import './ArtistSidebar.css'
import { ConfigContext } from "../../../Context/ConfigContext";
import { ProfileContext } from "../../../Context/ProfileContext";
/**
 * Artist Sidebar page
 * @class
 * @param {string} props image of the artist
 */
function ArtistSidebar(props) {
    return(
        <ProfileContext.Consumer>{(profile) => (
            <ConfigContext.Consumer>{(config) => {
              const {user}= profile
              return(
        <div id="profile-sidebar" className="col-lg-3 sidebar">
            <head>	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </head>
            <div>
                    <img  src={user.images} className="rounded-circle" alt="Profile" ></img>
                    
					<ul className="sidelist">
                    <Link to="/artist/overview">  <li className="list first"><span className="fa fa-home icon"></span> Overview </li></Link>
                        <Link to="/artist"><li className="list"><i className="fa fa-music icon"></i> My Music </li></Link>
                        <Link to="/artist/manage-profile"><li className="list"><i className="fa fa-pencil icon"></i> Manage Profile </li></Link>

					</ul>
			    </div>
        </div>    
          )
        }}
        </ConfigContext.Consumer>
        )}</ProfileContext.Consumer>    
    )
}
export default ArtistSidebar;
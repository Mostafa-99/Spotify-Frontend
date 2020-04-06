import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './SideBar.css'
import {Link} from 'react-router-dom';
function SideBar(props) {
    return(
        <div id="profile-sidebar" className="col-lg-3 sidebar">
            <head>	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </head>
            <div>
                    <img  src={props.img} className="rounded-circle" alt="Profile" ></img>
					<ul className="sidelist">
                        <Link to="/account-overview"><li className="list first"><span className="fa fa-home icon"></span> Account overview </li></Link>
                        <Link to="/edit-profile" ><li className="list"><i className="fa fa-pencil icon"></i>  Edit profile</li></Link>
                        <Link to="/change-password" ><li className="list"><i className="fa fa-lock icon"></i>Change password</li></Link>
						<Link to="/notification-settings" ><li className="list"><i className="fa fa-bell-o icon"></i>Notifications settings</li></Link>
					</ul>
			    </div>
        </div>        
    )
}
export default SideBar;
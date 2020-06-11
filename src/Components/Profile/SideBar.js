import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
/** Class of Sidebar account settings.
 * @extends Component
 */
class SideBar extends Component {
    /**
     * @property {Function} componentDidMount checks the user login type is facebook or not to show or hide the change password icon
     */
    componentDidMount()
    {
        if(localStorage.getItem("loginType")=="fb")
        {
            const changePassword = document.querySelector('.change-password');
            changePassword.classList.toggle('hide');
        }
    }
    render()
    {
        return(
            <div id="profile-sidebar" className="col-lg-3 sidebar">
                <head>	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                </head>
                <div>
                        <img  src={this.props.img} className="rounded-circle" alt="Profile" ></img>
                        <ul className="sidelist">
                            <Link to="/account-overview"><li className="list first"><span className="fa fa-home icon"></span> Account overview </li></Link>
                            <Link to="/edit-profile" ><li className="list"><i className="fa fa-pencil icon"></i>  Edit profile</li></Link>
                            <div className="change-password"><Link to="/change-password" ><li className="list"><i className="fa fa-lock icon"></i>Change password</li></Link></div>
                            <div className="disabled"><li className="list"><i className="fa fa-bell-o icon"></i>Notifications settings</li></div>
                        </ul>
                    </div>
            </div>        
        )
    }
}
export default SideBar;
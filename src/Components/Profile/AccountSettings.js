import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';
import AccountOverview from './AccountOverview';
import AccountHeading from './AccountHeading';
import axios from 'axios'
import './Profile.css';

class AccountSettings extends Component {
    constructor(){
        super()
        this.state = {
            user:{
                dateOfBirth:"",
                email:"",
                image:"",
            },
        }
    }

    componentDidMount(){
        axios.get("http://138.91.114.14/api/me", {
            headers: {
                'authorization': "Bearer "+localStorage.getItem("token"),
            },
        })
            .then(res => {
                console.log(res)
                if(res.status===200)
                {
                    this.setState(prevState => (
                        {
                        user: {                   
                            ...prevState.user,    
                            dateOfBirth: res.data.dateOfBirth,
                            email: res.data.email,
                            image: res.data.images    
                        }
                    }))
                }
                else if(res.status === 401)
                {
                    localStorage.removeItem("loginType");
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("token");
                    localStorage.removeItem("userID");
                    console.log("fail")
                }
            })
    }

    render()
    {
        {document.title ="Account overview - Spotify"}

        return(
            <div className="bg-dark-clr">

                <AccountHeading />
                <div className="container settings">
                    <div className="row">
                        <SideBar img={this.state.user.image}/>
                        <AccountOverview info={this.state.user}/>
                    </div>
                </div>

            </div>
        )
    }
}
export default AccountSettings;
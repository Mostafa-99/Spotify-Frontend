import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';
import AccountOverview from './AccountOverview';
import AccountHeading from './AccountHeading';
import axios from 'axios'
class AccountSettings extends Component {
    constructor(){
        super()
        this.state = {
            user:{}
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3000/users/1/')
            .then(res => {
              this.setState({user: res.data})
            })
    }

    render()
    {
        return(
            <div>
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
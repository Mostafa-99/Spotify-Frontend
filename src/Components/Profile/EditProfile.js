import React ,{ Component }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';
import axios from 'axios'
import {Link} from 'react-router-dom';
import './Profile.css';

class EditProfile extends Component {
    constructor() {
        super()
        this.state = {
          user:{},
          messshow: false
        }
        this.editProfileHandle=this.editProfileHandle.bind(this)
    }

    componentDidMount(){
        this.setState(()=> ({ messShow: false}))
        axios.get('http://localhost:3000/users/1/')
            .then(res => {
              this.setState({user: res.data})
            })
    }

    editProfileHandle(id,phone,Country){
        this.setState(prevState => ({
          user: {                   
              ...prevState.user,    
              pno: phone,
              country: Country       
          },
          messshow: true
      }))
    };

    componentDidUpdate(){
        axios.put('http://localhost:3000/users/'+this.state.user.id+'/', this.state.user)   
        .then(res => {console.log(res.data)})
        console.log(this.state)
    }

    render()
    {
    return(
        <div id="edit-profile"className="container editProfile">
			<div className="row">
                <SideBar img={this.state.user.image}/>
                <div className="col-lg-9 edit-section">
                    <div className="edit-div">
                        { this.state.messshow && <div class="alert alert-success">
                        <p>Profile saved</p>
                        </div> }
                        <h1 className="page-header">Edit profile</h1>
                        <div className="edit-info">
                            <div className="email-info">
                                <label className="labels">Email</label>
                                <p className="user-info">{this.state.user.email}</p>
                            </div>
                            <div className="gender-info">
                                <label className="labels">Gender</label>
                                <p className="user-info">{this.state.user.gender}</p>
                            </div>
                            <div className="dob-info">
                                <label className="labels">Date of birth</label>
                                <p className="user-info">{this.state.user.dateOfBirth}</p>
                            </div>
                            <div className="country-info">
                                <label className="labels">Country</label>
                                <select  ref="country" required="" className="combo-box" defaultValue={this.state.user.countrry}>
                                    <option value="UNDECLARED" selected disabled hidden>Choose your country</option>
                                    <option value="EG" >Egypt</option>
                                    <option value="SV">El Salvador</option>
                                    <option value="GQ">Equatorial Guinea</option>
                                    <option value="ER">Eritrea</option>
                                    <option value="EE">Estonia</option>
                                </select>
                            </div>
                            <div className="pnoInfo">
                                <label className="labels">Mobile phone number</label>
                                <input ref="phone" className="phone-text-box" defaultValue={this.state.user.pno}></input>
                            </div>
                            <div className="buttons">
                                <Link to="/accountoverview" className="cancel-button">CANCEL</Link>
                                <button onClick={()=>{this.editProfileHandle(this.state.id,this.refs.phone.value,this.refs.country.value)}}className="btn-sm btn btn-success save-profile-button">SAVE PROFILE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default EditProfile;
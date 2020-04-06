import React ,{ Component }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';
import axios from 'axios'
import {Link} from 'react-router-dom';
import './Profile.css';
import Footer from '../Footer/Footer.js'
import Navbar from '../Navigation/Navbar.js'
var today;
var day;
var month;
var year;
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
                today = new Date(this.state.user.dateOfBirth);
                day = today.getDate();
                month = today.getMonth()+1; 
                year = today.getFullYear();
                console.log(day);
                console.log(month);
                console.log(year);
                document.querySelector('.year').value=year;
                document.querySelector('.month').value=month;
                document.querySelector('.day').value=day;
            })
            
    }

    editProfileHandle(id,userPhone,userYear,userMonth,userDay,userGender){
        this.setState(prevState => ({
          user: {                   
              ...prevState.user,    
              pno: userPhone,
              dateOfBirth: userYear+'-'+userMonth+'-'+userDay,
              gender: userGender
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
        {document.title ="Edit profile - Spotify"}

    return(
        <div className="bg-dark-clr">
            
        
			<Navbar/>
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
                                <select  ref="gender" required="" className="combo-box">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="birthday-info">
                                <label className="labels">Date of birth</label>
                                <div className="birthday-inputs">
                                    <select  ref="month" required=""  className="combo-box month">
                                        <option value="1">01</option>
                                        <option value="2">02</option>
                                        <option value="3">03</option>
                                        <option value="4">04</option>
                                        <option value="5">05</option>
                                        <option value="6">06</option>
                                        <option value="7">07</option>
                                        <option value="8">08</option>
                                        <option value="9">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                    <select  ref="day" required="" className="combo-box day">
                                        <option value="1">01</option>
                                        <option value="2">02</option>
                                        <option value="3">03</option>
                                        <option value="4">04</option>
                                        <option value="5">05</option>
                                        <option value="6">06</option>
                                        <option value="7">07</option>
                                        <option value="8">08</option>
                                        <option value="9">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">31</option>
                                        <option value="31">31</option>
                                    </select>
                                    <select  ref="year" required="" className="combo-box year">
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                        <option value="2012">2012</option>
                                        <option value="2011">2011</option>
                                        <option value="2010">2010</option>
                                        <option value="2009">2009</option>
                                        <option value="2008">2008</option>
                                        <option value="2007">2007</option>
                                        <option value="2006">2006</option>
                                        <option value="2005">2005</option>
                                        <option value="2004">2004</option>
                                        <option value="2003">2003</option>
                                        <option value="2002">2002</option>
                                        <option value="2001">2001</option>
                                        <option value="2000">2000</option>
                                        <option value="1999">1999</option>
                                        <option value="1998">1998</option>
                                        <option value="1997">1997</option>
                                        <option value="1996">1996</option>
                                        <option value="1995">1995</option>
                                        <option value="1994">1994</option>
                                        <option value="1993">1993</option>
                                        <option value="1992">1992</option>
                                        <option value="1991">1991</option>
                                        <option value="1990">1990</option>
                                        <option value="1989">1989</option>
                                        <option value="1988">1988</option>
                                        <option value="1987">1987</option>
                                        <option value="1986">1986</option>
                                        <option value="1985">1985</option>
                                        <option value="1984">1984</option>
                                        <option value="1983">1983</option>
                                        <option value="1982">1982</option>
                                        <option value="1981">1981</option>
                                        <option value="1980">1980</option>
                                        <option value="1979">1979</option>
                                        <option value="1978">1978</option>
                                        <option value="1977">1977</option>
                                        <option value="1976">1976</option>
                                        <option value="1975">1975</option>
                                        <option value="1974">1974</option>
                                        <option value="1973">1973</option>
                                        <option value="1972">1972</option>
                                        <option value="1971">1971</option>
                                        <option value="1970">1970</option>
                                        <option value="1969">1969</option>
                                        <option value="1968">1968</option>
                                        <option value="1967">1967</option>
                                        <option value="1966">1966</option>
                                        <option value="1965">1965</option>
                                        <option value="1964">1964</option>
                                        <option value="1963">1963</option>
                                        <option value="1962">1962</option>
                                        <option value="1961">1961</option>
                                        <option value="1960">1960</option>
                                        <option value="1959">1959</option>
                                        <option value="1958">1958</option>
                                        <option value="1957">1957</option>
                                        <option value="1956">1956</option>
                                        <option value="1955">1955</option>
                                        <option value="1954">1954</option>
                                        <option value="1953">1953</option>
                                        <option value="1952">1952</option>
                                        <option value="1951">1951</option>
                                        <option value="1950">1950</option>
                                        <option value="1949">1949</option>
                                        <option value="1948">1948</option>
                                        <option value="1947">1947</option>
                                        <option value="1946">1946</option>
                                        <option value="1945">1945</option>
                                        <option value="1944">1944</option>
                                        <option value="1943">1943</option>
                                        <option value="1942">1942</option>
                                        <option value="1941">1941</option>
                                        <option value="1940">1940</option>
                                    </select>
                                </div>
                            </div>
                            <div className="pnoInfo">
                                <label className="labels">Mobile phone number</label>
                                <input ref="phone" className="phone-text-box" defaultValue={this.state.user.pno} readOnly></input>
                            </div>
                            <div className="buttons">
                                <Link to="/account-overview" className="cancel-button">CANCEL</Link>
                                <button onClick={()=>{this.editProfileHandle(this.state.id,this.refs.phone.value,this.refs.year.value,this.refs.month.value,this.refs.day.value,this.refs.gender.value)}}className="btn-sm btn btn-success save-profile-button">SAVE PROFILE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <Footer/>
        </div>
    )
    }
}

export default EditProfile;
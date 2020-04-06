import React, {createContext, Component} from 'react'
import {ConfigContext} from '../Context/ConfigContext'
import axios from 'axios'

export const ProfileContext= createContext();

class ProfileContextProvider extends Component {
    static contextType=ConfigContext;
    state={
        userType:'artist',
        user: {},
        status:"connected"
    }

    componentDidMount =()=>{
        
          let show=localStorage.getItem("isLoggedIn");
          if(show==="true")
          {
            axios.get(this.context.baseURL+'/users/1/')
            .then(res => {
              this.setState({user: res.data})
            })
          } 
    }

    componentDidUpdate=()=>{

          let show=localStorage.getItem("isLoggedIn");
          if(show==="true" && this.state.status==="not connected")
          {
            this.setState({status:"connected"})
            axios.get(this.context.baseURL+'/users/1/')
            .then(res => {
              this.setState({user: res.data})
            })
          }
    }

    render(){
        return(

            <ProfileContext.Provider value={{...this.state}}>
                {this.props.children}
            </ProfileContext.Provider>
        ); 
        
    }

}

export default ProfileContextProvider;
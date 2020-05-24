import React, {createContext, Component} from 'react'
import {ConfigContext} from '../Context/ConfigContext'
import axios from 'axios'

export const ProfileContext= createContext();

/**
 * Profile Context Provider
 * @extends Component
 */
class ProfileContextProvider extends Component {
    static contextType=ConfigContext;
    state={
        user: {},
        status:"not connected"
    }

    /**
     * Profile Context Provider Mount state Intialization
     * 
     */
    componentDidMount =()=>{
        
        
          let show=localStorage.getItem("isLoggedIn");
          

          if(show==="true")
          {
              

             //GET 
            axios.get(this.context.baseURL+'/me',{headers:{'authorization': "Bearer "+ localStorage.getItem("token"),}
            }).then(res => {
                if(res.status===200)
                {
                    this.setState({user: res.data})
                    localStorage.setItem("userType",res.data.role);
                      
                    
                }else
            alert(res.status)
        
    }).catch(err => {
                alert(err)
            })
          } 
    }

    /**
     * Profile Context Provider onchange update state.
     * 
     */
    componentDidUpdate=()=>{

          let show=localStorage.getItem("isLoggedIn");
          
          if(show==="true" && this.state.status==="not connected")
          {

              //GET 2 tmaaaaaam
            axios.get(this.context.baseURL+'/me',{headers:{'authorization': "Bearer "+ localStorage.getItem("token"),}
                }).then(res => {
                    if(res.status===200)
                    {
                        this.setState({user: res.data})
                        localStorage.setItem("userType",res.data.role);
                       
                    }else
                alert(res.status)
           
        }).catch(err => {
                    alert(err)
                })

            this.setState({status:'connected'})
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
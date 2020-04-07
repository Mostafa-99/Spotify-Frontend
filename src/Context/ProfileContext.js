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
              
              console.log(this.context.baseURL)
              const AuthStr=localStorage.getItem("token");
            axios.get(this.context.baseURL+'/me',
            {
                headers:{'authorization': "Bearer "+ AuthStr, }
            })
            .then(res => {
              this.setState({user: res.data})
              console.log("Response: "+res.data);
              
            }).catch(err => {
                alert(err.data.message)
            }
  
            )
            if(this.state.user!==null)
            {   
                let usercopy=JSON.parse(JSON.stringify(this.state.user))
                console.log("User: "+this.state.user);
                //usercopy['image']=this.state.user.images[0];
                //if(usercopy.image==="")
                //{
                    usercopy['image']='https://www.pngkey.com/png/full/230-2301779_best-classified-apps-default-user-profile.png'
                    this.setState({user:usercopy})
               // }
            }
          } 
          console.log("Context Saved ON MOUNT User: "+this.state.user);
    }

    componentDidUpdate=()=>{

          let show=localStorage.getItem("isLoggedIn");
          if(show==="true" && this.state.status==="not connected")
          {
            this.setState({status:"connected"})
            console.log(this.context.baseURL)
            const AuthStr=localStorage.getItem("token");
          axios.get(this.context.baseURL+'/me',
          {
              headers:{'authorization': "Bearer "+ AuthStr }
          })
          .then(res => {
              console.log("Response: "+res);
            this.setState({user: res.data})
          })
          .catch(err => {
              alert(err.data.message)
          }

          )
          if(this.state.user!==null)
          {   
              let usercopy=JSON.parse(JSON.stringify(this.state.user))
              //usercopy['image']=this.user.image[0];
             // if(this.state.usercopy.image==="")
              //{
                console.log("User: "+this.state.user);
                  usercopy['image']='https://www.pngkey.com/png/full/230-2301779_best-classified-apps-default-user-profile.png'
                  this.setState({user:usercopy})
             // }
          }
          }
          console.log("Context Saved Update User: "+this.state.user);

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
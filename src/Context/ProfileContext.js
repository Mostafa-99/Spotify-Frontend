import React, {createContext, Component} from 'react'
import {ConfigContext} from '../Context/ConfigContext'
import axios from 'axios'

export const ProfileContext= createContext();

class ProfileContextProvider extends Component {
    static contextType=ConfigContext;
    state={
        userType:'artist',
        user: {},
        status:"not connected"
    }

    componentDidMount =()=>{
        
          let show=localStorage.getItem("isLoggedIn");
          if(show==="true")
          {
              
              console.log(this.context.baseURL)
            axios.get(this.context.baseURL+'/me',{
                headers:{
                    'authorization': "Bearer "+ localStorage.getItem("token"),
                }
            })
            .then(res => {
              this.setState({user: res.data})
              console.log("Response: "+res.data);
              
            }).catch(err => {
                alert(err)
            }
  
            )
            console.log("User: "+this.state.user);
            if(this.state.user!==null)
            {   
                let usercopy=JSON.parse(JSON.stringify(this.state.user))
                console.log("User: "+this.state.user);
                
                console.log("User: "+this.state.user[0]);
                //usercopy['image']=this.state.user.images[0];
                //if(usercopy.image==="")
                //{
                    usercopy['image']='https://www.pngkey.com/png/full/230-2301779_best-classified-apps-default-user-profile.png'
                    this.setState({user:usercopy})
                    console.log("UserCopy: "+usercopy);
               // }
            }
          } 
          console.log("Context Saved ON MOUNT User: "+this.state.user);
    }

    componentDidUpdate=()=>{

          let show=localStorage.getItem("isLoggedIn");
          console.log("User1: "+this.state.user);
          if(show==="true" && this.state.status==="not connected")
          {
            console.log("User2: "+this.state.user);
            this.setState({status:"connected"})
            console.log(this.context.baseURL)
          axios.get(this.context.baseURL+'/me',{
            headers:{
                'authorization': "Bearer "+ localStorage.getItem("token"),
            }
        })
          .then(res => {
              console.log("Response: "+res);
              console.log("Response data: "+res.data);
            this.setState({user: res.data})
            console.log("User3: "+this.state.user);
          })
          .catch(err => {
            console.log("Error: "+err);
            console.log("Error Response data: "+err.response);
            console.log("User4: "+this.state.user);
          }

          )
          console.log("User5: "+this.state.user);
          if(this.state.user!==null)
          {   
              let usercopy=JSON.parse(JSON.stringify(this.state.user))
              
              //usercopy['image']=this.user.image[0];
             // if(this.state.usercopy.image==="")
              //{
                console.log("User6: "+this.state.user);
                console.log("User: "+this.state.user[0]);
                  usercopy['image']='https://www.pngkey.com/png/full/230-2301779_best-classified-apps-default-user-profile.png'
                  this.setState({user:usercopy})
                  console.log("UserCopy: "+usercopy);
             // }
          }
          }
          console.log("User8: "+this.state.user);

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
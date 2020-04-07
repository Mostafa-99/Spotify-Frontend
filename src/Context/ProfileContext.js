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
          console.log(this.context.baseURL+" "+ localStorage.getItem("isLoggedIn"))

          if(show==="true")
          {
              console.log(this.context.baseURL+" "+ localStorage.getItem("token"))

             //GET 
            axios.get(this.context.baseURL+'/me',{headers:{'authorization': "Bearer "+ localStorage.getItem("token"),}
            }).then(res => {
                if(res.status===200)
                {
                    this.setState({user: res.data})
                    console.log(this.state.user)
                }else
            alert(res.status)
        console.log(res.data)}).catch(err => {
                alert(err.response)
            })

            // if(this.state.user!==null)
            // {   
            //     let usercopy=JSON.parse(JSON.stringify(this.state.user))
            //     console.log("User: "+this.state.user);
                
            //     console.log("User: "+this.state.user[0]);
            //     //usercopy['image']=this.state.user.images[0];
            //     //if(usercopy.image==="")
            //     //{
            //         usercopy['image']='https://www.pngkey.com/png/full/230-2301779_best-classified-apps-default-user-profile.png'
            //         this.setState({user:usercopy})
            //         console.log("UserCopy: "+usercopy);
            //    // }
            // }
          } 
    }

    componentDidUpdate=()=>{

          let show=localStorage.getItem("isLoggedIn");
          console.log("User1: "+this.state.user);
          if(show==="true" && this.state.status==="not connected")
          {
            console.log(this.context.baseURL+" "+ localStorage.getItem("token"))

              //GET 2 tmaaaaaam
            axios.get(this.context.baseURL+'/me',{headers:{'authorization': "Bearer "+ localStorage.getItem("token"),}
                }).then(res => {
                    if(res.status===200)
                    {
                        this.setState({user: res.data})
                        console.log(this.state.user)
                    }else
                alert(res.status)
            console.log(res.data)}).catch(err => {
                    alert(err.response)
                })

            this.setState({status:'connected'})
            // if(this.state.user!==null)
            // {   
            //     let usercopy=JSON.parse(JSON.stringify(this.state.user))
            //     console.log("User: "+this.state.user);
                
            //     console.log("User: "+this.state.user[0]);
            //     //usercopy['image']=this.state.user.images[0];
            //     //if(usercopy.image==="")
            //     //{
            //         usercopy['image']='https://www.pngkey.com/png/full/230-2301779_best-classified-apps-default-user-profile.png'
            //         this.setState({user:usercopy})
            //         console.log("UserCopy: "+usercopy);
            //    // }
            // }
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
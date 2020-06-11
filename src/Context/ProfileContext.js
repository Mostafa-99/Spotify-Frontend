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
        userType:'artist',
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
                    //console.log(this.state.user)
                }else
            alert(res.status)
        //console.log(res.data)
    }).catch(err => {
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
                       // console.log(this.state.user)
                    }else
                alert(res.status)
            //console.log(res.data)
        }).catch(err => {
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
import React,{ Component} from "react"
import axios from 'axios'
import { ConfigContext } from '../../../../../Context/ConfigContext'
import { responseHandler } from "../../../../../ReduxStore/Shared"
import Pagination from "./Pagination"
import './RecentActivity.css'

/**
 * Recent Activity : shows the recent activity of the user and its time 
 * @extends Component
 */

class RecentActivity extends Component{
 static contextType=ConfigContext;
constructor(){
    super()
    this.state = {
         /**
         * Recent Activity Items 
         * @type {Array}
         */
        recents:[],
        /**
         * Total Number of results that I get from Request
         * @type {Number}
         */
        totalResults:0,
         /**
         * Current Paging Number that I am in now 
         * @type {Number}
         */
        currentpage:1,

    }
}
componentDidMount(){
    
    axios.get(this.context.baseURL +'/me/notifications',
    {
       headers:{'authorization':"Bearer "+localStorage.getItem('token')},
       query:{
           limit:6,
       }
       }
    ) 
      .then(res => {
        if (res.status===200)
        {
                this.setState({
                    recents: res.data.results.items.map( recents => ({
                        /**
                         * @type {string}
                         */
                      id:recents.data.id,
                        /**
                         * Time of the activity 
                         * @type {time}
                         */
                       time:recents.time,
                        /**
                         * recent activity description 
                         */
                      description: recents.notification.body,
                        /**
                         * link to image of the notification item
                         * @type {link}
                         */
                     image:recents.images[0]
                    })),
                   totalResults: res.data.results.total
                })
            }
                else if(res.status===401){
                    responseHandler(res);
                }
            })  
            .catch(res=>{
                console.log(res);
            } )

}
toggledropdown=()=> {
const element=document.getElementById("dropdown-wrap")
element.classList.toggle("show");
}

nextpage=(pagenumber)=>{ 
    axios.get(this.context.baseURL +'/me/notifications',
        {
        headers:{'authorization':"Bearer "+localStorage.getItem('token')},
        query:{
            limit:6,
            page:this.state.pagenumber,
        }
        }
     )
.then(res => {
    if (res.status===200)
    {
        console.log(res)
    this.setState({
        recents: res.data.items.map( recents => ({
            /**
             * @type {string}
             */
            id:recents.data.id,
            /**
             * Time of the activity 
             * @type {time}
             */
            time:recents.time,
            /**
             * @type {string}
             * recent activity description 
             */
            description: recents.notification.body,
            /**
             * link to image of the notification item
             * @type {link}
             */
            image:recents.images[0]
        })),
        totalResults: res.total,
        currentpage:pagenumber,
    })
}
  else if(res.status===401){
    responseHandler(res);
}
else{
    alert("error");
}
}) 
 

}



render(){
    /*
    * 
    * @type {Number}
    * To count the total number of Pages needed  passed to the Pagination Componen
     */
    let numberPages = Math.ceil(this.state.totalResults / 5);



    return(
    <div class="wrapper" id="recent-activity-wrap">
	<div class="notification-wrap">

		<div class="notification-icon " onClick={()=> this.toggledropdown()}>
                    <i class="fa fa-history" aria-hidden="true"></i>
		</div>

		<div class="dropdown hide" id="dropdown-wrap">
        {this.state.recents.map( recents => (
			<div class="notify-item">
				<div class="notify-img">
					<img src={recents.image} alt="profile-pic"></img>
				</div>
				<div class="notify-info">
					<p>{recents.description}</p>
                    <span class="notify-time">{recents.time}</span>
				</div>
			</div>
        ))}
        {this.state.totalResults>4? <Pagination pages={numberPages} nextpage={this.nextpage} currentPage={this.state.currentpage}/> : ''}
           {console.log(this.state.currentpage)}
           {console.log(numberPages)}
            </div>
            </div>
</div>
)

}
}
export default RecentActivity;
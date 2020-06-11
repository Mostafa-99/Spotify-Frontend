import React,{ Component} from "react"
import axios from 'axios'
import { ConfigContext } from '../../../../../Context/ConfigContext'
import { responseHandler } from "../../../../../ReduxStore/Shared"
import Pagination from "./Pagination"
import './RecentActivity.css'

/**
 * Recent Activity : shows the recent activity of the user that  is the history of notifications
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
        currentPage:1,
         /**
         * state of the current page 
         * @type {bool}
         */
        Loaded:false,

    }
}
  /**
   * life cycle react method that handles fetching of  notifications' history from log
   * @memberof RecentActivity
   * @type {Method}
   * 
   */
componentDidMount(){
    
    axios.get(this.context.baseURL +'/me/notifications?limit=4',
    {
       headers:{'authorization':"Bearer "+localStorage.getItem('token')},

       }
    ) 
      .then(res => {
          console.log(res)
        if (res.status===200)
        {
                this.setState({
                    recents: res.data.data.results.items.map( recents => ({
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
                     image:recents.data.images[0]
                    })),
                   totalResults: res.data.data.results.total,
                   Loaded:true,
                })
            }
                else if(res.status===401){
                    responseHandler(res);
                }
            })  
            .catch(res=>{
                console.log(res); }) 

}
  /**
   * function that handles that dropdown list of history appears and disappers on click 
   * @memberof RecentActivity
   * @type {Function}
   * 
   */
toggledropdown=()=> {
const element=document.getElementById("dropdown-wrap")
element.classList.toggle("show");
}

  /** function that is resonsible of handling the paging object
   * @memberof RecentActivity
   * @type {Function}
   * @param pagenumber- number of page that i will fetch next
   */
nextpage=(pagenumber)=>{ 
    this.setState({Loaded:false})
    axios.get(this.context.baseURL +'/me/notifications?limit=4&page='+pagenumber,
        {
        headers:{'authorization':"Bearer "+localStorage.getItem('token')}
        }
     )
     .then(res => {
        console.log(res)
      if (res.status===200)
      {       
              this.setState({
                  recents: res.data.data.results.items.map( recents => ({
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
                   image:recents.data.images
                  })),
                  currentPage:pagenumber,
                 totalResults: res.data.data.results.total,
                 Loaded:true
              })
          }
              else if(res.status===401){
                  responseHandler(res);
              }
          })  
          .catch(res=>{
              console.log(res); }) 

 

}



render(){
    /*
    * 
    * @type {Number}
    * To count the total number of Pages needed  passed to the Pagination Componen
     */
    let numberPages = Math.floor(this.state.totalResults /4);

    return(
    <div class="wrapper" id="recent-activity-wrap">
	<div class="notification-wrap">

		<div class="notification-icon " onClick={()=> this.toggledropdown()}>
                    <i class="fa fa-history" aria-hidden="true"></i>
		</div>

		<div class="dropdown hide" id="dropdown-wrap">
       {this.state.Loaded?
       <div> 
       {this.state.recents.map( recents => (
			<div class="notify-item">
				<div class="notify-img">
					<img src={recents.image} alt="profile-pic"
                    onError={e => {e.target.src = 'https://image.shutterstock.com/image-vector/social-member-vector-icon-person-260nw-1139787308.jpg';}}
                    ></img>
				</div>
				<div class="notify-info">
					<p>{recents.description}</p>
                    <span class="notify-time">{recents.time}</span>
				</div>
			</div>
        ))} 
        {this.state.totalResults>4? <Pagination pages={numberPages} nextpage={this.nextpage} currentPage={this.state.currentPage}/> : ''}
        </div>:
        <div className="container w-50 pb-5 align-middle align-self-center d-flex justify-content-center">
                                <div class="spinner-border text-success" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                             }
      
            </div>
            </div>
</div>
)

}
}
export default RecentActivity;
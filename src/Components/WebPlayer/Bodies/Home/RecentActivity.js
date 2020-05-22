import React,{ Component} from "react"
import './RecentActivity.css'
import axios from 'axios'
import { ConfigContext } from '../../../../Context/ConfigContext'
import Pagination from "./Pagination";

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
         * @type {Object}
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
    
    axios.get("http://my-json-server.typicode.com/youmnakhaled/Fakedata/Recents",
    {
       headers:{'authorization':"Bearer "+localStorage.getItem('token')},
       query:{
           limit:6,
       }
       }
    )            .then(res => {
                this.setState({
                    recents: res.data.data.map( recents => ({
                        /**
                         * @type {string}
                         */
                        id:recents.id,
                        /**
                         * Time of the activity 
                         */
                        time:recents.time,
                        /**
                         * recent activity description 
                         */
                        description: recents.description
                    })),
                    totalResults: res.total
                })
            })  

}
toggledropdown=()=> {
const element=document.getElementById("dropdown-wrap")
element.classList.toggle("show");
}

nextpage=(pagenumber)=>{ 
     axios.get("http://my-json-server.typicode.com/youmnakhaled/Fakedata/Recents",
     {
        headers:{'authorization':"Bearer "+localStorage.getItem('token')},
        query:{
            limit:6,
            page:this.state.pagenumber,
        }
        }
     )
.then(res => {
    this.setState({
        recents: res.data.data.map( recents => ({
            /**
             * @type {string}
             */
            id:recents.id,
            /**
             * Time of the activity 
             */
            time:recents.time,
            /**
             * recent activity description 
             */
            description: recents.description
        })),
        currentpage:pagenumber,
        totalResults: res.total
    })
})  

}



render(){
    {/*
    * 
    * @type {Number}
    * To count the total number of Pages needed  passed to the Pagination Componen
     */}
    let numberPages = Math.floor(this.state.totalResults /6 );

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
					<img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="profile-pic"></img>
				</div>
				<div class="notify-info">
					<p>{recents.description}</p>
                    <span class="notify-time">{recents.time}</span>
				</div>
			</div>
        ))}
        {this.state.totalResults>6? <Pagination pages={numberPages} nextpage={this.nextpage} currentpage={this.state.currentpage}/> : ''}
            </div>
            </div>
</div>
)
}
}
export default RecentActivity;
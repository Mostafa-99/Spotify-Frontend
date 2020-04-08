import React,{ Component} from "react"
import './RecentActivity.css'
import axios from 'axios'

class RecentActivity extends Component{
constructor(){
    super()
    this.state = {
        recents:[],

    }
}
componentDidMount(){
    axios.get("http://my-json-server.typicode.com/youmnakhaled/Fakedata/Recents")
            .then(res => {
                this.setState({
                    recents: res.data.map( recents => ({
                        id:recents.id,
                        time:recents.time,
                        description: recents.description
                    }))
                })
            })  

}
toggledropdown=()=> {
const element=document.getElementById("dropdown-wrap")
element.classList.toggle("show");
}




render(){
    return(
    <div class="wrapper" id="recent-activity-wrap">
	<div class="notification-wrap">

		<div class="notification-icon" onClick={()=> this.toggledropdown()}>
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

            </div>
            </div>
</div>
)
}
}
export default RecentActivity;
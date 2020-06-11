import React,{Component} from 'react';
import './SideBar.css';
import './CreatePlaylist.css'

/**
 * Create Playlist modal : opens to shows a modal to write in the name of the new playlist to send to back end 
 * Not done yet 
 * @extends Component
 */

class CreatePlaylist extends Component {

    constructor() {
            
         super()
        this.state = {
            /**
         *playlist created name
          @type {string}
         @memberof CreatePlaylist
         */
            playlistname:""
           
        }
     
        this.onChange = this.onChange.bind(this)
        // this.handleclick= this.handleclick.bind(this)
    }

   

       /**
          * Controls that when user clicks create playlist button the Modal shows 
   * @type {Handler}
   * @memberof CreatePlaylist
   */
    onChange = (e) => this.setState({ playlistname: e.target.value });
    //To be uncommented Next Phase 

   /*  handleclick = () => {
        axios.post('',this.state.playlistname)
            .then(res => {
                if(res.status===204){
                    alert("An email has been sent");
                }
                else{
                    alert("Please try again");
                }
            })
            .catch(error => {
                alert(error.response.data.message);
            })
    } */

     
    render() {
        return ( <div>

     <div className="modal" id="static-back-drop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog mw-100 w-100" id="playlist-modal" role="document">
    <div className="modal-content" id="modal-content-create" >

    <div className="dialog" id="text-abv-modal">
         <button type="button"  data-dismiss="modal" id="modal-close-btn" aria-label="Close">
          <span aria-hidden="true">X </span>
        </button>

        <div className="modal-header" id="playlist-modal-header">
        <h5 className="modal-title" id="modal-title">Create new playlist</h5>
   
     </div> 

      </div>
       
      <div className="modal-body" id="modal-body-create">
           <div id="modal-body-container">     
          <div id="modal-body-text">Playlist Name</div>
                <input type="text"  size="40" name="playlistname" id="playlist-name-input" placeholder="New Playlist" onChange={this.onChange} />
        </div>
      </div>

      <div className="modal-footer" id="playlist-modal-footer">

           <button  type="button" data-dismiss="modal" id="cancel-create-btn">cancel</button>
           {/* <button id="create-playlist-btn" onClick={this.handleclick} >Create </button> */}
           <button id="create-playlist-btn" disabled>Create </button>
      </div>

      
  </div>
</div>
</div>
</div>
              )
    }
}
export default CreatePlaylist
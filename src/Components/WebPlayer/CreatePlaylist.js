import React,{Component} from 'react';
//import 'react-contexify/dist/ReactContexify.min.css';
import './SideBar.css';
import './createplaylist.css'


class CreatePlaylist extends Component {

    constructor() {
            
         super()
        this.state = {
            
            playlistname:""
           
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange = (e) => this.setState({ playlistname: e.target.value });


     
    render() {
        return ( <div>

                <button type="button" id="create-playlist" data-toggle="modal" data-target="#static-back-drop">
                   <li className='sidebar-list-item '>
                   <i className='fas fa-plus-square' ></i>
                   <span className='list-item-text'>Create Playlist</span></li>
                </button>
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

           <button  type="button" data-dismiss="modal" id="cancel-create-btn">cancel</button> <button id="create-playlist-btn" >Create </button>
            
      </div>

      
  </div>
</div>
</div>
</div>
              )
    }
}
export default CreatePlaylist
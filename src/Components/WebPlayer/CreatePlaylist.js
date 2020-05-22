import React,{Component} from 'react';
import {ConfigContext} from '../../Context/ConfigContext'
import axios from 'axios'
import $ from "jquery";
import './SideBar.css';
import './CreatePlaylist.css'


/**
 * Create Playlist modal : opens to shows a modal to write in the name of the new playlist 
 * Default Name for a playlist is New Playlist controlled bby Backend
 * Maximum characters of a playlist name is 25 letters
 * @extends Component
 */

class CreatePlaylist extends Component {
    static contextType=ConfigContext;
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
         this.handleclick= this.handleclick.bind(this)
    }

   

       /**
          * Controls that when user clicks create playlist button the Modal shows 
   * @type {Handler}
   * @memberof CreatePlaylist
   */
    onChange = (e) => this.setState({ playlistname: e.target.value });
     
     handleclick = () => {
         //
        axios.post(this.context.baseURL +'/users/playlists/',
            {
            "name":this.state.playlistname
            },
        {
            headers: {
            'authorization': "Bearer " + localStorage.getItem("token"),
          }})
            .then(res => {
                if(res.status===201 || res.status===200){
                    $(document).ready(function(){
                        $("#static-back-drop").modal("hide");
                        $('body').removeClass('modal-open');
                        $('.modal-backdrop').remove();  
                    })
                }
              
            })
            .catch(error => {
                console.log(error);
                alert(error);
            })
    } 

     
    render() {
        return ( <div>

     <div className="modal " id="static-back-drop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
          <form>
                <input type="text"  size="25" name="playlistname" id="playlist-name-input" placeholder="New Playlist" onChange={this.onChange} maxLength="30" minLength="1" data-err="Enter Name less than 25 letters " />
        </form>
        </div>
      </div>

      <div className="modal-footer" id="playlist-modal-footer">

           <button  type="button" data-dismiss="modal" id="cancel-create-btn">cancel</button>
           <button id="create-playlist-btn" onClick={this.handleclick}  >Create </button>
      </div>

      
  </div>
</div>
</div>
</div>
              )
    }
}
export default CreatePlaylist
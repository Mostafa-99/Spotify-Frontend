import React, { Component } from 'react'
import axios from 'axios'
import $ from "jquery"
import {ConfigContext} from "../../../../../Context/ConfigContext"
import { responseHandler } from "../../../../../ReduxStore/Shared"
import './AddToPlaylist.css'


/**
 *  Class of AddToplaylists components seen in the side bars 
 * @extends Component
 */

 class AddToPlaylist extends Component {

    static contextType=ConfigContext;

    constructor(props) {
        super(props)
        this.state = {
            /** Array of my PLatlists 
            * @extends MyPlaylists
            * @type {Array<playlists>}
            */
            playlists:[],
            /** Track Id 
            * @extends MyPlaylists
            * @type {string}
            */
            trackid:"",
            /** Loading : state of page
            * @extends MyPlaylists
            * @type {bool}
            */
           isloading:true,
        }
        this.handleClick= this.handleClick.bind(this)
    }

    componentDidMount()
    {

        axios.get(this.context.baseURL +'/me/createdPlaylists',
        {
           headers:{'authorization':"Bearer "+localStorage.getItem('token')}
           }
        ) 
        .then(res => {
            console.log(res)
            if(res.status===200)
            { 
                   this.setState({
                      playlists: res.data.data.playlists.map( playlists => ({
                      
                          /**
                          * ID of the playlist
                           @memberof AddToPlaylists
                           @type {String}
                          *
                          */
                         id:playlists._id,
                        /**
                          * name  of the playlist
                           @memberof AddToPlaylists
                          * 
                           @type {String}
                          */
                      title:playlists.name,
                          /**
                          * Link to image of my playlist
                           @memberof AddToPlaylists
                           @type {Route}
                          * 
                          */
                      imageUrl:playlists.images[0]
                  })),
                  isloading:false 
                })}
               else 
              responseHandler(res);
          }).catch(res=>{
              console.log(res);
            }) 
    }

       /**
     * addding  this specific track to the called user playlist id
     * On succes it automatically closes modal 
     * @memberof AddToPlaylist
     * @param {String} id 
     * @returns {void}
     */
    handleClick = (id) => {
        axios.post('https://spotify.mocklab.io/playlists/5ed962b4719a62a954766bb9/tracks',
      //  axios.post(this.context.baseURL +'/playlists/'+id+'/tracks' ,
        {
        "id":this.props.trackId
        },
    {
        headers: {
        'authorization': "Bearer " + localStorage.getItem("token"),
      }})
        .then(res => {
            if(res.status===201 || res.status===200){
             
                $(document).ready(function(){
                    $("#AddSongToPlaylist").modal("hide");
                    $('body').removeClass('modal-open');
                    $('.modal-backdrop').remove();  
                }
                )
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

render() {
    //console.log("trackId:" ,this.props.trackId)
  //  console.log("Addtoplaylist",this.state.trackid)
    return(
    <div>
    <div className="modal" id="AddSongToPlaylist" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered mw-100 w-100" id="create-playlist-modal" role="document">
    <div className="modal-content" id="modal-content-create" >

    <div className="dialog" id="text-abv-modal">
         <button type="button"  data-dismiss="modal" id="modal-close-btn" aria-label="Close">
          <span aria-hidden="true">X </span>
        </button>

        <div className="modal-header" id="playlist-modal-header">
        <h5 className="modal-title" id="modal-title">Add to Playlist</h5>
     </div> 

      </div>
       
      <div className="modal-body" id="modal-body-share">
      <div className="row" >
             {!this.state.isloading?       
                <div className="playlist-items-wrapper">
                     {this.state.playlists.map(playlist => (
                                      
                                       <div className="playlist-item-wrapper"  id={playlist.id}  >
                                            <div className="playlist-index-img-background"  onClick={() => this.handleClick(playlist.id)}>
                                               
                                               <img src={playlist.imageUrl} alt="playlist-pic"
                                              onError={e => {e.target.src = 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX38758453.jpg';}}></img>
                                               
                                               
                                                <div className="playlist-img-text-wrapper" >               
                                                    <div className="playlist-subtitle"  >
                                                        <div className="my-playlist-playlist-info">
                                                            <div id="playlist-title"> {playlist.title}</div>
                                                            </div>
                                                    </div>
                                                </div> 
                                            </div>
                                        </div>   ))}

                 </div> :
                                        <div className="container w-50 pb-5 align-middle align-self-center d-flex justify-content-center">
                                        <div class="spinner-border text-success" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </div>}
                 </div>

        
      </div>

      <div className="modal-footer" id="playlist-modal-footer">

           <button  type="button" data-dismiss="modal" id="cancel-create-btn">cancel</button>
      </div>

      
  </div>
</div>
</div>
</div>
    )}
}
export default AddToPlaylist


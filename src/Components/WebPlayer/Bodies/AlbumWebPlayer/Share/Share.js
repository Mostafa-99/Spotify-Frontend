import React from 'react';
import {
    EmailIcon,
    FacebookIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    WhatsappIcon,
  } from "react-share";
import {
    FacebookShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    RedditShareButton,
    TumblrShareButton,
    EmailShareButton,
  } from 'react-share';

function Share(props) {
  let URL=(props.url).replace('/api','');
  //console.log(window.location.href);
  //console.log(URL);
    return(<div>
             <div className="modal" id="share-static-back-drop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered mw-30 w-30" id="create-playlist-modal" role="document">
    <div className="modal-content" id="modal-content-create" >

    <div className="dialog" id="text-abv-modal">
         <button type="button"  data-dismiss="modal" id="modal-close-btn" aria-label="Close">
          <span aria-hidden="true">X </span>
        </button>

        <div className="modal-header" id="playlist-modal-header">
        <h5 className="modal-title" id="modal-title">Share On...</h5>
   
     </div> 

      </div>
       
      <div className="modal-body" id="modal-body-share">
           <div id="modal-body-container">     
            <div>
               <br/>
               <br/>
            
            <TwitterShareButton url={URL} title="Checkout this song on TotallyNotSpotify!!" >
              <TwitterIcon size={40} round={false} borderRadius={10} />
             </TwitterShareButton>  
              <span > </span>  
             
             <FacebookShareButton url={URL} quote="Checkout this song on TotallyNotSpotify!!" hashtag="TotallyNotSpotify">
               <FacebookIcon size={40} round={false} borderRadius={10} />
             </FacebookShareButton>
             <span > </span> 

             <WhatsappShareButton url={URL} title="Checkout this song on TotallyNotSpotify!!"   >
            < WhatsappIcon size={40} round={false} borderRadius={10} />
             </WhatsappShareButton>
             <span > </span> 

             <EmailShareButton url={URL} subject="Checkout this song on TotallyNotSpotify!!" >
            < EmailIcon size={40} round={false} borderRadius={10} />
             </EmailShareButton>
             <span > </span> 

             <RedditShareButton url={URL} title="Checkout this song on TotallyNotSpotify!!">
               <RedditIcon size={40} round={false} borderRadius={10}/>
             </RedditShareButton>
             <span > </span> 


             <TelegramShareButton url={URL} title="Checkout this song on TotallyNotSpotify!!" >
               <TelegramIcon size={40} round={false} borderRadius={10} />
             </TelegramShareButton>
             <span > </span> 

             <TumblrShareButton url={URL} title="Checkout this song on TotallyNotSpotify!!">
               <TumblrIcon size={40} round={false} borderRadius={10} />
             </TumblrShareButton>
             <span > </span> 

            </div>
        </div>
      </div>

      <div className="modal-footer" id="playlist-modal-footer">

           <button  type="button" data-dismiss="modal" id="cancel-create-btn">cancel</button>
      </div>

      
  </div>
</div>
</div>

    </div>)}
export default Share


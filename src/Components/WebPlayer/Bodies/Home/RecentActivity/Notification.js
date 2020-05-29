// //Firebase 
// import React,{ Component} from "react"
// import axios from 'axios'
// import { ConfigContext } from '../../../../../Context/ConfigContext'
// import * as firebase from 'firebase';


// var config = {
//     apiKey: "AIzaSyDstl21Iann4t-odVPIMFTXpI5ToD1jIC0",
//     authDomain: "totally-not-spotify.firebaseapp.com",
//     databaseURL: "https://totally-not-spotify.firebaseio.com",
//     projectId: "totally-not-spotify",
//     storageBucket: "totally-not-spotify.appspot.com",
//     messagingSenderId: "262598048193",
//     appId: "1:262598048193:web:8eb027331acfe77f625740",
//     measurementId: "G-YDVW3R60NT"
//   };
// firebase.initializeApp(config);
// const messaging = firebase.messaging();

// messaging.onTokenRefresh(() => {
//     messaging.getToken().then((refreshedToken) => {
//       console.log('Token refreshed.');

//       // Send Instance ID token to app server.
//       this.state.RequestBackend(refreshedToken);
//       // ...
//     }).catch((err) => {
//       console.log('Unable to retrieve refreshed token ', err);
//     });
//   });
// // Add the public key generated from the console here.
// messaging.usePublicVapidKey("BKWMGFcg3yIaZ8ONAeIORVydRfg1GFtMnKcCPV-jFyEXWAlbLv8nv9Wtsr4Gu5NsVHZTFl4yD0ZXcZpqsBvrIj8");

// messaging.requestPermission()
//   .then (function(){
//     console.log("Have permission");
//     return messaging.getToken();
//   })
//   .then(function(token){
//     this.state.RequestBackend(token);
//   console.log("token is "); 
//   console.log(token);


  
//   })
// .catch(function(err){
//   console.log("error occured")
// })
// messaging.onMessage((payload) => {
//   console.log('Message received. ', payload);
// });

// class Notification extends Component {
//     static contextType=ConfigContext;

//     constructor() {
//         super()
//     }
   



//  RequestBackend=(token)=>{
//     console.log("Token to be send :",token)
//     try {
//       const res = axios.put(this.context.baseURL + "me/notifications/token",
//       {
//         "token":token
//         },
//          {
//         headers: {
//           authorization: "Bearer " + localStorage.getItem("token"),
//         },
//       });
//      if(res.status===204){
//         console.log("Request Succesful and token is ", token)
//     }
//     } catch (err) {
//       console.log(err);
//     }
// }
// render(){
//   return(
//     <div>
//     </div>
//   )
// }


// }
// export default Notification
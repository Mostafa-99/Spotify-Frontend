import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios'
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import authReducer from './ReduxStore/Reducers/Auth';
import thunk from 'redux-thunk';
//Firebase 
import * as firebase from 'firebase';

  var config = {
  apiKey: "AIzaSyDstl21Iann4t-odVPIMFTXpI5ToD1jIC0",
  authDomain: "totally-not-spotify.firebaseapp.com",
  databaseURL: "https://totally-not-spotify.firebaseio.com",
  projectId: "totally-not-spotify",
  storageBucket: "totally-not-spotify.appspot.com",
  messagingSenderId: "262598048193",
  appId: "1:262598048193:web:8eb027331acfe77f625740",
  measurementId: "G-YDVW3R60NT"
};
firebase.initializeApp(config);


const messaging = firebase.messaging();
// Add the public key generated from the console here.
messaging.usePublicVapidKey("BKWMGFcg3yIaZ8ONAeIORVydRfg1GFtMnKcCPV-jFyEXWAlbLv8nv9Wtsr4Gu5NsVHZTFl4yD0ZXcZpqsBvrIj8");
messaging.requestPermission()
  .then (function(){
    console.log("Have permission");
    return messaging.getToken();
  })
  .then(function(token){
  console.log("token is "); 
  console.log(token);
  try {
          const res = axios.put(this.context.baseURL + "me/notifications/token",
          {
            "token":token
            },
             {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
         if(res.status===204){
            console.log("Request Succesful and token is ", token)
        }
        } 
        catch (err) {
          console.log(err);
        }
  })
.catch(function(err){
  console.log("error occured")
})
messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  // ...
});

const rootReducer = combineReducers({
  auth: authReducer
});

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk)
));

ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
<App/>
</BrowserRouter>
</Provider>
, document.getElementById('mybody'));



serviceWorker.unregister();


/////////////////////////////////////////////////////////////////
//Scroll Button function
/*$('.scroll-button').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800
      );
    }
  });*/
/*
  //Event listener function  
  const track=document.querySelector('.carousel-img');
  const imgs=Array.from(track.children);
  const slides=document.querySelector('.carousel-inner');
  const dotNav=document.querySelector('.carousel-indicators');
  const dots=Array.from(dotNav.children);
  const moveToslide = (track,currentSlide,targetSlide) =>{
    currentSlide.classList.remove('active');
    targetSlide.classList.add('active');
  }
  const changeImg = (e) =>{
        const targetDot=e.target.closest('li');
        
       if(!targetDot) return;

       const currentSlide =track.querySelector('.active');
      // const currentDot=dotNav.querySelector('.active');
       const targetIndex=dots.findIndex(dot => dot===targetDot);

       const targetSlide=imgs[targetIndex];

       moveToslide(track,currentSlide,targetSlide);
  }
  dotNav.addEventListener('onchange',changeImg);
  dotNav.addEventListener('click',changeImg);
  slides.addEventListener('onchange',changeImg);*/
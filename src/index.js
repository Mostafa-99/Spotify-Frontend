import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';




ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('mybody'));



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
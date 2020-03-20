import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter,Link } from "react-router-dom";
import Footer from '../Footer/footer.js'
import Navbar from '../Navigation/navbar.js'
import './indexPage.css'


function IndexPage() {
  
  return (
      <div>
      <Navbar/>
      <div id="indexbody">
        <button id="getspotifyfree">Get Spotify Free</button>
      </div>
      <Footer/>
   </div>
  );
}




export default  withRouter(IndexPage);


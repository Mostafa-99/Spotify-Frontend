import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import SignUp from './Components/SignUp/sign_up.js'
import LogIn from './Components/Login/log_in.js'
import Navbar from './Components/Navigation/navbar.js'
import Footer from './Components/Footer/footer.js'

//ReactDOM.render(<Navbar />, document.getElementById('mybody'));
ReactDOM.render(<div><Navbar/><App/><Footer/></div>, document.getElementById("mybody"));
//ReactDOM.render(<Footer />, document.getElementById('myfooter'));


serviceWorker.unregister();

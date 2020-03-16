import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import SignUp from './Components/SignUp/sign_up.js'
import LogIn from './Components/Login/log_in.js'
import Navbar from './Components/Navigation/navbar.js'
import Footer from './Components/Footer/footer.js'

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Navbar />, document.getElementById('mynav'));
ReactDOM.render(<App />, document.getElementById('mybody'));
ReactDOM.render(<Footer />, document.getElementById('myfooter'));


serviceWorker.unregister();

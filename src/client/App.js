import React, { Component } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import Login from './Container/login';
import Profile from './Container/profile';
import '../assets/CSS/login.css';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Route exact path='/login' component={ Login }/>
            <Route path='/profile' component={ Profile }/>
            <ToastContainer />
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

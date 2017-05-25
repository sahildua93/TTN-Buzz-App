import React, { Component } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login   from './Container/login'
import Profile  from './Container/profile'
import LostAndFound from './Container/complaintBox'

import '../assets/CSS/login.css'



export default class App extends Component{
    render(){
        return(
            <MuiThemeProvider>
            <Router>
                <div>
                    <Route exact path='/login' component={Login}/>
                    <Route path='/profile' component={Profile} />
                </div>
            </Router>
            </MuiThemeProvider>
        )
    }
}

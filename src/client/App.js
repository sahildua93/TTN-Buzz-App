import React, { Component } from 'react';
import { render } from 'react-dom'
import  Login   from './Container/login'
import  Profile  from './Container/profile'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../assets/CSS/login.css'

export default class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path='/' component={Login}/>
                    <Route path='/profile' component={Profile}/>
                </div>
            </Router>
        )
    }
}

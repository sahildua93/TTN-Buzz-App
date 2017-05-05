import React, { Component } from 'react';
import { render } from 'react-dom'
import { Login  } from './Container/login'
import '../assets/CSS/login.css'

export default class App extends Component{
    render(){
        return(
            <div>
                <Login/>
            </div>
        )
    }
}

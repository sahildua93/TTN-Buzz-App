/**
 * Created by sahil-dua on 3/5/17.
 */

import React, { Component } from 'react';
import isAuthenticated from './isAuthenticated'
import '../../assets/CSS/login.css';

@isAuthenticated(false)
export default class Login extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="main">
                <img  className="background-image" src={require('../../assets/images/background.jpg')}/>
                <div className="blackTint"></div>
                <div className="loginMain">
                    <form action="/api/login">
                        <div className="imgcontainer">
                            <img src={require('../../assets/images/img_avatar2.png')} alt="Avatar" className="avatar"/>
                        </div>
                        <div className="container">
                                <button className="button fa fa-google-plus" type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
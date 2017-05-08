/**
 * Created by sahil-dua on 5/5/17.
 */

import React, { Component } from 'react'
import '../../assets/CSS/header.css'
export default class Header extends Component{


    render(){
        return(
            <div className="top-header">
                <div className="btn-group pull-right">
                    <button className="button-logout">Logout</button>

                </div>

                <img src={require('../../assets/images/wallpaper-quote.jpg')} className="img-responsive" alt="Highway Of london" />

                <div className="logo-image">
                    <img src={require('../../assets/images/logo.jpg')} className="img-responsive" alt="Logo"/>
                </div>
            </div>

        )
    }
}
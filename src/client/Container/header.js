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
                    <form action="/api/logout">
                        <button type="submit" className="button-logout" value="Logout">Logout</button>
                    </form>
                </div>

                <img src={`/${require('../../assets/images/road.jpg')}`} className="img-responsive background-image-profile" alt="Highway Of london" />

                <div className="logo-image">
                    <img src={`/${require('../../assets/images/logo.jpg')}`} className="img-responsive" alt="Logo"/>
                </div>
            </div>

        )
    }
}
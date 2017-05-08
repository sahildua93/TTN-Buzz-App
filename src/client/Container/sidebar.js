
import React, { Component } from 'react'
import '../../assets/CSS/sidebar.css'
export default class SideBar extends Component{


    render(){
        return(
            <div className="vertical-menu">
                <div>
                    <img src={require('../../assets/images/img_avatar2.png')} className="img-responsive img-circle nav-image" />
                        <a href="#" className="active">Profile</a>
                        <a href="#">Buzz</a>
                        <a href="#">Complaints</a>
                </div>

            </div>

        )
    }
}
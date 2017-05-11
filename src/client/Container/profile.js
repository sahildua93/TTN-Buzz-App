
import React, { Component } from 'react';
import Header from './header';
import SideBar from './sidebar';
import CreateBuzz from './createBuzz';
import '../../assets/CSS/header.css'
export default class Profile extends Component{

    render(){
        return(
                <div className="main-profile">
                    <Header/>
                    <div className="components">
                        <SideBar/>
                        <CreateBuzz/>
                    </div>
                </div>
        )
    }


}
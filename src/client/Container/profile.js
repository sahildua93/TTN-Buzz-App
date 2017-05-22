import React, { Component } from 'react';
import Header from './header';
import SideBar from './sidebar';
import CreateBuzz from './createBuzz';
import PopulateBuzz from './populateBuzz';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../../assets/CSS/header.css'
import '../../assets/CSS/buzz.css'
import '../../assets/CSS/profile.css'

export default class Profile extends Component {

    render() {
        return (
            <div>
                <Header/>
                <div className="main-profile">
                    <div className="sidebar">
                        <SideBar/>
                    </div>
                    <div className="buzz">
                        <div className="create-buzz">
                            <CreateBuzz/>
                        </div>
                        <div className="populate-buzz">
                            <PopulateBuzz/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

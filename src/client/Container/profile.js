import React, { Component } from 'react';
import Header from './header';
import SideBar from './sidebar';
import CreateBuzz from './createBuzz';
import IsAuthenticated from './isAuthenticated';
import { connect } from 'react-redux';
import PopulateBuzz from './populateBuzz';
import Complaints from './complaintBox';
import TableExampleSimple from './listOfComplaints';
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
                            <Route path="/profile/buzz" component={ PopulateBuzz } />
                            <Route path="/profile/complaints" component={ Complaints }/>
                            <Route path="/profile/all-complaints" component={ TableExampleSimple }/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
//
// const ProfileContainer = connect()(IsAuthenticated(Profile));
// export default ProfileContainer;



import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import IsAuthenticated from './isAuthenticated';
import Header from './header';
import SideBar from './sidebar';
import CreateBuzz from './createBuzz';
import PopulateBuzz from './populateBuzz';
import Complaints from './complaintBox';
import LostAndFound from './lostFound';
import TableExampleSimple from './listOfComplaints';
import '../../assets/CSS/header.css'
import '../../assets/CSS/buzz.css'
import '../../assets/CSS/profile.css'

@IsAuthenticated(true)
class Profile extends Component {

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
              <Route exact path="/profile/buzz" component={ PopulateBuzz }/>
              <Route path="/profile/complaints" component={ Complaints }/>
              <Route path="/profile/lost-found" component={ LostAndFound }/>
              <Route path="/profile/all-complaints" component={ TableExampleSimple }/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Profile);



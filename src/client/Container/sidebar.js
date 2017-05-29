import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../../assets/CSS/sidebar.css';
import {connect} from 'react-redux';
import {fetchUser} from '../Action/async.actions'

class SideBar extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="vertical-menu">
        <div>
          <img src={this.props.user.image_url} className="img-responsive img-circle nav-image"/>
          <div className="center"><b>{this.props.user.username}</b></div>
          <div className="center"><b>{this.props.user.role}</b></div>
          <Link to='/profile/lost-found'>Lost and Found</Link>
          <Link to='/profile/buzz'>Buzz</Link>
          <Link to='/profile/complaints'>Complaints</Link>
          <Link to='/profile/all-complaints'>All complaints</Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser())
});

const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar);
export default SideBarContainer;
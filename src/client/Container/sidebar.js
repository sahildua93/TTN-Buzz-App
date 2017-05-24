import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import '../../assets/CSS/sidebar.css';
import {connect} from 'react-redux';
import {fetchUser} from '../Action/async.actions'

class SideBar extends Component {

    componentWillMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="vertical-menu">
                <div>
                    <img src={this.props.user.image_url} className="img-responsive img-circle nav-image"/>
                    <center><b>{this.props.user.username}</b></center>
                    <center><b>{this.props.user.role}</b></center>
                    <Link to='/profile/lostfound' >Lost and Found</Link>
                    <Link to='/profile/buzz' >Buzz</Link>
                    <a href="#">Complaints</a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user.user,
})

const mapDispatchToProps = (dispatch) => ({
    fetchUser: () => dispatch(fetchUser())
})

const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar)
export default SideBarContainer;
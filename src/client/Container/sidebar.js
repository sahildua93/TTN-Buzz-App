
import React, { Component } from 'react';
import '../../assets/CSS/sidebar.css';
import { connect } from 'react-redux';
import { fetchUser } from '../Action/async.actions'

class SideBar extends Component{

    componentWillMount(){
        this.props.fetchUser();
    }

    render(){
        return(
            <div className="vertical-menu">
                <div>
                    <img src={this.props.user.image_url} className="img-responsive img-circle nav-image" />
                        <center><b>{this.props.user.username}</b></center>
                        <center><b>{this.props.user.role}</b></center>
                        <a href="#" className="active">Profile</a>
                        <a href="#">Buzz</a>
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
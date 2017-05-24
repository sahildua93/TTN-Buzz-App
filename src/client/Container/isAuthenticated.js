import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import {fetchUser} from '../Action/async.actions'

export default (Profile) => {

    class Authenticate extends Component {

        constructor(props) {
            super(props);
            this.props.fetchUser();
        }

        render() {
            if(this.props.user || this.props.loading === 'NOT_STARTED'){
                return <Profile {...this.props}/>;
            }
            if (this.props.loading === 'STARTED') {
                return <div>Loading....</div>
            } else {
                return <Redirect to="/login"/>;
            }
        }
    }
    const mapStateToProps = (state) => {
        return {
            user: state.user.user,
            loading: state.user.loading,
        };
    };

    const mapDispatchToProps = (dispatch) => ({
        fetchUser: () => dispatch(fetchUser())
    });

    return connect(mapStateToProps, mapDispatchToProps)(Authenticate);
}


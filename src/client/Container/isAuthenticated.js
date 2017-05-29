import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import CircularProgress from 'material-ui/CircularProgress';
import {fetchUser} from '../Action/async.actions'

export default (isAuthRoute) => (WrappedComponent) => {

    class Authenticate extends Component {

        constructor(props) {
            super(props);
            this.props.fetchUser();
        }

        render() {
            if (isAuthRoute) {
              if(this.props.user || this.props.loading === 'NOT_STARTED'){
                return <WrappedComponent {...this.props}/>;
              }
              if (!this.props.user && this.props.loading === 'STARTED') {
                return <CircularProgress size={80} thickness={7} />
              }
              else {
                return <Redirect to="/login" />;
              }
            } else {
              if(this.props.user) {
                return <Redirect to="/profile" />;
              } else {
                return <WrappedComponent {...this.props} />;
              }
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


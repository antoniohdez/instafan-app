import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import auth from '../../js/util/auth';

class Login extends Component {
    constructor(props) {
        super(props);

        auth.signOut();
    }

    render() {
        return <Redirect to={{
            pathname: '/login',
            state: { from: this.props.location }
        }}/>;
    }
}

export default Login;
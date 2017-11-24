import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './header/Header';
import SideBar from './side-bar/SideBar';
import MainContainer from './MainContainer';
import auth from '../js/util/auth';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = { authenticated: false };

        auth.verifySession()
            .then((response) => {
                this.setState({ authenticated: true });
            })
            .catch((error) => {
                this.props.history.push('/login');
            })
    }
    
    render() {
        const RouterMainContainer = withRouter(MainContainer)

        const DOM = (
            <div className="layout">
                <Header />
                <SideBar />
                <RouterMainContainer />   
            </div>
        )
        
        return this.state.authenticated ? DOM : null;
    }
}

export default Layout;
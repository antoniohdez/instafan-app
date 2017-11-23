import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Header from './header/Header';
import SideBar from './side-bar/SideBar';
import MainContainer from './MainContainer';

class Layout extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const RouterMainContainer = withRouter(MainContainer)
        return (
            <div className="layout">
                <Header />
                <SideBar />
                <RouterMainContainer />   
            </div>
        );
    }
}

export default Layout;
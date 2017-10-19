import React, { Component } from 'react';
import Header from './components/header/Header';
import SideBar from './components/side-bar/SideBar';
import MainContainer from './components/MainContainer';

class App extends Component {
    render() {
        return (
            <div className="layout">
                <Header />
                <SideBar />
                <MainContainer />
            </div>
        );
    }
}

export default App;
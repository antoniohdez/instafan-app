import React, { Component } from 'react';
import Header from './components/header/Header';
import SideBar from './components/side-bar/SideBar';

class App extends Component {
    render() {
        return (
            <div className="layout">
                <Header />
                <SideBar />
            </div>
        );
    }
}

export default App;
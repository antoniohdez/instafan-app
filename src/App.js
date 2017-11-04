import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Header from './components/header/Header';
import SideBar from './components/side-bar/SideBar';
import MainContainer from './components/MainContainer';
import Login from './components/sessions/Login';
import Register from './components/sessions/Register';
import RecoverPassword from './components/sessions/RecoverPassword';

class App extends Component {
    render() {
        return (
            <Router location={window.location}>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/recover-password" component={RecoverPassword} />

                    <Route path="/" render={() => (
                        <div className="layout">
                            <Header />
                            <SideBar />
                            <MainContainer />
                        </div>    
                    )} />
                </Switch>
            </Router>
        );
    }
}

export default App;
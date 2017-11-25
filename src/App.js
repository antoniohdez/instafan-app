import React, { Component } from 'react';
import { BrowserRouter as Router, Route, /*Link,*/ Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/sessions/Login';
import Logout from './components/sessions/Logout';
import Register from './components/sessions/Register';
import RecoverPassword from './components/sessions/RecoverPassword';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/recover-password" component={RecoverPassword} />

                    <Route path="/" component={Layout} />
                </Switch>
            </Router>
        );
    }
}

export default App;
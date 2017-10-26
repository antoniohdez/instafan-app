import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CampaignList from './campaigns/CampaignList';
import CampaignForm from './campaigns/CampaignForm';

class Main extends Component {
    render() {
        return (
            <div className="container">
            	<Router>
            		<div>
            			<Route exact path="/campaigns" component={CampaignList} />
            			<Route exact path="/campaigns/create" component={CampaignForm} />
            		</div>
            	</Router>
            </div>
        );
    }
}

export default Main;
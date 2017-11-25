import React, { Component } from 'react';
import { BrowserRouter as Router, Route/*, Link*/ } from 'react-router-dom';
import CampaignList from './campaigns/CampaignList';
import CampaignForm from './campaigns/CampaignForm';
import Analytics from './analytics/Analytics';

class Main extends Component {
    render() {
        return (
            <div className="container">
            	<Router>
            		<div>
            			<Route exact path="/campaigns" component={CampaignList} />
            			<Route exact path="/campaigns/create" component={CampaignForm} />
                        <Route exact path="/analytics" component={Analytics} />
            		</div>
            	</Router>
            </div>
        );
    }
}

export default Main;
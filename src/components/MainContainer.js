import React, { Component } from 'react';
import CampaignList from './campaigns/CampaignList';

class Main extends Component {
    render() {
        return (
            <div className="container">
                <CampaignList />
            </div>
        );
    }
}

export default Main;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import request from '../../js/util/request';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            campaigns: []
        };

        request.get('http://localhost:8000/campaigns')
            .then((response) => {
                console.log(response);
                this.setState({ campaigns: response });
            }).catch((error) => {
                console.log(error);
            });

    }

    render() {
        return (
            <div className="campaign-list">
                <div className="panel campaign-item campaign-item--add">
                    <Link to="/campaigns/create">
                        <i className="fa fa-plus-circle fa-5x"></i>
                        <div>Crear Campaña</div>
                    </Link>
                </div>
                {
                    this.state.campaigns.map((campaign, i) => {
                        return <div className="panel campaign-item" key={ `campaign_${i}` }>
                                <div className="campaign-item__status-bar">
                                    <span className="campaign-item__status-bar-item">
                                        <span className="campaign-status">
                                            <span className="fa fa-fw fa-circle campaign-status__icon campaign-status__icon--ok"></span>
                                            <span className="campaign-status__text">{campaign.status}</span>
                                        </span>
                                    </span>
                                    <span className="campaign-item__status-bar-item">
                                        {/*<span className="campaign-item__status-bar-button">
                                            <i className="fa fa-fw fa-pencil"></i>    
                                        </span>*/}
                                        <span className="campaign-item__status-bar-button campaign-item__status-bar-button--danger">
                                            <i className="fa fa-fw fa-trash-o"></i>
                                        </span>
                                    </span>
                                </div>
                                <div className="campaign-item__image">
                                    <img src={campaign.target} alt={campaign.name} />
                                </div>
                                <div className="campaign-item__details">
                                    <div className="campaign-item__details-title">{campaign.name}</div>
                                    <div className="campaign-item__details-hashtag">#{campaign.hashtag}</div>
                                </div>
                            </div>;
                    })
                }
            </div>
        );
    }
}

export default Header;
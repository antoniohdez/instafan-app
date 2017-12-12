import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import request from '../../js/util/request';
import swal from 'sweetalert2';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            campaigns: []
        };

        this.refreshList = this.refreshList.bind(this);
        this.deleteCampaign = this.deleteCampaign.bind(this);

        this.refreshList();
    }

    refreshList() {
        request.get('campaigns/?userID=' + localStorage.getItem('userID'))
            .then((response) => {
                const list = response.filter((campaign) => {
                    return campaign.status === 'active';
                });
                this.setState({ campaigns: list });
            }).catch((error) => {
                console.log(error);
            });
    }

    deleteCampaign(event) {
        const target = event.currentTarget;

        swal({
            title: '¿Eliminar campaña?',
            text: 'Esta acción no puede ser revertida.',
            type: 'warning',
            showCancelButton: true,
            //confirmButtonColor: '#3085d6',
            //cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar campaña',
            cancelButtonText: 'Cancelar',
            confirmButtonClass: 'button button--danger button--margin',
            cancelButtonClass: 'button',
            buttonsStyling: false,
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                const campaignID = target.dataset.campaignId;
                request.delete(`campaigns/${campaignID}`)
                    .then((response) => {
                        console.log(response);
                        this.refreshList();
                    })
                    .catch((error) => {
                        console.log(error);
                    });        
            }/* else if (result.dismiss === 'cancel') {
                
            }*/
        })
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
                                        <span className="campaign-item__status-bar-button campaign-item__status-bar-button--danger"
                                            data-campaign-id={campaign._id}
                                            onClick={this.deleteCampaign} >
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
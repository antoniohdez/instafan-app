import React, { Component } from 'react';
import request from '../../js/util/request';
import Widget from './Widget';
import DataItem from './DataItem';
import DataList from './DataList';

class Analytcis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            summary: {},
            campaigns: []
        };
    }

    componentDidMount() {
        request.get('analytics/summary?userID=' + localStorage.getItem('userID'))
            .then((response) => {
                this.setState({ summary: response });
            }).catch(console.log);

        request.get('campaigns/?target=false&userID=' + localStorage.getItem('userID'))
            .then((response) => {
                response.forEach((campaign) => {
                    request.get('analytics/target/' + campaign._id)
                        .then((data) => {
                            campaign.analytics = data;

                            // Get the count key from the analytics array of stickers
                            campaign.stickers.forEach((sticker) => {
                                const stickerStat = campaign.analytics.stickers.find((stickerStat) => {
                                    return stickerStat._id === sticker._id;
                                });

                                // If the are no stats then set counter to 0
                                sticker.count = stickerStat ? stickerStat.count : 0;
                            });

                            // Asign array of sticker to analytics list
                            campaign.analytics.stickers = campaign.stickers;
                            campaign.analytics.stickers.sort((sticker1, sticker2) => {
                                return sticker1.count < sticker2.count ? 1 : -1; // Desc order
                            });

                            const items = this.state.campaigns;
                            items.push(campaign);

                            this.setState({ campaigns: items });
                        })
                        .catch(console.log);
                });
            }).catch(console.log);
    }

    render() {
        return (
            <div className="analytics">
                <div className="analytics__section">
                    <div className="analytics__section-title"></div>
                    <div className="analytics__section-content">
                        <div className="analytics__widgets">
                            <Widget data={this.state.summary.scans} attr={{
                                modifier: '--green',
                                text: 'Vistas de campaña',
                                icon: 'fa-mobile',
                                iconSize: 'fa-4x'
                            }} />
                            <Widget data={this.state.summary.shares} attr={{
                                modifier: '--blue',
                                text: 'Compartido en redes',
                                icon: 'fa-share-square'
                            }} />
                            <Widget data={this.state.summary.stickers} attr={{
                                modifier: '--yellow',
                                text: 'Uso de stickers',
                                icon: 'fa-smile-o'
                            }} />
                            <Widget data={this.state.summary.photos} attr={{
                                modifier: '--red',
                                text: 'Fotos creadas',
                                icon: 'fa-camera'
                            }} />
                        </div>
                    </div>
                </div>
                <div className="analytics__section">
                    <div className="analytics__section-title">
                        Campañas
                    </div>
                    <div className="analytics__section-content">
                        {
                            this.state.campaigns.map((campaign, i) => {
                                return (
                                    <div className="panel panel--full-width analytics-panel" key={ `campaign_${i}` }>
                                        <div className="panel__header analytics-panel__header">
                                            <span className="analytics-panel__title">{campaign.name}</span>
                                            <span className="analytics-panel__status">
                                                <span className="fa fa-fw fa-check-circle campaign-status__icon campaign-status__icon--ok"></span>
                                                <span className="campaign-status__text">Activo</span>
                                            </span>
                                        </div>
                                        <div className="panel__content panel__content--large-padding">
                                            <div className="analytics-panel__data-grid">
                                                <DataItem data={campaign.analytics.activeDays} label={'Días de campaña activa'} />
                                                <DataItem data={campaign.analytics.scans} label={'Vistas de campaña'} />
                                                <DataItem data={campaign.analytics.photos} label={'Fotos creadas'} />
                                                <DataItem data={campaign.analytics.timeSpan} label={'Duración promedio de interacción'} />
                                                <DataItem data={campaign.analytics.shares.facebook} label={'Compartidos en Facebook'} />
                                                <DataItem data={campaign.analytics.shares.twitter} label={'Compartidos en Twitter'} />
                                            </div>
                                            <div className="analytics-panel__columns-grid">
                                                <DataList list={campaign.analytics.stickers} label={'Uso de stickers'} />

                                                <div className="analytics-panel__column-container">
                                                    <div className="analytics-panel__sub-title">Top 5 ciudades</div>
                                                    <div className="analytics-panel__table">
                                                        <div className="analytics-panel__row-stat">
                                                            <div className="analytics-panel__cell">
                                                                Guadalajara
                                                            </div>
                                                            <div className="analytics-panel__cell">
                                                                57
                                                            </div>
                                                        </div>
                                                        <div className="analytics-panel__row-stat">
                                                            <div className="analytics-panel__cell">
                                                                CDMX
                                                            </div>
                                                            <div className="analytics-panel__cell">
                                                                41
                                                            </div>
                                                        </div>
                                                        <div className="analytics-panel__row-stat">
                                                            <div className="analytics-panel__cell">
                                                                Monterrey
                                                            </div>
                                                            <div className="analytics-panel__cell">
                                                                38
                                                            </div>
                                                        </div>
                                                        <div className="analytics-panel__row-stat">
                                                            <div className="analytics-panel__cell">
                                                                Zapopan
                                                            </div>
                                                            <div className="analytics-panel__cell">
                                                                25
                                                            </div>
                                                        </div>
                                                        <div className="analytics-panel__row-stat">
                                                            <div className="analytics-panel__cell">
                                                                Tepic
                                                            </div>
                                                            <div className="analytics-panel__cell">
                                                                21
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Analytcis;
import React, { Component } from 'react';
import request from '../../js/util/request';
import Widget from './Widget';
import Scans from './widgets/Scans';
import Shares from './widgets/Shares';
import Stickers from './widgets/Stickers';
import Photos from './widgets/Photos';

class Analytcis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            summary: {}
        };
    }

    componentDidMount() {
        request.get('analytics/summary?userID=' + localStorage.getItem('userID'))
            .then((response) => {
                this.setState({ summary: response });
            }).catch(console.log);
    }

    render() {
        return (
            <div className="analytics">
                <div className="analytics__section">
                    <div className="analytics__section-title">
                        Resumen de los últimos 30 días
                    </div>
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
                        <div className="panel panel--full-width analytics-panel">
                            <div className="panel__header analytics-panel__header">
                                <span className="analytics-panel__title">Campaña Kia Rio 2018</span>
                                <span className="analytics-panel__status">
                                    <span className="fa fa-fw fa-check-circle campaign-status__icon campaign-status__icon--ok"></span>
                                    <span className="campaign-status__text">Activo</span>
                                </span>
                            </div>
                            <div className="panel__content panel__content--large-padding">
                                <div className="analytics-panel__data-grid">
                                    <div className="analytics-panel__data-container">
                                        <div className="analytics-panel__data-title">
                                            Días campaña activa
                                        </div>
                                        <div className="analytics-panel__data-number">
                                            12
                                        </div>
                                    </div>
                                    <div className="analytics-panel__data-container">
                                        <div className="analytics-panel__data-title">
                                            Vistas de campaña
                                        </div>
                                        <div className="analytics-panel__data-number">
                                            97
                                        </div>
                                    </div>
                                    <div className="analytics-panel__data-container">
                                        <div className="analytics-panel__data-title">
                                            Usuarios alcanzados
                                        </div>
                                        <div className="analytics-panel__data-number">
                                            71
                                        </div>
                                    </div>
                                    <div className="analytics-panel__data-container">
                                        <div className="analytics-panel__data-title">
                                            Duración promedio de interacción
                                        </div>
                                        <div className="analytics-panel__data-number">
                                            2:37
                                        </div>
                                    </div>
                                    <div className="analytics-panel__data-container">
                                        <div className="analytics-panel__data-title">
                                            Compartidos en Facebook
                                        </div>
                                        <div className="analytics-panel__data-number">
                                            21
                                        </div>
                                    </div>
                                    <div className="analytics-panel__data-container">
                                        <div className="analytics-panel__data-title">
                                            Compartidos en Twitter
                                        </div>
                                        <div className="analytics-panel__data-number">
                                            8
                                        </div>
                                    </div>
                                </div>
                                <div className="analytics-panel__columns-grid">
                                    <div className="analytics-panel__column-container">
                                        <div className="analytics-panel__sub-title">Uso de stickers</div>
                                        <div className="analytics-panel__table">
                                            <div className="analytics-panel__row-stat">
                                                <div className="analytics-panel__cell">
                                                    <img src="../sticker1.png" alt="campaign" />
                                                </div>
                                                <div className="analytics-panel__cell">
                                                    3
                                                </div>
                                            </div>
                                            <div className="analytics-panel__row-stat">
                                                <div className="analytics-panel__cell">
                                                    <img src="../sticker2.png" alt="campaign" />
                                                </div>
                                                <div className="analytics-panel__cell">
                                                    5
                                                </div>
                                            </div>
                                            <div className="analytics-panel__row-stat">
                                                <div className="analytics-panel__cell">
                                                    <img src="../sticker3.png" alt="campaign" />
                                                </div>
                                                <div className="analytics-panel__cell">
                                                    10
                                                </div>
                                            </div>
                                            <div className="analytics-panel__row-stat">
                                                <div className="analytics-panel__cell">
                                                    <img src="../sticker4.png" alt="campaign" />
                                                </div>
                                                <div className="analytics-panel__cell">
                                                    6
                                                </div>
                                            </div>
                                            <div className="analytics-panel__row-stat">
                                                <div className="analytics-panel__cell">
                                                    <img src="../sticker5.png" alt="campaign" />
                                                </div>
                                                <div className="analytics-panel__cell">
                                                    14
                                                </div>
                                            </div>
                                            <div className="analytics-panel__row-stat">
                                                <div className="analytics-panel__cell">
                                                    <img src="../sticker6.png" alt="campaign" />
                                                </div>
                                                <div className="analytics-panel__cell">
                                                    1
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                    <div className="analytics-panel__column-container">
                                        <div className="analytics-panel__sub-title">Otros</div>
                                        <div className="analytics-panel__table">
                                            <div className="analytics-panel__row-stat">
                                                <div className="analytics-panel__cell">
                                                    Imágenes creadas
                                                </div>
                                                <div className="analytics-panel__cell">
                                                    57
                                                </div>
                                            </div>
                                            <div className="analytics-panel__row-stat">
                                                <div className="analytics-panel__cell">
                                                    Porcentaje de rebote
                                                </div>
                                                <div className="analytics-panel__cell">
                                                    24%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Analytcis;
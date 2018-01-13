import React, { Component } from 'react';

class Shares extends Component {

    render() {
        return (
            <div className="widget widget--blue">
                <div className="widget__text-container">
                    <div className="widget__data">
                        52
                    </div>
                    <div className="widget__title">
                        Compartidos en Redes
                    </div>
                </div>
                <div className="widget__icon-container">
                    <i className="fa fa-share-square fa-fw fa-3x"></i>
                </div>
            </div>
        );
    }
}

export default Shares;
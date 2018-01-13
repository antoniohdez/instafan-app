import React, { Component } from 'react';

class Scans extends Component {

    render() {
        return (
            <div className="widget widget--green">
                <div className="widget__text-container">
                    <div className="widget__data">
                        137
                    </div>
                    <div className="widget__title">
                        Vistas de campaña
                    </div>
                </div>
                <div className="widget__icon-container">
                    <i className="fa fa-mobile fa-fw fa-4x"></i>
                </div>
            </div>
        );
    }
}

export default Scans;
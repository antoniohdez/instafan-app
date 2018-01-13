import React, { Component } from 'react';

class Stickers extends Component {

    render() {
        return (
            <div className="widget widget--yellow">
                <div className="widget__text-container">
                    <div className="widget__data">
                        35
                    </div>
                    <div className="widget__title">
                        Uso de stickers
                    </div>
                </div>
                <div className="widget__icon-container">
                    <i className="fa fa-smile-o fa-fw fa-3x"></i>
                </div>
            </div>
        );
    }
}

export default Stickers;
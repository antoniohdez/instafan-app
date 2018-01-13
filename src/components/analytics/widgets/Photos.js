import React, { Component } from 'react';

class Photos extends Component {

    render() {
        return (
            <div className="widget widget--red">
                <div className="widget__text-container">
                    <div className="widget__data">
                        194
                    </div>
                    <div className="widget__title">
                        Fotos creadas
                    </div>
                </div>
                <div className="widget__icon-container">
                    <i className="fa fa-camera fa-fw fa-3x"></i>
                </div>
            </div>
        );
    }
}

export default Photos;
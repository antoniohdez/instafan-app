import React, { Component } from 'react';

class Notification extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="notification notification--error">
                <div className="notification__icon fa fa-fw fa-2x fa-check"></div>
                <div className="notification__text-container">
                    <div className="notification__title">
                        Credenciales incorrectas
                    </div>
                    <div className="notification__detail">
                        Details
                    </div>
                </div>
            </div>
        );
    }
}

export default Notification;
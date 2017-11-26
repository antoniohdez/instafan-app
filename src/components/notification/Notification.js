import React, { Component } from 'react';

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    };

    render() {
        const notificationType = `notification notification--${ this.props.options.type }`;
        let notificationIcon = 'notification__icon fa fa-fw fa-2x ';
        switch(this.props.options.type) {
            case 'error': 
                notificationIcon += 'fa-times'
                break;
            case 'warning':
                notificationIcon += 'fa-exclamation-triangle'
                break;
            case 'success':
                notificationIcon += 'fa-check'
                break;
            case 'info':
            default:
                notificationIcon += 'fa-info-circle'
        }

        return (
            <div className={ notificationType }>
                <div className={ notificationIcon }></div>
                <div className="notification__text-container">
                    <div className="notification__title">
                        { this.props.options.title }
                    </div>
                    <div className="notification__detail">
                        { this.props.options.detail }
                    </div>
                </div>
            </div>
        );
    };
}

export default Notification;
import React, { Component } from 'react';

class Scans extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps });
    }

    render() {
        return (
            <div className={`widget widget${this.props.attr.modifier}`}>
                <div className="widget__text-container">
                    <div className="widget__data">
                        {this.props.data}
                    </div>
                    <div className="widget__title">
                        {this.props.attr.text}
                    </div>
                </div>
                <div className="widget__icon-container">
                    <i className={`fa fa-fw ${this.props.attr.icon} ${this.props.attr.iconSize || 'fa-3x' }`}></i>
                </div>
            </div>
        );
    }
}

export default Scans;
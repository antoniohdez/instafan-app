import React, { Component } from 'react';

class DataItem extends Component {
    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps });
    }

    render() {
        return (
            <div className="analytics-panel__data-container">
                <div className="analytics-panel__data-title">
                    {this.props.label}
                </div>
                <div className="analytics-panel__data-number">
                    {this.props.data}
                </div>
            </div>
        );
    }
}

export default DataItem;
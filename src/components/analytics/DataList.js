import React, { Component } from 'react';

class DataList extends Component {
    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps });
    }

    render() {
        return (
            <div className="analytics-panel__column-container">
                <div className="analytics-panel__sub-title">{this.props.label}</div>
                <div className="analytics-panel__table">
                    {
                        this.props.list.map((item, i) => {
                            return <div className="analytics-panel__row-stat" key={`item_${i}`}>
                                <div className="analytics-panel__cell">
                                    {
                                        function(item){
                                            if (item.sticker) {
                                                return <img src={item.sticker} alt="sticker" />
                                            } else {
                                                return item._id }
                                        }(item)
                                    }
                                </div>
                                <div className="analytics-panel__cell">
                                    {item.count}
                                </div>
                            </div>
                        }).filter((item, i) => i < 5)
                    }
                </div>
            </div>
        );
    }
}

export default DataList;
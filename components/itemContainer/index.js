import React from 'react';
import ReactDom from 'react-dom';
import './style'


class ItemContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return <div className="itemContainer">
            <div className="itemContainerTitle">{this.props.title}</div>
            <div className="itemContainerContent">{this.props.children}</div>
        </div>
    }
}

export default ItemContainer;
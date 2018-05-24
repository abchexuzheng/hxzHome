import React from 'react';
import ReactDom from 'react-dom';



class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return <li className="listMenu-item">
            <a className="listMenu-item-href">{this.props.children}</a>
        </li>
    }
}

export default ListItem;
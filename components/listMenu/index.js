import React from 'react';
import ReactDom from 'react-dom';
import ListItem from './listItem'
import './style'


class ListMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return <div className="listMenu">
            <header className="listMenu-header">
                <div className="listMenu-header-title">{this.props.header}</div>
                <div className="listMenu-header-info">{this.props.headerInfo}</div>
            </header>
            <div>
                <ul className="listMenu-list">
                    {this.props.menu&&this.props.menu.map(item=>{
                        return <ListItem key={`item${item.title}`}>{item.title}</ListItem>
                    })}
                </ul>
            </div>
        </div>
    }
}

export default ListMenu;
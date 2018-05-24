import React from 'react';
import ReactDom from 'react-dom';
import './style'


class ListMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return <div className="listMenu">
            <div>{this.props.header}</div>
            <div>
                <ul className="listMenu-list">
                    {this.props.menu&&this.props.menu.map(item=>{
                        return <li>{item.title}</li>
                    })}
                </ul>
            </div>
        </div>
    }
}

export default ListMenu;
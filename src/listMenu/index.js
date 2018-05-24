import React from 'react';
import ReactDom from 'react-dom';


class ListMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return <div>
            <div>{this.props.header}</div>
            <div>
                <ul>
                    <li>a</li>
                </ul>
            </div>
        </div>
    }
}

export default HomePage;
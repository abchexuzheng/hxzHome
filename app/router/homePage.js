import React from 'react';
import ReactDom from 'react-dom';
import {ListMenu} from './../../src'


class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return <div>
            <ListMenu header="hxz"/>
        </div>


    }
}

export default HomePage;
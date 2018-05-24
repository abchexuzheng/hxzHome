import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {ListMenu} from './../../components'

const menu=[{
    title:'HOME',
    link:'home'
},{
    title:'ARTICLE',
    link:'article'
}]

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return <div>
            <ListMenu
                header="HXZ Home"
                headerInfo="HXZ的个人小站"
                menu={menu}
            />
        </div>
    }
}

export default HomePage;
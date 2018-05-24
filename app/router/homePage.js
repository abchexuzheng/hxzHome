import React from 'react';
import ReactDom from 'react-dom';
import {ListMenu} from './../../components'

const menu=[{
    title:'HOME',
    link:'home'
}]

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return <div>
            <ListMenu header="hxz" menu={menu}/>
        </div>
    }
}

export default HomePage;
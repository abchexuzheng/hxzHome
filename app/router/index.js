import React from 'react';
import ReactDom from 'react-dom';
//import { HashRouter as Router, Route, Link, Switch, HashHistory,IndexRoute  } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './homePage'

class IndexRouter extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return <Router>
            <div>
                <Route path="/" exact component={HomePage} />
            </div>
        </Router>


    }
}

export default IndexRouter;
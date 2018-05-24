import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router, Route, Link, Switch, HashHistory,IndexRoute  } from 'react-router-dom';
//import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './homePage'
import ReleaseArticle from './releaseArticle'
import Navigation from './navigation'
import './style'

class IndexRouter extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return <Router>
            <div>
                <Navigation />
                <div className="main-content">
                    <Route path="/" exact component={HomePage} />
                    <Route path="/article/" exact component={HomePage} />
                    <Route path="/article/release" exact component={ReleaseArticle} />
                </div>
            </div>
        </Router>
    }
}



export default IndexRouter;
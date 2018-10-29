import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, hashHistory } from 'react-router-dom';

import Header from "../layouts";
import Home from '../pages/Home';
import About from '../pages/About';

export default props => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/about" component={ About } />
                <Redirect from="*" to="/" />
            </Switch>
        </div>
    </Router>
);
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, hashHistory } from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/about';
import { Header } from "../layouts";

export default props => (
    <Router history={ hashHistory }>
        <div>
            <Header pageTitle="About" />
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/about" component={ About } />
                <Route path="/contact" component={ Home } />
                <Redirect from="*" to="/" />
                {/* when none of the above match, <NoMatch> will be rendered */}
                {/* <Route component={NoMatch} /> */}
            </Switch>
        </div>
    </Router>
);
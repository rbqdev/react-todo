import React from 'react';
import {
    BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';

import Header from '../layouts';
import Home from '../pages/Home';
import About from '../pages/About';

export default () => (
    <Router>
        <div className="app__container">
            <div className="app__header">
                <Header />
            </div>
            <div className="app__content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Redirect from="*" to="/" />
                </Switch>
            </div>
        </div>
    </Router>
);

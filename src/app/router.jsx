import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, hashHistory } from 'react-router-dom';

import Home from '../pages/home';

export default props => (
    <BrowserRouter history={ hashHistory }>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ Home } />
            <Route path="/contact" component={ Home } />
            <Redirect from="*" to="/" />
            {/* when none of the above match, <NoMatch> will be rendered */}
            {/* <Route component={NoMatch} /> */}
        </Switch>
    </BrowserRouter>
);
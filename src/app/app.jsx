import 'sanitize.css';
import '../assets/css/main.scss';

import React from 'react';
import Router from './router';
import MenuBottom from '../layouts/menubottom';

export default props => (
    <div className="app-container">
        <div className="app--content">
            <Router />
        </div>
        <div className="app--bottom">
            <MenuBottom />
        </div>
    </div>
);
import 'sanitize.css';
import '../assets/css/main.scss';

import React from 'react';
import Router from './router';

export default props => (
    <div className="app-container">
        <div className="app--content">
            <Router />
        </div>
    </div>
);
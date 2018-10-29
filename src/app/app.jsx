import 'sanitize.css';
import '../assets/css/main.scss';

import React from 'react';
import Router from './Router';

export default () => (
    <div className="app-container">
        <div className="app--content">
            <Router />
        </div>
    </div>
);
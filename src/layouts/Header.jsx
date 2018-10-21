import React from 'react';
import { Link } from "react-router-dom";

export default props => {

    const itemActive = ( page ) => {
        return window.location.pathname === page ? 'active' : '';
    }

    return (
        <div className="page-header">
            <div className="page--menu">
                <ul>
                    <li className={ itemActive('/') }>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className={ itemActive('/about') }>
                        <Link to={'/about'}>About</Link>
                    </li>
                </ul>
            </div>
        </div>
    );

}
import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {

    render(){
        return (
            <div className="page-header">
                <div className="page--menu">
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

    itemActive( page ) {
        let path = window.location.pathname;
        return  path === page ? 'active' : '';
    }

}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyled } from './Header.styled';

export default class Header extends Component {
    render() {
        return (
            <HeaderStyled className="app__header">
                <div className="app__menu">
                    <ul>
                        <li className={this.getActiveItem('/')}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={this.getActiveItem('/about')}>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </HeaderStyled>
        );
    }

    getActiveItem(page) {
        const path = window.location.pathname;
        return path === page ? 'active' : '';
    }
}

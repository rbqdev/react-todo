import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyled } from './Header.styled';

export default class Header extends Component {
    render() {
        return (
            <HeaderStyled className="app__header">
                <nav className="app__menu">
                    <ul>
                        <li className={this.getItemSelected('/')}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={this.getItemSelected('/about')}>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </HeaderStyled>
        );
    }

    getItemSelected(page) {
        const path = window.location.pathname;
        return path === page ? 'selected' : '';
    }
}

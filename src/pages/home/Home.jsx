import React, { Component } from 'react';
import Todo from '../../components/Todo';

export default class Home extends Component {
    render() {
        return (
            <div className="page">
                <div className="page__title">
                    <h1>Todo</h1>
                </div>
                <div className="page__content">
                    <Todo />
                </div>
            </div>
        );
    }
}

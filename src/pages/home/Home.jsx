import React, {Component} from 'react';
import Todo from "../../components/Todo";

export default class Home extends Component {
    render(){
        return (
            <div className="page">
                <div className="page--title">
                    <h1>Todo</h1>
                </div>
                <div className="page--content">
                    <Todo />
                </div>
            </div>
        );
    }
}
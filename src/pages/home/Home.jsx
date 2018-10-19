import React, {Component} from 'react';

import { Header, Content } from "../../layouts";
import Todo from "../../components/todo/Todo";

export default class Home extends Component {
    render(){
        return (
            <div className="page">

                <Header pageTitle="TodoApp" />

                <Content>

                    

                </Content>

            </div>
        );
    }
}
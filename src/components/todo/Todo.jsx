import React from 'react';
import If from '../../utils/If';
import TodoStyled from './Todo.styled';
import TodoForm from './TodoForm/TodoForm';
import TodoItem from './TodoItem/TodoItem';
import { Query } from "react-apollo";
import gql from 'graphql-tag';

class Todo extends React.Component {

    constructor() {
        super();

        this.state = {
            todoText: '',
            todoList: []
        };
    }

    componentDidMount() {
        document.addEventListener('clear-preview', () => {
            this.clearTodoText();
        });
    }

    render() {
        return (
            <TodoStyled className="todo">
                <div className="todo__header">
                    <TodoForm
                        triggerAddTodoItem={this.addTodo.bind(this)}
                        triggerUpdatePreview={this.updatePreviewTodoText.bind(this)}
                    />
                </div>
                <div className="todo__content">
                    <If condition={this.state.todoText.length > 0}>
                        <TodoItem text={this.state.todoText} preview />
                    </If>

                    { this.getTodos() }
                </div>
            </TodoStyled>
        );
    }

    getTodos() {
        return (
            <Query query={
                gql`
                    query {
                        allTodoes {
                            id
                            text
                            checked
                        }
                    }
                `
            }>
                {({ data, error, loading }) => {
                    if (error) return 'Oops! Something Wrong';
                    if (loading) return 'Looking for items, wait...';

                    return (
                        <React.Fragment>
                            {data.allTodoes.map((todo, index) => (
                                <TodoItem
                                    text={todo.text}
                                    key={index++}
                                    id={todo.id}
                                    checked={todo.checked}
                                    triggerDeleteTodoItem={() => this.deleteTodoItem(data.id)}
                                />
                            ))}
                        </React.Fragment>
                    );
                }}
            </Query>
        );
    }

    addTodo() {
        this.setState({
            todoList: [{ text: this.state.todoText }, ...this.state.todoList],
            todoText: ''
        });
        // Trigger event to clear Form's input on <TodoForm />
        document.dispatchEvent(new Event('clear-input'));
    }

    deleteTodo(index) {
        this.setState({
            todoList: this.state.todoList.filter((item, key) => key !== index)
        });
    }

    updatePreviewTodoText(value) {
        this.setState({ todoText: value });
    }

    clearTodoText() {
        this.setState({ todoText: '' });
    }
}

export default Todo;
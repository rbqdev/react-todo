import React from 'react';
import If from '../../utils/If';
import TodoStyled from './Todo.styled';
import TodoForm from './TodoForm/TodoForm';
import TodoItem from './TodoItem/TodoItem';
import { Query, Mutation, compose, graphql } from "react-apollo";
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

    componentWillReceiveProps(props) {
        this.setStateTodoList(props);
    }

    render() {
        const { todos } = this.props;

        return (
            <TodoStyled className="todo">
                <div className="todo__header">
                    <TodoForm
                        triggerAddTodoItem={this.addTodo.bind(this)}
                        triggerUpdatePreview={this.updatePreviewTodoText.bind(this)}
                    />
                </div>
                <div className="todo__content">

                    {/* Preview Item when user are typing */}
                    <If condition={this.state.todoText.length > 0}>
                        <TodoItem text={this.state.todoText} preview />
                    </If>

                    {/* Conditions of the list */}
                    <If condition={todos.loading}>
                        <p>Looking items, hold on...</p>
                    </If>
                    <If condition={(!todos.loading && (todos.error || !todos.allTodoes))}>
                        <p>Oops! Something Wrong</p>
                    </If>

                    {/* Passed by all occurrences and list items from api */}
                    {(!todos.loading && (todos.allTodoes && typeof todos.allTodoes === 'object'))
                        ? this.renderTodoList()
                        : null
                    }

                </div>
            </TodoStyled>
        );
    }

    renderTodoList() {
        if (this.state.todoList.length > 0) {
            return (
                <React.Fragment>
                    {this.state.todoList.map((todo, index) => (
                        <TodoItem
                            text={todo.text}
                            key={index++}
                            id={todo.id}
                            checked={todo.checked}
                            triggerDeleteTodoItem={() => this.deleteTodoItem(data.id)}
                        />
                    ))}
                </React.Fragment>
            )
        } else {
            return (
                <p>No items in the list!</p>
            )
        }
    }

    setStateTodoList(props) {
        const { todos } = props;
        if (todos && todos.allTodoes) {
            this.setState({
                todoList: [...todos.allTodoes],
                todoText: '',
            });
        }
    }

    addTodo() {
        const { todoText } = this.state;

        // Add Todo Item to API GraphQL
        this.props.addTodo({
            variables: {
                text: todoText
            },
            update: (proxy, { data: { addTodo } }) => {
                this.props.todos.refetch();
            },
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

const TodosQuery = gql`
    query {
        allTodoes(orderBy: createdAt_DESC) {
            id
            text
            checked
        }
    }
`;

const TodoMutation = gql`
    mutation ($text: String!) {
        createTodo ( text: $text ) {
            text
        }
    }
`;

export default compose(
    graphql(TodosQuery, { name: 'todos' }),
    graphql(TodoMutation, { name: 'addTodo' }),
)(Todo);
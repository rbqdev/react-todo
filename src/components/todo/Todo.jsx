import React from 'react';
import If from '../../utils/If';
import TodoStyled from './Todo.styled';
import TodoForm from './TodoForm/TodoForm';
import TodoItem from './TodoItem/TodoItem';

class Todo extends React.Component {

    constructor() {
        super();

        this.state = {
            todoTitle: '',
            todoList: []
        };

        this.addTodoItem = this.addTodoItem.bind(this);
        this.updateTodoTitle = this.updateTodoTitle.bind(this);
    }

    render() {
        return (
            <TodoStyled className="todo">
                <div className="todo__header">
                    <TodoForm
                        triggerAddTodoItem={this.addTodoItem}
                        triggerUpdatePreviewParent={this.updateTodoTitle}
                    />
                </div>
                <div className="todo__content">

                    <If condition={this.state.todoTitle.length > 0}>
                        <TodoItem title={this.state.todoTitle} preview />
                    </If>

                    {this.state.todoList.map((todo, index) => (
                        <TodoItem title={todo.title} key={index + 1} id={index + 1} />
                    ))}

                </div>
            </TodoStyled>
        );
    }

    addTodoItem() {
        let todo = {
            title: this.state.todoTitle
        };
        this.setState({
            todoList: [todo, ...this.state.todoList],
            todoTitle: ''
        });
        // Trigger event to clear Form's input on <TodoForm />
        document.dispatchEvent(new Event('clear-input'));
    }

    updateTodoTitle(value) {
        this.setState({ todoTitle: value });
    }
}

export default Todo;

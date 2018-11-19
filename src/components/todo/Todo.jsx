import React from 'react';
import If from '../../utils/If';
import TodoStyled from './Todo.styled';
import TodoForm from './TodoForm/TodoForm';
import TodoItem from './TodoItem/TodoItem';

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
                        triggerAddTodoItem={this.addTodoItem.bind(this)}
                        triggerUpdatePreview={this.updatePreviewTodoText.bind(this)}
                    />
                </div>
                <div className="todo__content">
                    <If condition={this.state.todoText.length > 0}>
                        <TodoItem text={this.state.todoText} preview />
                    </If>

                    {this.state.todoList.map((todo, index) => (
                        <TodoItem
                            text={todo.text}
                            key={index + 1}
                            id={index + 1}
                            triggerDeleteTodoItem={() => this.deleteTodoItem(index)}
                        />
                    ))}
                </div>
            </TodoStyled>
        );
    }

    addTodoItem() {
        this.setState({
            todoList: [{ text: this.state.todoText }, ...this.state.todoList],
            todoText: ''
        });
        // Trigger event to clear Form's input on <TodoForm />
        document.dispatchEvent(new Event('clear-input'));
    }

    deleteTodoItem(index) {
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

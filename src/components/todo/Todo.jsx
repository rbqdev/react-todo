import React from 'react';
import TodoStyled from './Todo.styled';
import TodoForm from './TodoForm/TodoForm';

class Todo extends React.Component {
    render() {
        return (
            <TodoStyled className="todo">
                <div className="todo--header">
                    <TodoForm />
                </div>
                <div className="todo--content" />
            </TodoStyled>
        );
    }
}

export default Todo;

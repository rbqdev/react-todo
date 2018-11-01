import React from 'react';
import TodoForm from './TodoForm/TodoForm';

class Todo extends React.Component {
    render() {
        return (
            <div className="todo">
                <div className="todo--header">
                    <TodoForm />
                </div>
                <div className="todo--content" />
            </div>
        );
    }
}

export default Todo;

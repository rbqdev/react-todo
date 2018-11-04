import React from 'react';
import { TodoFormStyled } from './TodoForm.styled';

class TodoForm extends React.Component {
    render() {
        return (
            <TodoFormStyled className="form">
                <div className="form__input">
                    <input type="text" placeholder="Write your task..." />
                </div>
                <div className="form__actions">
                    <button type="button" className="create">
                        <ion-icon name="add" />
                    </button>
                    <button type="button" className="update">
                        <ion-icon name="create" />
                    </button>
                </div>
            </TodoFormStyled>
        );
    }
}

export default TodoForm;

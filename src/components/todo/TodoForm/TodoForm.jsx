import React from 'react';
import { TodoFormStyled } from './TodoForm.styled';

class TodoForm extends React.Component {
    render() {
        return (
            <TodoFormStyled className="form">
                <div className="form__input">
                    <input type="text" />
                </div>
                <div className="form__actions">
                    <button>
                        <ion-icon name="add" />
                    </button>
                    <button>
                        <ion-icon name="create" />
                    </button>
                </div>
            </TodoFormStyled>
        );
    }
}

export default TodoForm;

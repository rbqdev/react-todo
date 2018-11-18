import React from 'react';
import { TodoFormStyled } from './TodoForm.styled';
import ClassNames from 'classnames';

class TodoForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        };
    }

    componentDidMount() {
        this.subscribeEventClearInput();
    }

    render() {
        return (
            <TodoFormStyled className="form">
                <div className="form__input">
                    <input
                        type="text"
                        placeholder="Write your task..."
                        value={this.state.inputValue}
                        onChange={this.handleReturnValueInput} />
                </div>
                <div className="form__actions">
                    <button
                        type="button"
                        className={this.getClassesButton()}
                        onClick={this.props.triggerAddTodoItem} //USER DOCUMENT DISPATCH EVENT TO RESOLVE PROBLEM WITH CLEAR INPUT
                    >
                        <ion-icon name="add" />
                    </button>
                </div>
            </TodoFormStyled>
        );
    }

    getClassesButton() {
        return ClassNames({
            'create': true,
            'enabled': (this.state.inputValue.length > 6),
        });
    }

    handleReturnValueInput = (e) => {
        this.setState({ inputValue: e.target.value });
        this.props.triggerUpdatePreviewParent(e.target.value);
    }

    subscribeEventClearInput() {
        document.addEventListener('clear-input', () => {
            this.setState({ inputValue: '' });
        });
    }

}

export default TodoForm;

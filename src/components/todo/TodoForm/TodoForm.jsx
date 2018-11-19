import React from 'react';
import { TodoFormStyled } from './TodoForm.styled';
import ClassNames from 'classnames';
import If from '../../../utils/If';

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
                        onChange={this.handleReturnValueInput}
                        onKeyPress={this.handleAddTodoPressKeyEnter}
                    />
                    <If condition={this.state.inputValue.length > 1}>
                        <button
                            type="button"
                            className="undo"
                            onClick={() => this.handleClearInput({ emitEvent: true })}>
                            <ion-icon name="undo" />
                            <div className="tooltip">
                                Undo
                            </div>
                        </button>
                    </If>
                </div>
                <div className="form__actions">
                    <button
                        type="button"
                        className={this.getClassesButton()}
                        onClick={this.handleAddTodoClick}
                    >
                        <ion-icon name="add" />
                    </button>
                </div>
            </TodoFormStyled>
        );
    }

    handleReturnValueInput = (e) => {
        this.setState({ inputValue: e.target.value });
        this.props.triggerUpdatePreview(e.target.value);
    }

    handleAddTodoClick = () => {
        this.props.triggerAddTodoItem();
    }

    handleAddTodoPressKeyEnter = (e) => {
        if (e.key === 'Enter')
            this.props.triggerAddTodoItem();
    }

    handleClearInput = (data = {}) => {
        this.setState({ inputValue: '' });
        if (data.emitEvent)
            document.dispatchEvent(new Event('clear-preview'));
    }

    subscribeEventClearInput = () => {
        document.addEventListener('clear-input', () => this.handleClearInput());
    }

    getClassesButton = () => {
        return ClassNames({
            'create': true,
            'enabled': (this.state.inputValue.length > 6),
        });
    }

}

export default TodoForm;

import React from 'react';
import { TodoItemStyled } from './TodoItem.styled';
import If from '../../../utils/If';
import ClassNames from 'classnames';

class TodoItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            itemChecked: false,
            optionsStatus: false,
            isPreview: (this.props.preview) ? true : false
        }
    }

    componentDidMount() {
        if (!this.state.isPreview)
            this.handleClickOutsideOptions();
    }

    renderCheckbox() {
        return (
            <div className="todo-item__checkbox">
                <input type="checkbox" onChange={() => this.checkItem()} />
                <ion-icon name={this.state.itemChecked ? 'checkbox' : 'square-outline'} />
            </div>
        )
    }

    renderLabelPreview() {
        return (<div className="todo-item--preview-label"> Preview </div>)
    }

    render() {
        return (
            <TodoItemStyled id={this.props.id + '-item'} className={this.getClassesTodoItem()}>

                <div className="todo-item__content">

                    {
                        (!this.state.isPreview)
                            ? this.renderCheckbox()
                            : this.renderLabelPreview()
                    }

                    <div className="todo-item__text">
                        <h2>{this.props.text || 'No text for this task!'}</h2>
                    </div>

                    <If condition={!this.state.isPreview}>

                        <div className={this.getClassesItemOptions()}>

                            <div className="overlay-options-click" onClick={() => this.toggleOptionsActions()} />

                            <ion-icon name="more" />

                            <ul className="options">
                                <li>
                                    <button className="edit">
                                        <ion-icon name="create" />
                                        <span>Edit</span>
                                    </button>
                                </li>
                                <li>
                                    <button className="delete" onClick={this.props.triggerDeleteTodoItem}>
                                        <ion-icon name="trash" />
                                        <span>Delete</span>
                                    </button>
                                </li>
                            </ul>
                        </div>

                    </If>

                </div>
            </TodoItemStyled>
        );
    }

    checkItem() {
        this.setState({ itemChecked: !this.state.itemChecked });
    }

    toggleOptionsActions(data) {
        /**
         * If data is passed, you can handle status manually
         * If not, get inverted status
         */
        this.setState({ optionsStatus: (data) ? data.status : !this.state.optionsStatus });
    }

    getClassesItemOptions() {
        return ClassNames({
            'todo-item__actions': true,
            'options-visible': this.state.optionsStatus
        });
    }

    getClassesTodoItem() {
        return ClassNames({
            'todo-item': true,
            'todo-item--checked': this.state.itemChecked,
            'todo-item--preview': this.state.isPreview
        });
    }

    handleClickOutsideOptions(classID) {
        document.addEventListener('click', (e) => {
            let conditionValid = (
                !e.target.classList.contains('overlay-options-click')
            );
            if (conditionValid)
                this.toggleOptionsActions({ status: false });
        });
    }
}

export default TodoItem;

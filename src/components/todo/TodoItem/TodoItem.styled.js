import styled from 'styled-components';

export const TodoItemStyled = styled.article`

    position: relative;

    &.todo-item--preview {
        opacity: 0.5;
        background: #f9f9f9;
    }

    .todo-item__content {
        display: flex;
        align-items: center;
        padding: 16px 0;
        border: 1px solid #e5e5e5;
        border-bottom-color: transparent;
    }

    .todo-item__checkbox,
    .todo-item__actions {
        position: relative;
        flex-basis: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .todo-item__checkbox {
        ion-icon {
            width: 22px;
            height: 22px;
        }

        input {
            position: absolute;
            width: 100%;
            height: 100%;
            cursor: pointer;
            opacity: 0;
            z-index: 1;
        }
    }

    .todo-item--preview-label {
        margin: 0 18px;
        background: black;
        padding: 3px 8px;
        font-size: 10px;
        font-weight: 600;
        color: #fff;
        text-transform: uppercase;
        border-radius: 3px;
    }

    .todo-item__text {
        flex-grow: 1;

        h2 {
            font-size: 16px;
            font-weight: 400;
        }
    }

    &.todo-item--checked {
        .todo-item__text {
            text-decoration: line-through;
            font-style: italic;
        }
    }

    .todo-item__actions {

        > ion-icon {
            font-size: 22px;
            border-radius: 3px;
        }

        .overlay-options-click {
            width: 100%;
            height: 100%;
            position: absolute;
            cursor: pointer;
            z-index: 1;
        }

        .options {
            position: absolute;
            top: calc(100% + 10px);
            width: 120px;
            opacity: 0;
            visibility: hidden;
            box-shadow: 0 1px 1px 0 rgba(60,64,67,.08), 0 1px 3px 1px rgba(60,64,67,.16);
            list-style: none;
            border-radius: 3px;
            transition: 0.2s all ease-out;
            transform: translateY(5px);
            z-index: 2;

            &:before,
            &:after {
                content: '';
                position: absolute;
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%);
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-bottom: 5px solid #fff;
                z-index: 2;
            }

            &:after {
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-bottom: 6px solid #d9d9da;
                z-index: 1;
            }

            button {
                display: flex;
                white-space: nowrap;
                align-items: center;
                justify-content: center;
                padding: 12px;
                width: 100%;
                border-bottom: 1px solid #eee;
                transition: 0.2s all ease-out;
                cursor: pointer;

                &:hover {
                    background: #f4f4f4;
                }

                &:first-child {
                    border-radius: 3px 3px 0 0;
                }

                &:last-child {
                    border-radius: 0 0 3px 3px;
                }

                &.delete {
                    color: red;
                }

                span {
                    text-transform: uppercase;
                    font-size: 12px;
                }

                ion-icon {
                    font-size: 14px;
                    margin-right: 5px;
                }

            }

        }

        &.options-visible {
            .options {
                opacity: 1;
                visibility: visible;
                transform: translateY(0)
            }
        }

    }

    &:first-child {
        .todo-item__content {
            border-radius: 5px 5px 0 0;
        }
    }

    &:last-child {
        .todo-item__content {
            border-radius: 0 0 5px 5px;
            border-bottom-color: #e5e5e5;
        }
    }

    &:first-child:last-child {
        .todo-item__content {
            border-radius: 3px;
        }
    }

    &.todo-item--complete {

        h2 {
            text-decoration: line-through;
        }

    }

`;

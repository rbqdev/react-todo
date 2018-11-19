import styled from 'styled-components';

export const TodoFormStyled = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;

    .form__input {
        flex-grow: 1;
        position: relative;

        input {
            padding: 15px 20px;
            width: 100%;
            background: #f9f9f9;
            border: 1px solid #ccc;
            border-radius: 3px;
            outline: 0;
            transition: 0.2s all ease-out;

            &:hover,
            &:focus {
                border-color: #555;
            }

            &::-webkit-input-placeholder { color: #ccc; }
            &::-moz-placeholder { color: #ccc; }
            &:-ms-input-placeholder { color: #ccc; }
            &:-moz-placeholder { color: #ccc; }
        }

        .undo {
            position: absolute;
            right: 5px;
            top: 50%;
            transform: translateY(-50%);
            width: 35px;
            height: 40px;
            background: #f4f4f4;
            color: #888;
            border-radius: 3px;
            cursor: pointer;

            .tooltip {
                position: absolute;
                white-space: nowrap;
                text-transform: uppercase;
                background: #333;
                color: #fff;
                font-size: 8px;
                font-weight: 600;
                padding: 2px 5px;
                border-radius: 3px;
                bottom: 100%;
                left: 50%;
                opacity: 0;
                visibility: hidden;
                transform: translateX(-50%);
                transition: all 0.2s ease-out;
            }

            &:hover {
                .tooltip {
                    opacity: 1;
                    visibility: visible;
                }
            }
        }
    }
    .form__actions {
        height: 100%;
        margin-left: 5px;

        button {
            margin: 0 2px;
            padding: 14px;
            background: #eee;
            color: #888;
            border-radius: 3px;
            min-width: 100px;
            cursor: pointer;
            pointer-events: none;
            -webkit-transition: 0.2s all ease-out;
            transition: 0.2s all ease-out;

            &.enabled {
                background: #16171a;
                color: #fff;
                pointer-events: initial;
            }

            &:hover {
                background: #555;
            }

            ion-icon {
                font-size: 18px;
            }
        }
    }
`;

import styled from 'styled-components';

export const TodoFormStyled = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;

    .form__input {
        flex-grow: 1;

        input {
            padding: 15px 20px;
            width: 100%;
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
    }
    .form__actions {
        height: 100%;
        margin-left: 10px;

        button {
            margin: 0 2px;
            padding: 7px 12px;
            background: #555;
            color: #fff;
            border-radius: 3px;
            min-width: 50px;
            cursor: pointer;
            transition: 0.2s all ease-out;

            &:hover {
                background: #222;
            }

            ion-icon {
                font-size: 18px;
            }
        }
    }
`;

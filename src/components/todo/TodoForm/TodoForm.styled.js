import styled from 'styled-components';

export const TodoFormStyled = styled.div`
    display: flex;

    .form__input {
        flex-grow: 1;

        input {
            width: 100%;
            outline: 0;
        }
    }
    .form__actions {
        button {
            border: 0;
            background: transparent;
        }
    }
`;

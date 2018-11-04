import styled from 'styled-components';

export const HeaderStyled = styled.header`
    padding: 16px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #16171a;
    box-shadow: rgba(22, 23, 26, 0.15) 0px 4px 8px;

    ul {
        list-style: none;
        display: flex;

        li {
            a {
                margin: 0 10px;
                font-weight: 500;
                color: #ddd;
                text-decoration: none;
            }

            &.selected {
                a {
                    color: #fff;
                    font-weight: 600;
                }
            }
        }
    }
`;

import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1.5rem;

    & button {
        border: none;
        background-color: transparent;
        cursor: pointer;

        & img {
            width: 2rem;
        }
    }
`
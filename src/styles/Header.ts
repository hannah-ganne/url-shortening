import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1.5rem;

    & .desktop-nav {
            display: none;
        }

    & .hamburger {
    border: none;
    background-color: transparent;
    cursor: pointer;

        & img {
            width: 2rem;
        }
    }

    @media(min-width: 1440px) {
        padding: 3rem;
        justify-content: flex-start;

        .hamburger {
            display: none;
        }

        .desktop-nav {
            display: flex;
            flex: 1;
            justify-content: space-between;
            align-items: center;
            font-weight: 700;
            margin-left: 1rem;
            margin-right: 4rem;

            ul {
                align-items: center;
            }

            li {
                margin: 0 1.5rem;
            }

            button {
                margin: 0;
                padding: 0.5rem 1.5rem;
                font-size: 0.9rem;
            }
        }
    }
`
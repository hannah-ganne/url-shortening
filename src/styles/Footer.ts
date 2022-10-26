import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: var(--very-dark-violet);
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > img {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(148deg) brightness(102%) contrast(105%);
    }

    & .icons {
        margin-top: 2rem;

        & img {
            width: 1.3rem;
            margin: 0 0.6rem;
        }
    }

    @media(min-width: 1440px) {
        flex-direction: row;
        padding: 4rem 5rem;
        align-items: flex-start;

        img {
            margin-right: 17rem;
        }

        .footer-list {
            flex-direction: row;
            align-items: flex-start;
            margin-top: 0;

            ul {
                margin-right: 4rem;
                text-align: left;

                h3 {
                    margin-top: 0;
                }

                &:last-of-type {
                    margin: 0;
                }
            }
        }

    }
`


import styled from "styled-components";

export const Container = styled.section`
    border-radius: 0.7rem;
    width: 100%;
    background-color: #fff;
    padding: 1.2rem;

    & p {
        margin: 0;
        font-size: 0.9rem;
    }

    & .divider {
        border-top: 1px solid var(--gray);
        opacity: 35%;
        margin: 0.5rem -1rem;
    }

    & .link {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color: var(--very-dark-violet);
    }   

    & .short-link {
        color: var(--cyan);
    }

    & button {
        width: 100%;
        margin-top: 0.5rem;
        padding: 0.4rem;
        font-size: 0.9rem;
    }

    @media(min-width: 1440px) {
        display: flex;
        align-items: center;

        .link {
            flex: 2;
            margin-right: 4rem;
        }

        .divider {
            display: none;
        }
        
        .short-link {
            margin-right: 1.5rem;
        }

        button {
            flex: 0.2;
            margin: 0;
            font-weight: 500;
        }
    }
`
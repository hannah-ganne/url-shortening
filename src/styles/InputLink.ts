import styled from "styled-components";
import background from '../assets/bg-shorten-mobile.svg'
import desktopBack from '../assets/bg-shorten-desktop.svg'

export const Wrapper = styled.div`
    position: relative;
    background-color: #f0f1f6;
    padding: 6rem 1.2rem 0 1.2rem;

    @media(min-width: 1440px) {
        padding: 6rem 5rem;
    }
`

export const InputContainer = styled.section<{ hasError: boolean }>`
    position: absolute;
    top: -5rem;
    left: 6%;
    z-index: 2;
    width: 88%;
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
    background-color: var(--dark-violet);
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: top right;
    border-radius: 0.7rem;

    & > div {
        display: flex;
        flex-direction: column;
    }

    &::placeholder {
        color: ${({ hasError }) => hasError ? 'var(--red)' : 'var(--gray)'};
    }

    & small {
        color: var(--red);
        font-style: italic;
        font-size: 0.7rem;
        margin-top: 0.2rem;
    }

    & button {
        margin-top: 1rem;
    }

    @media(min-width: 1440px) {
        flex-direction: row;
        align-items: flex-start;
        padding: 3rem;
        background-image: url(${desktopBack});

        & > div {
            flex: 1;
        }

        button {
            margin-top: 0;
            margin-left: 1.5rem;
        }
    }
`

export const Input = styled.input<{ hasError: boolean }>`
    border: ${({ hasError }) => hasError ? '2px solid var(--red)' : 'none'};
    border-radius: 0.4rem;
    padding: 0.9rem;
    font-size: 0.8rem;
    font-family: 'Poppins', sans-serif;
    color: var(--gray);

    @media(min-width: 1440px) {

    }
`
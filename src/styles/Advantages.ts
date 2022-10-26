import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    padding: 10rem 1.5rem 5rem 1.5rem;
    background-color: #f0f1f6;
    position: relative;

    & h2, h3 {
        text-align: center;
        color: var(--very-dark-violet);
    }

    & p {
        text-align: center;
        color: var(--grayish-violet);
        font-size: 0.9rem;
    }

    & > *:not(.cyan-line) {
        z-index: 1;
    }

    & .cyan-line {
        position: absolute;
        top: 30%;
        left: 50%;
        z-index: 0;
        background-color: var(--cyan);
        width: 0.5rem;
        height: 50rem;
    }
`
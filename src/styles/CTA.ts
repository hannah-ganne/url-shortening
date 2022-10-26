import styled from "styled-components";
import background from '../assets/bg-boost-mobile.svg'

export const CTAContainer = styled.section`
    padding: 6rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--dark-violet);
    background-image: url(${background});
    
    & h2 {
        margin: 0;
        color: #fff;
    }

    & button {
        margin-top: 1rem;
    }
`
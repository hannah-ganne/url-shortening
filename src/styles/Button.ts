import styled from "styled-components";

export const ButtonContainer = styled.button<{ shape: string }>`
    font-size: 1.1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    letter-spacing: 0.05rem;
    color: #fff;
    background-color: var(--cyan);
    border: none;
    padding: 0.7rem 2rem;
    margin-top: 1.5rem;
    border-radius: ${({shape}) => shape === 'round' ? '5rem' : '0.4rem'}
`
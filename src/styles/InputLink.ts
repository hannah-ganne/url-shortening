import styled from "styled-components";
import background from '../assets/bg-shorten-mobile.svg'

export const InputContainer = styled.section`
    position: absolute;
    top: 46.8rem;
    left: 7.5%;
    z-index: 2;
    width: 85%;
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
    background-color: var(--dark-violet);
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: top right;
    border-radius: 0.7rem;
`

export const Input = styled.input`
    border: none;
    border-radius: 0.4rem;
    padding: 0.9rem;
    font-size: 0.8rem;
    font-family: 'Poppins', sans-serif;
    color: var(--gray);
`
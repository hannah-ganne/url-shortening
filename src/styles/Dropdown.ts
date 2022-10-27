import styled, { keyframes } from "styled-components";

// const growDown = keyframes`
//     0% {
//         transform: scaleY(0)
//     }

//     100% {
//         transform: scaleY(1)
//     }
// `

export const DropdownContainer = styled.nav<{ isOpen: boolean }>`
    background-color: var(--dark-violet);
    position: absolute;
    top: 5rem;
    left: 5%;
    z-index: 3;
    width: 90%;
    border-radius: 0.5rem;
    padding: 1.2rem 1.3rem 0 1.3rem;
    transform-origin: top;
    visibility: ${({ isOpen }) => isOpen ? `visible` : `hidden`};

    & .divider {
        border-top: 1px solid var(--grayish-violet);
        opacity: 35%;
        margin-bottom: 1.5rem;
    }

    & li {
        margin-bottom: 1.5rem;
    }

    & a {
        color: #fff;
        font-size: 1rem;
    }
    
    & button {
        margin: 0;
        padding: 0.5rem 0;
        width: 100%;
    }
`
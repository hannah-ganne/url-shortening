import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --cyan: hsl(180, 66%, 49%);
        --dark-violet: hsl(257, 27%, 26%);
        --red: hsl(0, 87%, 67%);
        --gray: hsl(0, 0%, 75%);
        --grayish-violet: hsl(257, 7%, 63%);
        --very-dark-blue: hsl(255, 11%, 22%);
        --very-dark-violet: hsl(260, 8%, 14%);
    }

    html {
        font-size: 112.5%;
        box-sizing: border-box;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        width: 100vw;
        font-family: 'Poppins', sans-serif;
    }
`

export default GlobalStyle

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Main = styled.main`

`

export const Nav = styled.nav`

`

export const Ul = styled.ul<{ direction: string }>`
    display: flex;
    flex-direction: ${({ direction }) => direction === "row" ? "row" : "column"};
    padding: 0;
    text-align: center;

    & h3 {
        font-size: 1rem;
        color: #fff;
    }
`

export const Li = styled.li`
    list-style: none;
`

export const A = styled.a`
    text-decoration: none;
    color: var(--gray);
    font-size: 0.8rem;
`
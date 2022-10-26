import styled from "styled-components";

export const Wrapper = styled.div`
    @media(min-width: 1440px) {
        width: 31%;
        position: absolute;

        &:first-of-type {
            top: 0;
            left: 0;
        }

        &:nth-of-type(2) {
            top: 2.5rem;
            left: 34%;
        }

        &:last-of-type {
            top: 5rem;
            left: 68%;
        }
    }
`

export const CardContainer = styled.article`
    position: relative;
    background-color: #fff;
    border-radius: 0.4rem;
    padding: 3.5rem 1.2rem 1.5rem 1.2rem;
    margin-top: 5rem;


`

export const IconContainer = styled.div`
    position: absolute;
    top: -2.5rem;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    background-color: var(--dark-violet);
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(min-width: 1440px) {
        left: 10%;
        margin: 0;
    }
`
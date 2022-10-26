import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    padding: 4rem 1.5rem 5rem 1.5rem;
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

    & article {
        z-index: 1;
    }

    & .cyan-line {
        position: absolute;
        top: 30%;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        z-index: 0;
        background-color: var(--cyan);
        width: 0.5rem;
        height: 30rem;
    }

    @media(min-width: 1440px) {

        padding-left: 5rem;
        padding-right: 5rem;
        padding-bottom: 32rem;

        h2 {
            font-size: 2.5rem;
            margin: 0;
        }

        & > p {
            font-size: 1.2rem;
            width: 50%;
            margin-left: auto;
            margin-right: auto;
        }

        .cyan-line {
            height: 0.5rem;
            width: 50rem;
            top: 60%;
            left: 20%;
        }

        .card-container {
            display: flex;
            justify-content: space-between;
            position: relative;
            
            h3 {
                text-align: left;
            }

            p {
                text-align: left;
            }
        }
    }
`
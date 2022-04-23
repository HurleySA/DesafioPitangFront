import styled from "styled-components";

export const Container = styled.section`
    padding: 3rem 1rem 0 2rem;
    min-height: calc(100vh - 100px);
    background: var(--color-gray-200);
    
`

export const ContainerNotFound = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--color-orange-400);
    padding: 6rem 0;
    color: var(--color-white);
    border-radius: .5rem;
    h1 {
        font-size: 10rem;
    }
    p {
        padding: 2rem;};

`
import styled from "styled-components";

export const Container = styled.section`
    padding: 3rem 1rem 0 2rem;
    min-height: calc(100vh - 100px);
    background: rgba(0,0,0,0.1);
    
`

export const ContainerNotFound = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #CA4F2F;
    padding: 6rem 0;
    color: #fafafa;
    border-radius: .5rem;
    h1 {
        font-size: 10rem;
    }
    p {
        padding: 2rem;};

`
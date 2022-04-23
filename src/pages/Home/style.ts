import styled from "styled-components";

export const HomeStyle = styled.section`
    background: var(--color-white);
    background: radial-gradient(circle, var(--color-orange-400) -250%, var(--color-white) 70%, var(--color-orange-400) 250%);
    width: 100%;
    min-height: 300px;



`

export const Container = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 500px;


    img{
        min-width: 300px;
    }
    
`

export const ButtonHome =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 1.2rem;
    gap: 1rem;

    @media (max-width: 600px) {
        padding: .5rem 1.5rem;
    }


    
    
`
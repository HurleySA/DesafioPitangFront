import styled from "styled-components";

export const HomeStyle = styled.section`
    background: rgb(202,79,47);
    background: radial-gradient(circle, rgba(250,250,250,1) -300%, rgba(202,79,47,1) 70%, rgba(250,250,250,1) 300%);
    width: 100%;
    min-height: 600px;


`

export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 600px;
    padding: 2rem;
    
`

export const ButtonHome =styled.div`
    display: flex;
    flex-direction: column;
    width: 12rem;
    justify-content: space-around;
    font-size: 1.2rem;

    
    button{
        cursor: pointer;
        padding: 1rem 1rem;
        font-size: 1rem;
        font-weight: 500;
        border: none;
        border-radius: .5rem;
        background: #fafafa;
        color: #CA4F2F;
        box-sizing: border-box;
        margin-bottom: .8rem;
    }
    
`
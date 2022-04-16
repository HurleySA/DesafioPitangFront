import styled from "styled-components";

export const HomeStyle = styled.section`
    background: #fafafa;
    background: radial-gradient(circle, #CA4F2F -250%, #fafafa 70%, #CA4F2F 250%);
    width: 100%;
    min-height: 300px;
    


`

export const Container = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 600px;


    img{
        min-width: 300px;
    }
    
`

export const ButtonHome =styled.div`
    display: flex;
    flex-direction: column;
    width: 10rem;
    justify-content: space-around;
    font-size: 1.2rem;

    
    button{
        cursor: pointer;
        padding: .5rem 1rem;
        font-size: 1rem;
        font-weight: 500;
        border: none;
        border-radius: .5rem;
        color: #fafafa;
        background: #CA4F2F;
        box-sizing: border-box;
        margin-bottom: .8rem;
    }
    
`
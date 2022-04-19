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


    
    button{
        cursor: pointer;
        padding: .5rem 1rem;
        font-size: 1.rem;
        font-weight: 500;
        border: none;
        border-radius: .5rem;
        color: #fafafa;
        background: #CA4F2F;
        box-sizing: border-box;
        margin-bottom: .8rem;
        padding: 1.5rem 3.5rem;
        box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.20);
    }

    @media (max-width: 600px) {
        padding: .5rem 1.5rem;
        }
    
`
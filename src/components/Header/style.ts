import styled from "styled-components";

export const HeaderStyle = styled.section`
    width: 100%;
    box-shadow: 0 100px 1px rgba(0,0,0,.1);
    background-color: #fafafa; 
    height: 100px;

    ul{
        display: flex;
        justify-content: space-between;
    }

    li{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0px;
    }
    img{
        height: 80px;
    }
    
    
`

export const ButtonLogin =styled.div`
    display: flex;
    width: 7rem;
    justify-content: space-around;
    font-size: 1.2rem;
    margin-right: 1rem;
    
    button{
        cursor: pointer;
        padding: 1rem 1rem;
        font-size: 1rem;
        font-weight: 500;
        border: none;
        border-radius: .5rem;
        background: #CA4F2F;
        color: #fafafa;
        box-sizing: border-box;
    }
    
`
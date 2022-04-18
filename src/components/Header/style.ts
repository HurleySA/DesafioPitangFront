import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 100%;
    background-color: #CA4F2F; 
    height: 100px;
   

    ul{
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
        
    }

    li{
        display: flex;
        align-items: center;
        padding: 10px 0px;
    }
    li img { 
        cursor: pointer;;
        width: 150px;
    }
    
    
`

export const ButtonLogin =styled.div`
    display: flex;
    font-size: 1.2rem;
    
    button{
        cursor: pointer;
        padding: 1rem 1rem;
        font-size: 1rem;
        font-weight: 500;
        border: none;
        border-radius: .5rem;
        color: #CA4F2F;
        background-color: #fafafa;
        box-sizing: border-box;
    }

    button:first-child{
        margin-right: 1rem;
    }
    
`
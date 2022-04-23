import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 100%;
    background-color: var(--color-orange-400); 
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

export const ContainerButton =styled.div`
    display: flex;
    font-size: 1.2rem;
    gap: 1rem;
    
`
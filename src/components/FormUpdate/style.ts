import styled from "styled-components";
export const ContainerForm = styled.div`
    display: flex;

    form{
        width: 800px;
    }

    label {
        margin: 0 auto;
        border: none;
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    input{
        color:var(--color-black);
        margin: 0 1rem;
        border: none;
        width: 90%;
        border-bottom: 1px solid var(--color-orange-400);
        font-size: 1rem;
        font-weight: 500;
        margin: .5rem 0;

        &:focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }

    #vaccinated{
        width: 20px;
        color: red;
    }
`
export const ContainerButtons = styled.div`
    padding: 1rem 0rem ;
    display: flex;
    width: 100%;
    justify-content: left;
    gap: 1rem;
`
export const Error = styled.div`
    background-color: var(--color-orange-400);
    color: var(--color-white);
    padding: .2rem .5rem;
    width: 15rem;
   
    border-radius: 0.5rem;
    
`
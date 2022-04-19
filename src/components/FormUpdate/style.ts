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
        color:#000000;
        margin: 0 1rem;
        border: none;
        width: 90%;
        border-bottom: 1px solid #CA4F2F;
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
    justify-content: space-evenly;
`
export const Button = styled.button`
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 500;
        border: none;
        border-radius: .5rem;
        color: #fafafa;
        background: #CA4F2F;
        box-sizing: border-box;
        padding: .5rem 1rem;
        width: 6rem;
        box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.20);
`
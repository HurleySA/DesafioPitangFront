import styled from "styled-components";

export const Container = styled.div`
    form{
        min-width: 400px;
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
        padding: 1rem 2rem;

        &:focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }

    }
`
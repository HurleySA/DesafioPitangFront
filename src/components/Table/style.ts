import styled from "styled-components";

export const TDButton = styled.button`
        display: flex;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 500;
        border: none;
        border-radius: .5rem;
        color: #fafafa;
        background: #CA4F2F;
        box-sizing: border-box;
        padding: .5rem 1rem;
        box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.20);

        @media (max-width: 600px) {
            span {
                display: none;
            }
        }
`
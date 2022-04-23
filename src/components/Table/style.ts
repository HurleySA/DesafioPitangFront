import styled from "styled-components";

export const Container = styled.div`
    table {
        
        thead {
            background-color: var(--color-orange-400);

            tr{
                th{
                    border-bottom: 1px solid var(--color-orange-400);
                    color: var(--color-white);
                }
            }
        }
        tbody {
            tr{
                td{
                    border-bottom: 1px solid var(--color-orange-400);
                    font-size: 1rem;
                    font-weight: 500;
                }
            }
        }
    }
`

export const TDButton = styled.button`
        display: flex;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 500;
        border: none;
        border-radius: .5rem;
        color: var(--color-white);
        background: var(--color-orange-400);
        box-sizing: border-box;
        padding: .5rem 1rem;
        box-shadow: 0px 5px 10px 0px var(--color-gray-400);

        @media (max-width: 600px) {
            span {
                display: none;
            }
        }
`
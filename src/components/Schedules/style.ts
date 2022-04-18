import styled from "styled-components";

export const Container = styled.section`
    padding-top: 3rem;
    background: #fafafa;
    background: radial-gradient(circle, #CA4F2F -250%, #fafafa 70%, #CA4F2F 250%);
    min-height: calc(100vh - 100px);
    background: rgba(0,0,0,0.1);

    table {
        
        thead {
            background-color: #CA4F2F;
            
            tr{
                th{
                    border-bottom: 1px solid #CA4F2F;
                    color: #fafafa;
                }
            }
        }
        tbody {
            tr{
                td{
                    border-bottom: 1px solid #CA4F2F;
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
        box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.20);
`

import styled from "styled-components";

export  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--color-white);
    padding: 4rem;
    border-radius: .5rem;
    box-shadow: -1px 1px 12px 0px var(--color-gray-400);
    -webkit-box-shadow: -1px 1px 12px 0px var(--color-gray-400);
    -moz-box-shadow: -1px 1px 12px 0px var(--color-gray-400);
    
`
export const AccordionWrapper = styled.section`
    background: var(--color-orange-400);
    height: auto;
    padding: 5rem 0rem;
    text-align: center;
    transition: all 0.6s ease-in-out;

    h2{   
        color: var(--color-white);
        text-transform: uppercase;
        font-weight: 900;
        padding:  0rem 0rem 3rem 0;
        font-size: 2.25rem;

    }
`
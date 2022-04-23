import styled from "styled-components";

export  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fafafa;
    padding: 4rem;
    border-radius: .5rem;
    box-shadow: -1px 1px 12px 0px rgba(0,0,0,0.54);
    -webkit-box-shadow: -1px 1px 12px 0px rgba(0,0,0,0.54);
    -moz-box-shadow: -1px 1px 12px 0px rgba(0,0,0,0.54);
    
`
export const AccordionWrapper = styled.section`
    background: rgba(202,79,47,1);
    height: auto;
    padding: 5rem 0rem;
    text-align: center;
    transition: all 0.6s ease-in-out;

    h2{   
        color: #fafafa;
        text-transform: uppercase;
        font-weight: 900;
        padding:  0rem 0rem 3rem 0;
        font-size: 2.25rem;

    }
`
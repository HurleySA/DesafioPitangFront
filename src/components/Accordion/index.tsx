import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    
`
const AccordionWrapper = styled.div<any>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(202,79,47,1);
    height: auto;
    padding: 8rem 0rem;
    text-align: center;
    transition: all 0.6s ease-in-out;

    h2{   
        color: #fafafa;
        text-transform: uppercase;
        font-weight: 900;
        margin: 0;
        font-size: 2.25rem;

    }
`;

const InternalWrapper = styled.div<any>`
    width: 100%;
    max-height: ${(props) => (props.open ? '100px' : '0')};
    font-size: .8rem;
    transition: all 0.4s ease-in-out;
    overflow: hidden;
`;
export const Accordion = ({ title, subTitle, btnText }: any) => {
    const [ open, setOpen ] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <AccordionWrapper> 
            <h2>Perguntas Frequentes</h2>
            <Container className="container">
                <button style={{background: 'yellow'}} onClick={handleClick}>
                        Como posso agendar?
                </button>
                <InternalWrapper open={open}  className="container" >
                    <h1>Basta clicar no link "pré-cadastro" para inserir seus dados, logo após, você encontrará o botão "agendar vacina" se houver oferta no momento, escolha o local e clique em agendar. Pronto, agora basta se dirigir ao ponto de vacinação.</h1>
                </InternalWrapper>
                
            </Container>
            
        </AccordionWrapper>
    );
};


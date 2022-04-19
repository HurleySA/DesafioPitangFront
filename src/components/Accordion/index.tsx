import { Accordion } from '@mantine/core';
import styled from "styled-components";

const Container = styled.div`
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
const AccordionWrapper = styled.section`
   
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
`;

export const Accordions = ({ title, subTitle, btnText }: any) => {
    return (
        <AccordionWrapper> 
            <h2>Perguntas Frequentes</h2>
            <Container className="container">
                <Accordion iconPosition="right">
                    <Accordion.Item label="Como posso agendar?">
                    Basta clicar no botão "agendar vacina" e informar seu nome, data de nascimento e data para vacinação. Se houver oferta no momento, basta se dirigir ao ponto de vacinação na data e horário solicitada.
                    </Accordion.Item>

                    <Accordion.Item label="Quais as regras de agendamento?">
                        Sim. Atualmente estamos fazendo agendamento com limite máximo por dia e também por hora.
                    </Accordion.Item>

                    <Accordion.Item label="Qual o limite máximo por dia?">
                        Limite por dia de até 20 pessoas.
                    </Accordion.Item>

                    <Accordion.Item label="Qual o limite máximo por hora?">
                        Assumindo que não há ainda 20 agendamentos no dia, há um limite de 2 agendamentos por hora.
                    </Accordion.Item>
                </Accordion>
                
            </Container>
            
        </AccordionWrapper>
    );
};


import { Accordion as MantineAccordion } from '@mantine/core';
import { AccordionWrapper, Container } from './style';

export const Accordion: React.FC = () => {
    return (
        <AccordionWrapper> 
            <h2>Perguntas Frequentes</h2>
            <Container className="container">
                <MantineAccordion iconPosition="right">
                    <MantineAccordion.Item label="Como posso agendar?">
                        Basta clicar no botão "agendar vacina" e informar seu nome, data de nascimento e data para vacinação. Se houver oferta no momento, basta se dirigir ao ponto de vacinação na data e horário solicitada.
                    </MantineAccordion.Item>
                    <MantineAccordion.Item label="Quais as regras de agendamento?">
                        Sim. Atualmente estamos fazendo agendamento com limite máximo por dia e também por hora.
                    </MantineAccordion.Item>
                    <MantineAccordion.Item label="Qual o limite máximo por dia?">
                        Limite por dia de até 20 pessoas.
                    </MantineAccordion.Item>
                    <MantineAccordion.Item label="Qual o limite máximo por hora?">
                        Assumindo que não há ainda 20 agendamentos no dia, há um limite de 2 agendamentos por hora.
                    </MantineAccordion.Item>
                </MantineAccordion>
            </Container>
        </AccordionWrapper>
    );
};


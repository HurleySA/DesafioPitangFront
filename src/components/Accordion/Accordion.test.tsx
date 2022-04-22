import { render, screen } from '@testing-library/react';
import React from 'react';
import { Accordions } from '.';

describe("Accordion component", () => {
    it("should render a accordion component", () => {
        render(<Accordions/>)
        expect(screen.getByText('Perguntas Frequentes')).toBeInTheDocument();
    })
    it("should render the first accordion item", () => {
        render(<Accordions/>)
        expect(screen.getByText('Como posso agendar?')).toBeInTheDocument();
    })
    it("should render the first accordion item content", () => {
        render(<Accordions/>)
        expect(screen.getByText('Basta clicar no botão "agendar vacina" e informar seu nome, data de nascimento e data para vacinação. Se houver oferta no momento, basta se dirigir ao ponto de vacinação na data e horário solicitada.'))
        .toBeInTheDocument();
    })
    it("should render the second accordion item", () => {
        render(<Accordions/>)
        expect(screen.getByText('Quais as regras de agendamento?')).toBeInTheDocument();
    })
    it("should render the second accordion item content", () => {
        render(<Accordions/>)
        expect(screen.getByText('Sim. Atualmente estamos fazendo agendamento com limite máximo por dia e também por hora.'))
        .toBeInTheDocument();
    })
    it("should render the thirth accordion item content", () => {
        render(<Accordions/>)
        expect(screen.getByText('Limite por dia de até 20 pessoas.')).toBeInTheDocument();
    })
    it("should render the fourth accordion item content", () => {
        render(<Accordions/>)
        expect(screen.getByText('Assumindo que não há ainda 20 agendamentos no dia, há um limite de 2 agendamentos por hora.'))
        .toBeInTheDocument();
    })
})
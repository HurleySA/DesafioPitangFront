import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { FormCreate } from './index.'

describe("Form Create component", () => {
    test('should render the create form', async () => {

        render(<BrowserRouter><FormCreate /></BrowserRouter>)
        expect(screen.getByRole('textbox', { name: /nome/i })).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Digite o nome')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Digite a data de Nascimento')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Digite a data de Vacinação')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /reset/i }),).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /agendar/i }),).toBeInTheDocument();
    
    })
})


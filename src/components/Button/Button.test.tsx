import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button } from '.';

describe("Button component", () => {
    it("should render a button component", () => {
        render(<Button theme='orange'>Button</Button>)
        expect(screen.getByText('Button')).toBeInTheDocument();
    })

    it("should render a orange button component correctly", () => {
        render(<Button theme='orange'>Button</Button>)
        expect(screen.getByRole('button', { name: /Button/i})).toHaveStyle({
            color:"#fafafa",
            "background-color":"#CA4F2F" 
        })
    })
    it("should render a white button component correctly", () => {
        render(<Button theme='white'>Button</Button>)
        expect(screen.getByRole('button', { name: /Button/i})).toHaveStyle({
            color:"#CA4F2F" ,
            "background-color":"#fafafa"
            
        })
    })

    it("should render a inline css button component correctly", () => {
        render(<Button theme='white' style={{"border-radius": "5rem"}} >Button</Button>)
        expect(screen.getByRole('button', { name: /Button/i})).toHaveStyle({
            "border-radius": "5rem"
        })
    })
    it("should render a inline css (color) button component correctly", () => {
        render(<Button theme='white' style={{"color": "#c80000"}} >Button</Button>)
        expect(screen.getByRole('button', { name: /Button/i})).toHaveStyle({
            color:"#C80000"
        })
    })
})
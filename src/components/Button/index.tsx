import React, { ReactNode } from 'react';
import { ButtonStyled } from "./style";

interface IProps {
    children: ReactNode;
    theme: "orange" | "white";
    [x:string]: any;
}

export const Button: React.FC<IProps> = ({children, theme,...rest}) => {
    return (
        <ButtonStyled theme={theme} {...rest}> 
            {children}
        </ButtonStyled>
    )
}
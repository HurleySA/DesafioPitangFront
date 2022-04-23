import React from 'react';
import { IButtonProps } from '../../common/dto';
import { ButtonStyled } from "./style";

export const Button: React.FC<IButtonProps> = ({children, theme,...rest}) => {
    return (
        <ButtonStyled theme={theme} {...rest}> 
            {children}
        </ButtonStyled>
    )
}
import { ReactNode } from "react";
import { ButtonStyled } from "./style";

interface IProps {
    children: ReactNode;
    theme: "orange" | "white";
    [x:string]: any;
}

export const Button = ({children, theme,...rest}: IProps) => {
    return (
        <ButtonStyled theme={theme} {...rest}> 
            {children}
        </ButtonStyled>
    )
}
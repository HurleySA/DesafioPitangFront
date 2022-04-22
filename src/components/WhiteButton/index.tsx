import { ReactNode } from "react";
import { Button } from "./style";

interface IProps {
    children: ReactNode,
    [x:string]: any;
}

export const WhiteButton = ({children, ...rest}: IProps) => {
    return (
        <Button {...rest}> 
            {children}
        </Button>
    )
}
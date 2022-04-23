import styled from "styled-components";
import { ButtonThemeProps } from "../../helpers/dto";

export const ButtonStyled = styled.button<ButtonThemeProps>`
        display: flex;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 500;
        border: none;
        border-radius: .5rem;
        color: ${(props) =>
                props.theme === "orange" ?  "#fafafa": "#CA4F2F"
        };;
        background-color: ${(props) =>
                props.theme === "orange" ?  "#CA4F2F" : "#fafafa"
        };
        box-sizing: border-box;
        padding: .5rem 1rem;
        box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.20);
`

import { Outlet, useNavigate } from "react-router-dom";
import { WhiteButton } from "../WhiteButton";
import { ContainerButton, HeaderStyle } from "./style";

export const Header = () => {
    let navigate = useNavigate();
    return(
        <HeaderStyle>
            <ul className="container">
                <li>
                    <img src="/vacina-logo-white.png" alt="Logo Vacina Pitang" onClick={() => navigate("/")}/>
                </li>
                <li>
                    <ContainerButton>
                        <WhiteButton style={{padding:"1rem 1.5rem"}} onClick={() => navigate("/list")}>Agendamentos</WhiteButton>
                        <WhiteButton onClick={() => navigate("/create")}>Agendar</WhiteButton>
                    </ContainerButton>
                    
                </li>
            </ul>
            <Outlet />
        </HeaderStyle>
    )
}
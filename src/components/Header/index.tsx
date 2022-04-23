import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { ContainerButton, HeaderStyle } from "./style";

export const Header: React.FC = () => {
    let navigate = useNavigate();
    return(
        <HeaderStyle>
            <ul className="container">
                <li>
                    <img src="/vacina-logo-white.png" alt="Logo Vacina Pitang" onClick={() => navigate("/")}/>
                </li>
                <li>
                    <ContainerButton>
                        <Button theme="white" style={{padding:"1rem 1.5rem"}} onClick={() => navigate("/list")}>Agendamentos</Button>
                        <Button theme="white" onClick={() => navigate("/create")}>Agendar</Button>
                    </ContainerButton>
                    
                </li>
            </ul>
            <Outlet />
        </HeaderStyle>
    )
}
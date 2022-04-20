import { useNavigate } from "react-router-dom";
import { ButtonLogin, HeaderStyle } from "./style";

export const Header = () => {
    let navigate = useNavigate();
    return(
        <HeaderStyle>
            <ul className="container">
                <li>
                    <img src="/vacina-logo-white.png" alt="Logo Vacina Pitang" onClick={() => navigate("/")}/>
                </li>
                <li>
                    <ButtonLogin>
                        <button onClick={() => navigate("/list")}>Agendamentos</button>
                        <button onClick={() => navigate("/create")}>Agendar</button>
                    </ButtonLogin>
                    
                </li>
            </ul>
        </HeaderStyle>
    )
}
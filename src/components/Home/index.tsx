import { useNavigate } from "react-router-dom";
import { Accordions } from "../Accordion";
import { ButtonHome, Container, HomeStyle } from "./style";

export function Home(){
    let navigate = useNavigate();
    return(
        <>
        <HomeStyle>
             <Container className="container">
                <img src="/vacina-logo.png" alt="Logo Vacina Pitang" />
                <ButtonHome>
                    <button onClick={() => navigate("/list")}>Listar Agendamentos</button>
                    <button onClick={() => navigate("/create")}>Agendar Vacina</button>
                </ButtonHome>
                
             </Container>
             <Accordions/>
        </HomeStyle>
        
        </>
        
        
    )
}
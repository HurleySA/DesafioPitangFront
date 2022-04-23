import { useNavigate } from "react-router-dom";
import { Accordion } from "../../components/Accordion";
import { Button } from "../../components/Button";
import { ButtonHome, Container, HomeStyle } from "./style";

export const Home: React.FC = () => {
    let navigate = useNavigate();
    return(
        <>
        <HomeStyle>
             <Container className="container">
                <img src="/vacina-logo.png" alt="Logo Vacina Pitang" />
                <ButtonHome>
                    <Button theme="orange" style={{padding: "1.5rem 3.5rem"}} onClick={() => navigate("/list")}>Listar Agendamentos</Button>
                    <Button theme="orange" style={{padding: "1.5rem 3.5rem"}} onClick={() => navigate("/create")}>Agendar Vacina</Button>
                </ButtonHome>
                
             </Container>
             <Accordion/>
        </HomeStyle>
        
        </>
        
        
    )
}
import { useNavigate } from "react-router-dom";
import { Accordions } from "../../components/Accordion";
import { OrangeButton } from "../../components/OrangeButton";
import { ButtonHome, Container, HomeStyle } from "./style";

export const Home = () => {
    let navigate = useNavigate();
    return(
        <>
        <HomeStyle>
             <Container className="container">
                <img src="/vacina-logo.png" alt="Logo Vacina Pitang" />
                <ButtonHome>
                    <OrangeButton style={{padding: "1.5rem 3.5rem"}} onClick={() => navigate("/list")}>Listar Agendamentos</OrangeButton>
                    <OrangeButton style={{padding: "1.5rem 3.5rem"}} onClick={() => navigate("/create")}>Agendar Vacina</OrangeButton>
                </ButtonHome>
                
             </Container>
             <Accordions/>
        </HomeStyle>
        
        </>
        
        
    )
}
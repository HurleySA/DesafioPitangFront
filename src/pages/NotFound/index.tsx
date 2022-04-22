import { useNavigate } from "react-router-dom";
import { ContainerButton } from "../../components/Header/style";
import { WhiteButton } from "../../components/WhiteButton";
import { Container, ContainerNotFound } from "./style";

export const NotFound: React.FC = () => {
    let navigate = useNavigate();
    return (
        <Container>
            <ContainerNotFound className="container">
                <h1>404</h1>
                <h2>Página não encontrada.</h2>
                <p>Aqui está onde pode procurar a vacina que perdeu:</p>

                <ContainerButton>
                        <WhiteButton onClick={() => navigate("/list")}>Agendamentos</WhiteButton>
                        <WhiteButton onClick={() => navigate("/create")}>Agendar</WhiteButton>
                    </ContainerButton>
            </ContainerNotFound>
        </Container>
        
    )
}
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { ContainerButton } from "../../components/Header/style";
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
                        <Button theme="white" onClick={() => navigate("/list")}>Agendamentos</Button>
                        <Button theme="white" onClick={() => navigate("/create")}>Agendar</Button>
                    </ContainerButton>
            </ContainerNotFound>
        </Container>
        
    )
}
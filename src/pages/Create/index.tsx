
import { FormCreate } from "../../components/FormCreate/index.";
import { Container } from "./style";





export const Create: React.FC = () => {
    
    return (
        <Container>
            <div className='container'>
              <h2>Novo Agendamento:</h2>
              <FormCreate/>
            </div>
        </Container>
    )
}
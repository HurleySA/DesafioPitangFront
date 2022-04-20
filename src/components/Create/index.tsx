
import { FormCreate } from "../FormCreate/index.";
import { Container } from "./style";





export const Create = () => {
    
    return (
        <Container>
            <div className='container'>
              <h2>Novo Agendamento:</h2>
              <FormCreate/>
            </div>
        </Container>
    )
}
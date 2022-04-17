import { Accordions } from "../Accordion"
import { ButtonHome, Container, HomeStyle } from "./style"

export function Home(){
    return(
        <>
        <HomeStyle>
             <Container className="container">
                <img src="/vacina-logo.png" alt="Logo Vacina Pitang" />
                <ButtonHome>
                    <button>Listar Agendamentos</button>
                    <button>Agendar Vacina</button>
                </ButtonHome>
                
             </Container>
             <Accordions/>
        </HomeStyle>
        
        </>
        
        
    )
}
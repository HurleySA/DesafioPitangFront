import { ButtonHome, Container, HomeStyle } from "./style"

export function Home(){
    return(
        <HomeStyle>
             <Container className="container">
                <img src="/vacina-logo.png" alt="Logo Vacina Pitang" />
                <ButtonHome>
                    <button>Listar agendamentos</button>
                    <button>Criar agendamento</button>
                </ButtonHome>
                
             </Container>
        </HomeStyle>
    )
}
import { ButtonHome, Container, HomeStyle } from "./style"

export function Home(){
    return(
        <HomeStyle>
             <Container className="container">
                <img src="/vacina-logo-white.png" alt="" />
                <ButtonHome>
                    <button>Listar agendamentos</button>
                    <button>Criar agendamento</button>
                </ButtonHome>
                
             </Container>
        </HomeStyle>
    )
}
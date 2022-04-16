import { ButtonLogin, HeaderStyle } from "./style"

export function Header(){
    return(
        <HeaderStyle>
            <ul className="container">
                <li>
                    <img src="/vacina-logo-white.png" alt="Logo Vacina Pitang" />
                </li>
                <li>
                    <ButtonLogin>
                        <button>Agendamentos</button> 
                        <button>Agendar</button>
                    </ButtonLogin>
                    
                </li>
            </ul>
        </HeaderStyle>
    )
}
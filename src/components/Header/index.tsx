import { ButtonLogin, HeaderStyle } from "./style"

export function Header(){
    return(
        <HeaderStyle>
            <ul className="container">
                <li>
                    <img src="/vacina-logo.png" alt="Logo Dogs" />
                </li>
                <li>
                    <ButtonLogin>
                        <button>Agendamentos</button> 
                    </ButtonLogin>
                    <ButtonLogin>
                        <button>Agendar</button> 
                    </ButtonLogin>
                </li>
            </ul>
        </HeaderStyle>
    )
}
{/* <HeaderStyle>
                <ul className="container">
                    <li> 
                        <Link to="/">
                            <img src="/vacina-logo.png" alt="Logo Dogs" />
                        </Link> 
                    </li>
                     <li> 
                         <ButtonLogin> 
                             <span><Link to="/">Teste</Link></span>  
                             <button onClick={() => {alert("clickou")}}>Sair</button>   
                         </ButtonLogin> 
                          
                    </li> 
    
                </ul>
        </HeaderStyle> */}
import { Modal, Table } from "@mantine/core";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { api } from "../../services/api";
import { Container, TDButton } from "./style";

 
interface ISchedule {
    id: string;
    name: string;
    born_date: Date;
    vaccination_date: Date;
    vaccinated: boolean;
    conclusion?: string;
    created_at: Date;
}

export function Schedules(){
    const [schedules, setSchedules] = useState<ISchedule[]>([]);
    
    const [startDate, setStartDate] = useState(new Date());
    const [modalOpened, setModalOpened] = useState(false);
    useEffect(() => {
        const getDate = async ()=> {
            const data = await fetch("https://desafio-pitang-backend.herokuapp.com/api/vaccineSchedule");
            const json = await data.json() 
            setSchedules(json) 
            localStorage.setItem("schedules", JSON.stringify(schedules))
            
        }
        getDate()
        
    },[schedules])
    

    const postVaccineSchedule = async () => {
        try { 
          if(startDate){
            const newDate = startDate.toISOString();
            await api.post("/vaccineSchedule", {
              name:"Fruta",
              born_date:"1997-06-30T07:38:00.000Z",
                vaccination_date:newDate
            } )
          }
        } catch(err:any){
          console.log(err)
        }
      }
  
      const filterPassedTime = (time:Date) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
    
        return currentDate.getTime() < selectedDate.getTime();
      };
    return (
        <Container >
            <Table className="container">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Data de Nascimento</th>
                        <th>Data de Vacinação</th>
                        <th>Vacinado</th>
                        <th>Conclusão</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {schedules.map((schedule, index)=> (
                    <tr key={index}>
                        <td>{schedule.name}</td>
                        <td>{format(new Date(schedule.born_date), "dd/MM/yyyy")}</td>
                        <td>{format(new Date(schedule.vaccination_date), "dd/MM/yyyy hh:mm:ss")}</td>
                        <td>{schedule.vaccinated ? "Sim" : "Não"}</td>
                        <td>{schedule.conclusion ? schedule.conclusion : "Ainda não vacinado"}</td>
                        <td><TDButton onClick={() => setModalOpened(true)}>Editar <FaEdit/></TDButton></td>
                    </tr>))}
                    

                </tbody>
            </Table>
            <Modal
                opened={modalOpened}
                onClose={() => setModalOpened(false)}
                title="Informe novos dados para usuário"
            >
                
            </Modal>
        </Container>
        

    )
}
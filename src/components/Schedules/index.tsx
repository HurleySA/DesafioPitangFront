import { Modal, Table } from "@mantine/core";
import { addHours, format } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FormUpdate } from "../FormUpdate";
import { Container, TDButton } from "./style";

 
interface ISchedule {
    id: string;
    name: string;
    born_date: Date;
    vaccination_date: Date;
    vaccinated: boolean;
    conclusion: string;
    created_at: Date;
}

export function Schedules(){
    const [schedules, setSchedules] = useState<ISchedule[]>([]);

    const [modalSchedule, setModalSchedule] = useState<ISchedule>({} as ISchedule); 
    const [modalOpened, setModalOpened] = useState(false);
    

    const getDate = useCallback(
        async () => {
          const data = await fetch("https://desafio-pitang-backend.herokuapp.com/api/vaccineSchedule");
          const json = await data.json() 
          localStorage.setItem("schedules",JSON.stringify(json))
          setSchedules(json) 
          
        },
        [],
      )
    useEffect(() => {
        const updateList = async () => {
            const localData = localStorage.getItem("schedules");
            if(!localData){
                await getDate();
            }else{
                setSchedules(JSON.parse(localData));
        }
        }
        updateList();
        
    },[getDate])
    
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
                        <td>{format(addHours(new Date(schedule.vaccination_date), new Date(schedule.vaccination_date).getTimezoneOffset() / 60 ), "dd/MM/yyyy HH:mm:ss")}</td>
                        <td>{schedule.vaccinated ? "Sim" : "Não"}</td>
                        <td>{schedule.vaccinated ? schedule.conclusion || "Paciente vacinado": "Ainda não vacinado"}</td>
                        <td><TDButton onClick={() => {
                            setModalOpened(true)
                            setModalSchedule(schedule)
                        }}><span>Editar</span> <FaEdit/></TDButton></td>
                        
                    </tr>))}
                    

                </tbody>
                <Modal
                        size={500}
                        opened={modalOpened}
                        onClose={() => setModalOpened(false)}
                        title="Informe novos dados para atualização"
            
                    >
                        <FormUpdate modalSchedule={modalSchedule} getData={getDate} setModalOpened={setModalOpened}/>
                    </Modal>
            </Table>
            
        </Container>
        

    )
}
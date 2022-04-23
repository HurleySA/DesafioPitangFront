import { Modal, Table } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { addHours, format } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { ISchedule } from "../../helpers/dto";
import { api } from "../../services/api";
import { Button } from "../Button";
import { FormUpdate } from "../FormUpdate";

export const ScheduleTable = () => {
    const [schedules, setSchedules] = useState<ISchedule[]>([]);

    const [modalSchedule, setModalSchedule] = useState<ISchedule>({} as ISchedule); 
    const [modalOpened, setModalOpened] = useState(false);
    

    const getData = useCallback(
        async () => {
          const data = await api.get("/");
          const json = data.data;
          localStorage.setItem("schedules",JSON.stringify(json))
          setSchedules(json) 
          
        },
        [],
      )

    useEffect(() => {
        const updateList = async () => {
            const localData = localStorage.getItem("schedules");
            if(!localData){
                await getData();
            }else{
                setSchedules(JSON.parse(localData));
        }
        }
        updateList();
        
    },[getData])

    

    const deleteVaccineSchedule = async (id: string) => {
        await api.delete(`/${id}`)
        showNotification({
          title:"Sucess:",
          message: "Yeah! Agendamento deletado.",
          styles: (theme) => ({
            root: {
              borderColor: "#21e431",
              '&::before': { backgroundColor: "#21e431" },
            },
          })
        }) 
        localStorage.removeItem("schedules")
        await getData();
    }

    const handleDelete = async (id: string) => {
        await deleteVaccineSchedule(id)
    }
    const handleUpdate = async (schedule: ISchedule) => {
        setModalOpened(true)
        setModalSchedule(schedule)
    }
    return (
        <Table className="container">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Data de Nascimento</th>
                        <th>Data de Vacinação</th>
                        <th>Vacinado</th>
                        <th>Conclusão</th>
                        <th></th>
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
                        <td>
                            <Button theme="orange" onClick={() => handleUpdate(schedule)}>
                                <FaEdit/>
                            </Button>
                        </td>
                        <td><Button theme="orange" onClick={() => handleDelete(schedule.id)}>
                                <FaTrashAlt/>
                            </Button></td>
                        
                    </tr>))}
                    
                </tbody>
                <Modal
                        size={500}
                        opened={modalOpened}
                        onClose={() => setModalOpened(false)}
                        title="Informe novos dados para atualização"
                >
                    <FormUpdate modalSchedule={modalSchedule} getData={getData} setModalOpened={setModalOpened}/>
                </Modal>
            </Table>
    )
}



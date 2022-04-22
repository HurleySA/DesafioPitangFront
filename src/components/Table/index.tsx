import { Modal, Table } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { addHours, format } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { api } from "../../services/api";
import { FormUpdate } from "../FormUpdate";
import { OrangeButton } from "../OrangeButton";

interface ISchedule {
    id: string;
    name: string;
    born_date: Date;
    vaccination_date: Date;
    vaccinated: boolean;
    conclusion: string;
    created_at: Date;
}

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
                            <OrangeButton onClick={() => {
                            setModalOpened(true)
                            setModalSchedule(schedule)
                        }}>
                                <FaEdit/>

                            </OrangeButton>
                        </td>
                        <td><OrangeButton onClick={() => handleDelete(schedule.id)}>
                                <FaTrashAlt/>
                            </OrangeButton></td>
                        
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



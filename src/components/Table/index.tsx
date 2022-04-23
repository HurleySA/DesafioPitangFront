import { Modal, Table } from "@mantine/core";
import { addHours, format } from "date-fns";
import { useContext, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { ISchedule } from "../../common/dto";
import { SchedulesContext } from "../../contexts/SchedulesContext";
import { Button } from "../Button";
import { FormUpdate } from "../FormUpdate";
import { Container } from "./style";

export const ScheduleTable: React.FC = () => {
    const [modalSchedule, setModalSchedule] = useState<ISchedule>({} as ISchedule); 
    const [modalOpened, setModalOpened] = useState(false);

    const {deleteVaccineSchedule, schedules} = useContext(SchedulesContext);
    const handleDelete = async (id: string) => {
        await deleteVaccineSchedule(id)
    }
    const handleUpdate = async (schedule: ISchedule) => {
        setModalOpened(true)
        setModalSchedule(schedule)
    }
    return (
        <Container>
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
                    <FormUpdate modalSchedule={modalSchedule} setModalOpened={setModalOpened}/>
                </Modal>
            </Table>
        </Container>
        
    )
}



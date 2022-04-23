import { showNotification } from "@mantine/notifications";
import { api } from "../services/api";
import { CreateFormValues, UpdateFormValues } from "./dto";

const putVaccineSchedule = async (id: string, {name, born_date, vaccination_date, vaccinated, conclusion }: UpdateFormValues) => {

    const config = { headers: {'Content-Type': 'application/json'} };
    if(!vaccinated && !conclusion) conclusion = "Ainda não vacinado."
    await api.put(`/${id}`,{
      name,
      born_date,
      vaccination_date,
      vaccinated, 
      conclusion
    },config)
    showNotification({
      title:"Sucess:",
      message: "Yeah! Atualização feita. ",
      styles: () => ({
        root: {
          borderColor: "#21e431",
          '&::before': { backgroundColor: "#21e431" },
        },
      })
    }) 
}

const postVaccineSchedule = async ({name, born_date, vaccination_date}: CreateFormValues) => {
    const config = { headers: {'Content-Type': 'application/json'} };
    await api.post(`/`,{
      name,
      born_date,
      vaccination_date,
    },config)
    showNotification({
      title:"Sucess:",
      message: "Yeah! Agendamento realizado.",
      styles: (theme) => ({
        root: {
          borderColor: "#21e431",
          '&::before': { backgroundColor: "#21e431" },
        },
      })
    })      
}

export { putVaccineSchedule, postVaccineSchedule };


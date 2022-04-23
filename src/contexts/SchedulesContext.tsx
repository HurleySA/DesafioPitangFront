import { showNotification } from "@mantine/notifications";
import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { CreateFormValues, ISchedule, UpdateFormValues } from "../common/dto";
import { api } from "../services/api";

interface childrenProps {
    schedules: ISchedule[],
    setSchedules: React.Dispatch<React.SetStateAction<ISchedule[]>>,
    putVaccineSchedule: (id: string, { name, born_date, vaccination_date, vaccinated, conclusion }: UpdateFormValues) => Promise<void>;
    postVaccineSchedule: ({ name, born_date, vaccination_date }: CreateFormValues) => Promise<void>;
    deleteVaccineSchedule: (id: string) => Promise<void>;
    getVaccineSchedules: () => Promise<void>
}

export const SchedulesContext = createContext<childrenProps>({} as childrenProps);

interface ProviderProps {
    children: ReactNode;
}
export const ContextStorage: React.FC<ProviderProps> = ({children}) => {
    const [schedules, setSchedules] = useState<ISchedule[]>([]);

    const getVaccineSchedules = useCallback(
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
                await getVaccineSchedules();
            }else{
                setSchedules(JSON.parse(localData));
        }
        }
        updateList();
        
    },[getVaccineSchedules])


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
        await getVaccineSchedules();
    }

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
        await getVaccineSchedules();
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
        await getVaccineSchedules();    
    }

    return(
        <SchedulesContext.Provider value={{schedules, setSchedules,putVaccineSchedule,postVaccineSchedule, deleteVaccineSchedule, getVaccineSchedules}}>
            {children}
        </SchedulesContext.Provider>
    )
}
import { ReactNode } from "react";

interface ISchedule {
    id: string;
    name: string;
    born_date: Date;
    vaccination_date: Date;
    vaccinated: boolean;
    conclusion: string;
    created_at: Date;
  }
  
interface UpdateFormValues {
    name?: string;
    born_date?: Date;
    vaccination_date?: Date;
    vaccinated: boolean;
    conclusion: string;
}

interface CreateFormValues {
    name: string;
    born_date?: Date;
    vaccination_date?: Date;
}

interface ButtonThemeProps {
    theme: "orange" | "white";
}

interface IFormUpdatePros {
    modalSchedule:ISchedule, 
    setModalOpened: (value: React.SetStateAction<boolean>) => void
}

interface IButtonProps {
    children: ReactNode;
    theme: "orange" | "white";
    [x:string]: any;
}

interface ISchedulesContextProps {
    schedules: ISchedule[],
    setSchedules: React.Dispatch<React.SetStateAction<ISchedule[]>>,
    putVaccineSchedule: (id: string, { name, born_date, vaccination_date, vaccinated, conclusion }: UpdateFormValues) => Promise<void>;
    postVaccineSchedule: ({ name, born_date, vaccination_date }: CreateFormValues) => Promise<void>;
    deleteVaccineSchedule: (id: string) => Promise<void>;
    getVaccineSchedules: () => Promise<void>
}

interface ContextStorageProps {
  children: ReactNode;
}

export type { ISchedule, UpdateFormValues, CreateFormValues, ButtonThemeProps, IFormUpdatePros, IButtonProps, ISchedulesContextProps, ContextStorageProps };


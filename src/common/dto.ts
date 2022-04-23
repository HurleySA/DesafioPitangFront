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


export type { ISchedule, UpdateFormValues, CreateFormValues, ButtonThemeProps, IFormUpdatePros };


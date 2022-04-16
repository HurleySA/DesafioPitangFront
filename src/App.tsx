
import { AppShell, Header, Navbar } from '@mantine/core';
import { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import { api } from './services/api';
function App() {
  const [itens, setItens] = useState([] as any[]);
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    const getDate = async ()=> {
      const data = await fetch("https://desafio-pitang-backend.herokuapp.com/api/vaccineSchedule");
      const json = await data.json() 
      setItens(json) 
    }
    getDate()
  
  },[])


    const postVaccineSchedule = async () => {
      try { 
        if(startDate){
          const newDate = startDate.toISOString();
          const response = await api.post("/vaccineSchedule", {
            name:"Fruta",
            born_date:"1997-06-30T07:38:00.000Z",
	          vaccination_date:newDate
          } )
        }
      } catch(err:any){
        console.log(err)
      }
    }

  return (
    <div className="App">
      <AppShell
      padding="md"
      navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
      header={<Header height={60} p="xs">{/* Header content */}</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} onBlur={postVaccineSchedule} />
        {itens.map((item, index) => <li key={index}>
          {item.name}
        </li>)}
    </AppShell>
        

    </div>
  );
}

export default App;

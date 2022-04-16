

import { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Header } from './components/Header';
import { Home } from './components/Home';
import { api } from './services/api';
import { GlobalStyle } from './style/global';
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

  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Home/>
      <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} onBlur={postVaccineSchedule} />
        {itens.map((item, index) => <li key={index}>
          {item.name}
        </li>)}
    </div>
  );
}

export default App;

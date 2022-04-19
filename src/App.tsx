

import "react-datepicker/dist/react-datepicker.css";
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Schedules } from "./components/Schedules";
import { GlobalStyle } from './style/global';
function App() {
  

  return (
    <div className="App">
      <GlobalStyle/>
      <ToastContainer/>
      <Header/>
      <Routes>
        <Route  path="/">
          <Route element={<Home />} index/>
          <Route path="list" element={<Schedules/>}/>
          <Route path="*" element={<h1>Not Found</h1>}/>
        </Route> 
      </Routes>
    </div>
  );
}

export default App;

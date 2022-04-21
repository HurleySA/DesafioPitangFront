

import "react-datepicker/dist/react-datepicker.css";
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { Header } from './components/Header';
import { Create } from "./pages/Create";
import { Home } from './pages/Home';
import { Schedules } from "./pages/Schedules";
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
          <Route path="create" element={<Create/>}/>
          <Route path="*" element={<h1>Not Found</h1>}/>
        </Route> 
      </Routes>
    </div>
  );
}

export default App;

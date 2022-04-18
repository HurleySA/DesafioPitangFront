

import "react-datepicker/dist/react-datepicker.css";
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Schedules } from "./components/Schedules";
import { GlobalStyle } from './style/global';
function App() {
  

  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route  path="/">
          <Route element={<Home />} index/>
          <Route path="create" element={<Schedules/>}/>
          <Route path="*" element={<h1>Not Found</h1>}/>
        </Route> 
      </Routes>
    </div>
  );
}

export default App;



import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer } from "react-toastify";
import { Header } from './components/Header';
import { Router } from "./routes";
import { GlobalStyle } from './style/global';
function App() {
  

  return (
    <div className="App">
      <GlobalStyle/>
      <ToastContainer/>
      <Header/>
      <Router/>
    </div>
  );
}

export default App;

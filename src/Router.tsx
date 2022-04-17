import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";


const Router = () => {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Header />}></Route>
        <Route path="/*" element={<h1>Not Found</h1>}></Route>
      </Routes>
      
    </BrowserRouter>
  );
};

export default Router;
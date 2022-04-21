import { Route, Routes } from "react-router-dom"
import { Create } from "../pages/Create"
import { Home } from "../pages/Home"
import { Schedules } from "../pages/Schedules"

export const Router: React.FC = () => {
    return (
        <Routes>
        <Route  path="/">
          <Route element={<Home />} index/>
          <Route path="list" element={<Schedules/>}/>
          <Route path="create" element={<Create/>}/>
          <Route path="*" element={<h1>Not Found</h1>}/>
        </Route> 
      </Routes>
    )
}
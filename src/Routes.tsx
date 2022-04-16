import { BrowserRouter, Route, Routes } from "react-router-dom";
export const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/">
                <h1>Home Page</h1>
            </Route>
            <Route path="/create">
                <h1>Create new Schedule</h1>
            </Route>
            <Route path="/list">
                <h1>List All Schedule</h1>
            </Route>
            <Route path="*">
                <h1>not found</h1>
            </Route>

        </Routes>
      </BrowserRouter>
    );
  };
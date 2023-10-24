import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Atv01 from "./pages/Aula_1/Atv01";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route component = { <Home  />} path="/"  />
                <Route component = { <Atv01 /> } path="./Aula_1/atv01" />
            </Routes>
          </BrowserRouter>
    )
}


export default Router;


import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Atividade01 from "./Atividade01";
import Atividade02 from "./Atividade02";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route component = { <Home  />} path="/"  />
                <Route component = { <Atividade01 /> } path="./Atividade01" />
                <Route component = { <Atividade02 /> } path="./Atividade02" />
            </Routes>
          </BrowserRouter>
    )
}


export default Router;



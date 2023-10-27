import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Atividade01 from "./Atividade01";
import Atividade02 from "./Atividade02";

const MinhaRotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element = { <Home />} path="/"  />
                <Route element = { <Atividade01 /> } path="/Atividade01" />
                <Route element = { <Atividade02 /> } path="/Atividade02" />
            </Routes>
          </BrowserRouter>
    )
}


export default MinhaRotas;



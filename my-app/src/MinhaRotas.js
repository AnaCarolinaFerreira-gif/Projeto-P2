import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Atividade01 from "./Atividade01";
import Atividade02 from "./Atividade02";
import Atividade03 from "./Atividade03"; 
import Atividade04 from "./Atividade04"; 
import Atividade05 from "./Atividade05"; 

const MinhaRotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element = { <Home />} path="/"  />
                <Route element = { <Atividade01 /> } path="/Atividade01" />
                <Route element = { <Atividade02 /> } path="/Atividade02" />
                <Route element = { <Atividade03 /> } path="/Atividade03" />
                <Route element = { <Atividade04 /> } path="/Atividade04" />
                <Route element = { <Atividade05 /> } path="/Atividade05" />
            </Routes>
          </BrowserRouter>
    )
}


export default MinhaRotas;



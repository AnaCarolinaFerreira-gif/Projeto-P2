import { BrowserRouter,Route, Routes } from "react-router-dom";

import Home from "./Home";
import Atividade01 from "./Atividade 01";
import Atividade02 from "./Atividade 02";

export default function MinhasRotas()
{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Atividade 01" element={<Atividade01/>} />
            <Route path="/Atividade 02" element={<Atividade02/>} />
        </Routes>
        </BrowserRouter>
    );
}
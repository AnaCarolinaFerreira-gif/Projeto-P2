import {Link} from "react-router-dom";
import Letreiro from "./Letreiro";
import Relogio from "./Relogio";


function Atividade01(){
    return(
        <>
            <h1>Atividade 01</h1>
            <Letreiro />
            <hr />
            <Relogio />
            
            <Link to="/">Retornar</Link>
        </>

    );
}

export default Atividade01;

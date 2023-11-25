import { Link } from "react-router-dom";
import Contador from "./components/Contador";


function Atividade02(){
    return(
        <>
            <Contador />
            <Link to="/">Retornar</Link>
        </>
    );
}

export default Atividade02;
import Calculadora from "./components/Calculadora";
import {Link} from "react-router-dom";


export default function Atividade04() {
    return(
        <>
            <Calculadora /> 
            <Link to="/">Retornar</Link>

        </>
        
        
    )
}
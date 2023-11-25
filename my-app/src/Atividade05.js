import MemoryGame from "./components/JogoMemoria";
import {Link} from "react-router-dom";


export default function Atividade05() {
    return(
        <>
            <MemoryGame />
            <Link to="/">Retornar</Link>
        </>
        
        
    );
}
import Gallery from "./components/Gallery";
import {Link} from "react-router-dom";

export default function Atividade03() {
    return(
        <>
            <Gallery />
            <Link to="/">Retornar</Link>
        </>
    );
}
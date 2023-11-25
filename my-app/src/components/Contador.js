import { useState, React } from "react";

import Button from './Button';
import './css/Contador.css';


export default function Contador() {

  const [total, setTotal] = useState(0);
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const handleMulheresChange = (value) => {
    if (value < 0) {
      value = 0;
    }
    setMulheres(value);
    setTotal(value + homens);
  };

  const reset = () => {
    setHomens(0);
    setMulheres(0);
    setTotal(0);
  }


  const handleHomensChange = (value) => {
    if (value < 0) {
      value = 0;
    }
    setHomens(value);
    setTotal(value + mulheres);
  };

  
 
  return (
    <div className="contador">
      <h1> Total de Pessoas</h1>
      <button onClick={reset} id="reset">
        <img src={btnReset} alt="Reset" />
      </button>
      <span id="total" className="value">{total}</span>
      <div className="pessoas">
        <div className="pessoas-contador">
          <img className="avatar" src={Homem} alt="Avatar Homem" />
          <Button value={homens} onChange={handleHomensChange} />
          <label>Homens</label>
          <span className="value">{homens}</span>
        </div>
        <div className="pessoas-contador">
          <img className="avatar" src={Mulher} alt="Avatar Mulher" />
          <Button value={parseInt(mulheres)} onChange={handleMulheresChange} />
          <label>Mulheres</label>
          <span className="value">{mulheres}</span>
        </div>
      </div>
    </div>
  );

  





}




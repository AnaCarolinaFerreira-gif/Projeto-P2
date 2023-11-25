import React, { useEffect, useState } from 'react';
import './css/Relogio.css';


function Relogio() {

  const [horas, setHour] = useState(0);
  const [minutos, setMinute] = useState(0);
  const [segundos, setSecond] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      const date = new Date();
      setHour(date.getHours());
      setMinute(date.getMinutes());
      setSecond(date.getSeconds());
    }, 1000);
    
    return () => clearInterval(interval);

  }, [horas, minutos, segundos]);
  return (
    <div className="relogio-container">
      <h1>Relógio Digital</h1>
      <div className="relogio">
        {horas}:{minutos}:{segundos}
      </div>
    </div>
  );
}

export default Relogio;

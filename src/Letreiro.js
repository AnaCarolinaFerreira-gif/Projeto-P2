import React, { useState, useEffect } from 'react';

function Letreiro() {
  const texto = "Conheça a Fatec";
  const [exibicao, setExibicao] = useState('');
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (indice < texto.length) {
        setExibicao(texto.slice(0, indice + 1));
        setIndice(indice + 1);
      } else {
        setExibicao('');
        setIndice(0);
      }
    }, 150);

    return () => {
      clearInterval(typingInterval);
    };
  }, [indice, texto]);

  return (
    <div>
      <h1>Letreiro Digitando</h1>
      <div className="letreiro">
        {exibicao}
      </div>
    </div>
  );
}

export default Letreiro;

import React, { useState, useEffect } from 'react';
import './css/JogoMemoria.css';
import flipSound from './sounds/flip.wav';
import correctSound from './sounds/correct.wav';
import wrongSound from './sounds/wrong.mp3';
import backgroundMusic from './sounds/background.mp3';
import victorySound from './sounds/victory.mp3';

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const generateCards = () => {
  const symbols = ['🍎', '🍌', '🍒', '🍓', '🍇', '🍊', '🍋', '🍍'];
  const cards = [...symbols, ...symbols];
  return shuffleArray(cards);
};

const initialGameState = {
  cards: generateCards(),
  flippedIndices: [],
  matchedPairs: [],
};

const MemoryGame = () => {
  const [gameState, setGameState] = useState(initialGameState);
  const [flipAudio] = useState(new Audio(flipSound));
  const [correctAudio] = useState(new Audio(correctSound));
  const [wrongAudio] = useState(new Audio(wrongSound));
  const [backgroundMusicAudio] = useState(new Audio(backgroundMusic));
  const [victoryAudio] = useState(new Audio(victorySound));

  useEffect(() => {
    backgroundMusicAudio.loop = true;
    backgroundMusicAudio.play();

    return () => {
      backgroundMusicAudio.pause();
    };
  }, [backgroundMusicAudio]);

  const handleCardClick = (index) => {
    if (gameState.flippedIndices.length < 2 && !gameState.flippedIndices.includes(index)) {
      setGameState((prev) => ({ ...prev, flippedIndices: [...prev.flippedIndices, index] }));
      flipAudio.play();
    }
  };

  useEffect(() => {
    if (gameState.flippedIndices.length === 2) {
      const [index1, index2] = gameState.flippedIndices;
      if (gameState.cards[index1] === gameState.cards[index2]) {
        setGameState((prev) => ({
          ...prev,
          matchedPairs: [...prev.matchedPairs, gameState.cards[index1]],
        }));
        correctAudio.play();
      } else {
        wrongAudio.play();
      }
      setTimeout(() => {
        setGameState((prev) => ({ ...prev, flippedIndices: [] }));
      }, 1000);
    }
  }, [gameState.flippedIndices, gameState.cards, correctAudio, wrongAudio]);

  useEffect(() => {
    if (gameState.matchedPairs.length === gameState.cards.length / 2) {
      // Jogo ganho
      backgroundMusicAudio.pause();
      victoryAudio.play();
      alert('Parabéns! Você ganhou!');
      // Reiniciar o jogo
      setGameState(initialGameState);
      backgroundMusicAudio.play();
    }
  }, [
    gameState.matchedPairs,
    gameState.cards,
    backgroundMusicAudio,
    victoryAudio,
    initialGameState,
  ]);

  const handleRestart = () => {
    // Reiniciar o jogo
    setGameState(initialGameState);
    backgroundMusicAudio.play();
  };

  const renderCard = (symbol, index) => {
    const isFlipped = gameState.flippedIndices.includes(index) || gameState.matchedPairs.includes(symbol);
    return (
      <div
        key={index}
        className={`card ${isFlipped ? 'flipped' : ''}`}
        onClick={() => handleCardClick(index)}
      >
        {isFlipped ? symbol : '❓'}
      </div>
    );
  };

  return (
    <div className="App">
      <div className="card-container">
        {gameState.cards.map((symbol, index) => renderCard(symbol, index))}
      </div>
      <div className="button-container">
        <button className="button" onClick={handleRestart}></button>
      </div>
    </div>
  );
};

export default MemoryGame;

import React from 'react';
import { useSelector } from 'react-redux';
import ScoreBoardComponent from './ScoreBoardComponent';
import UserInputComponent from './UserInputComponent';
import '../css/Bowling.css';
import Header from './Header';

const BowlingGameContainer = () => {
  const {
    frames,
    cumulativeScores,
    gameOver,
    pins,
    rolls,
  } = useSelector(state => state.game);

  const totalScore = cumulativeScores.slice(-1)[0];

  return (
    <div className='Game'>
      <Header/>
      <UserInputComponent
        gameOver={gameOver}
        lastRoll={pins.slice(-1)[0]}
        rolls={rolls}
      />
      <ScoreBoardComponent
        frames={frames}
        cumulativeScores={cumulativeScores}
        totalScore={totalScore}
      />
      {gameOver && (
        <div className='Game-over-text'>
          <h1>Game Over</h1>
          <h2>You Scored: {totalScore}</h2>
        </div>
      )}
    </div>
  );
};

export default BowlingGameContainer;

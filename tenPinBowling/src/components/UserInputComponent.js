import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../css/UserInput.css';
import {actions} from "../reducer/BowlingReducer"; // Adjust the import path based on your project structure

const UserInputComponent = (props) => {
  const dispatch = useDispatch();
  const [scoreValue, setScoreValue] = useState('');

  const handleSubmit = () => {
    handleClick(scoreValue);
  };

  const handleClick = (pins) => {
    const { lastRoll } = props;

    if (scoreValue <= 10 && !disableButton(Number(pins))) {
      dispatch(actions.enterScore(Number(pins)));
    } else {
      if (scoreValue > 10) {
        alert("You cannot enter a value greater than 10");
      } else {
        alert(`Please enter a number less than or equal to ${10 - lastRoll}`);
      }
    }
  };

  const disableButton = (number) => {
    const { gameOver, lastRoll, rolls } = props;

    if (gameOver) return true;
    if (rolls % 2 === 0 || rolls === 0) return false;
    if (rolls === 19 && lastRoll === 10) return false;
    return lastRoll + number > 10;
  };

  const handleRestart = () => {
    dispatch(actions.restart());
    setScoreValue(0);
  };

  return (
    <div className='Container'>
        <img className='image_style' src="https://images.pexels.com/photos/7429599/pexels-photo-7429599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Bowling Logo"/>
      <div>
        <input
          placeholder='Enter your score'
          value={scoreValue}
          onChange={(e) => setScoreValue(e.target.value)}
        />
        <button onClick={()=>{handleSubmit();setScoreValue('')}} >Submit</button>
      </div>
      {props.rolls > 0 && (
        <button
          className={'Restart'}
          
          onClick={handleRestart}
        >
          Restart
        </button>
      )}
    </div>
  );
};

export default UserInputComponent;

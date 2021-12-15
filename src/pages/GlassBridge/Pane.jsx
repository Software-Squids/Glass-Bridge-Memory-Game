import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled, { keyframes } from 'styled-components';
import Button from '@mui/material/Button';

import { rows, turn, round, board } from '../../states';
import { userState } from '../../states/user';
import { highscoresState } from '../../states/highscores';
import { authHeader } from '../../components/Dialogs/cookieOperations';


const colorFlash = keyframes`
  0% {
    background-color: #FFFFFF80;
  }
  
  50% {
    background-color: #DF245C;
  }

  100% {
    background-color: #FFFFFF80;
  }
`

const colorDark = keyframes`
  0% {
    background-color: #FFFFFF80;
  }

  50% {
    background-color: black;
  }

  100% {
    background-color: #FFFFFF80;
  }
`

const StyledPane = styled(Button)`
  background-color: ${props => props.selected ? "#DF245C" : "#FFFFFFC8"};
  color: ${props => props.selected ? "#FFFFFF" : "000000"};
  min-width: 60px;
  min-height: 60px;
  border-radius: 0;
  margin: 1px;

  &:disabled {
    background-color: ${props => props.selected ? "#DF245C" : "#FFFFFF80"};
    color: ${props => props.selected ? "#FFFFFF" : "000000"};
  }

  &.solid {
    animation: ${colorFlash} 2s ease;
  }

  &.fragile {
    animation: ${colorDark} 2s ease;
  }
`;


function Pane({
  name,
  value,
  play,
  className
}) {
  const row = parseInt(name.split('_')[1]);
  const col = parseInt(name.split('_')[2]);

  const [selected, setSelected] = useState(false);  // component state
  
  const [currentTurn, setTurn] = useRecoilState(turn);  // global state
  const [currentRound, setRound] = useRecoilState(round);
  const [currentBoard, setBoard] = useRecoilState(board);
  const rowsValue = useRecoilValue(rows);
  const roundValue = useRecoilValue(round);
  
  const [isDisabled, setDisabled] = useState(false);

  const user = useRecoilValue(userState)
  const [highscores, setHighscores] = useRecoilState(highscoresState)

  useEffect(() => {
    setDisabled(((rowsValue + roundValue - currentTurn - 1) === row) ? false : true);
    if (row === (rowsValue + roundValue - currentTurn - 1) && currentTurn === 1) {
      setDisabled(true);
      setTimeout(() => {
        setDisabled(false);
      }, 2000);
    }
  }, [currentTurn, rowsValue, roundValue, row]);
  
  const onSelected = () => {
    setSelected(true);

    if (value === 1) {
      setTurn(currentTurn + 1);
      if (col === 0 & row !== 0) {
        play({id: 'c3'});
      } else if (col === 1 && row !== 0) {
        play({id: 'd4'});
      } else if (col === 2 && row !== 0) {
        play({id: 'e5'});
      } else if (col === 3 && row !== 0) {
        play({id: 'f6'});
      }
    } else {
      play({id: 'incorrect'});
      // restart game
      restartGame()
    }

    if (value === 1 && row === 0) {
      play({id: 'correct'});
      setTurn(1);
      setRound(currentRound + 1);
      setBoard(currentBoard + 1);
      // start new round with extra column
    }
  }

  const restartGame = () => {
    const score = calculateScore()
    console.log('score postgame:', score)

    setTurn(1);
    setRound(1);
    setBoard(currentBoard + 1);
    
    // Submit highscore
    postHighscore(score)
  }

  const postHighscore = (score) => {
    const header = authHeader();
    console.log('header:', header)
    fetch("https://glass-bridge.herokuapp.com/api/v1/scoreboard", {
      method: "POST",
      body: new URLSearchParams({
        'username': user.userName,
        'score': score
      }),
      headers: header
    })
      .then(res => res.json())
      .then(data => {
        console.log('data:', data)
        if(data.ok) {
          // add to highscores if it is high enough
          if(highscores.length < 10 || score > highscores[9]) {
            let newHighscores = [...highscores, [score, user.userName]]
            let newSorted = newHighscores.sort((a, b) => b[0] - a[0])
            newHighscores.pop();
            setHighscores(newSorted)
          }
        }
      })
      .catch(err => {
        console.log('error posting hs:', err)
      })
  }

  const calculateScore = () => {
    const BASE_BLOCKS = 8
    let score = currentRound * BASE_BLOCKS + currentTurn;
    for(let i=1; i<currentRound; i++) {
      score += (1*i)
    }
    return score;
  }

  return (
    <StyledPane variant="contained" className={className} name={name} value={value}
            onClick={onSelected} selected={selected} disabled={isDisabled}>
    </StyledPane>
  );
}

export default Pane;

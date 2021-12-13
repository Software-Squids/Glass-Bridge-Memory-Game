import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Button from '@mui/material/Button';

import { rows, turn, round, board } from '../../states';
import { userState } from '../../states/user';
import { highscoresState } from '../../states/highscores';
import { getCookie, authHeader } from '../../components/Dialogs/cookieOperations';


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
`;


function Pane({
  name,
  value,
  play
}) {
  const row = parseInt(name.split('_')[1]);
  const col = parseInt(name.split('_')[2]);

  const [selected, setSelected] = useState(false);  // component state
  
  const [currentTurn, setTurn] = useRecoilState(turn);  // global state
  const [currentRound, setRound] = useRecoilState(round);
  const [currentBoard, setBoard] = useRecoilState(board);
  const rowsValue = useRecoilValue(rows);
  const roundValue = useRecoilValue(round);

  const user = useRecoilValue(userState)
  const [highscores, setHighscores] = useRecoilState(highscoresState)

  const isDisabled = ((rowsValue + roundValue - currentTurn - 1) === row ? false : true);
  
  const onSelected = () => {
    setSelected(true);

    if (value === 1) {
      setTurn(currentTurn + 1);
      if (col === 0 & row !== 0) {
        play({id: 'c3'});
      } else if (col === 1 && row !== 0) {
        play({id: 'd4'});
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
    <StyledPane variant="contained" className="pane" name={name} value={value}
            onClick={onSelected} selected={selected} disabled={isDisabled}>
      {value}
    </StyledPane>
  );
}

export default Pane;

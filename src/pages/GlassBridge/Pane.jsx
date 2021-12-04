import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import useSound from 'use-sound';

import { rows, turn, round, board } from '../../states';
import marimba_scale_sprite from '../../audio/marimba_scale_sprite.mp3'


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


function Pane(props) {
  const row = parseInt(props.name.split('_')[1]);
  const col = parseInt(props.name.split('_')[2]);

  const [selected, setSelected] = useState(false);  // component state
  
  const [currentTurn, setTurn] = useRecoilState(turn);  // global state
  const [currentRound, setRound] = useRecoilState(round);
  const [currentBoard, setBoard] = useRecoilState(board);
  const rowsValue = useRecoilValue(rows);
  const roundValue = useRecoilValue(round);

  const isDisabled = ((rowsValue + roundValue - currentTurn - 1) === row ? false : true);
  
  const [play] = useSound(marimba_scale_sprite, {
    sprite: {
      c3: [0, 1250],
      d4: [2000, 1250],
      incorrect: [4000, 750],
      correct: [6000, 2036]
    },
  });
  
  const onSelected = () => {
    setSelected(true);

    if (props.value === 1) {
      setTurn(currentTurn + 1);
      if (col === 0 & row !== 0) {
        play({id: 'c3'});
      } else if (col === 1 && row !== 0) {
        play({id: 'd4'});
      }
    } else {
      play({id: 'incorrect'});
      setTurn(1);
      setRound(1);
      setBoard(currentBoard + 1);
      // restart game
    }

    if (props.value === 1 && row === 0) {
      play({id: 'correct'});
      setTurn(1);
      setRound(currentRound + 1);
      setBoard(currentBoard + 1);
      // start new round with extra column
    }
  }

  return (
    <StyledPane variant="contained" className="pane" name={props.name} value={props.value}
            onClick={onSelected} selected={selected} disabled={isDisabled}>
      {props.value}
    </StyledPane>
  );
}

export default Pane;

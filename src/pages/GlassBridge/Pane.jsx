import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { rows, turn, round, board } from '../../states';


const StyledPane = styled.button`
  background-color: ${props => props.selected ? "pink" : "white"};
`;


function Pane(props) {
  const row = parseInt(props.name.split('_')[1]);

  const [selected, setSelected] = useState(false);  // component state
  
  const [currentTurn, setTurn] = useRecoilState(turn);  // global state
  const [currentRound, setRound] = useRecoilState(round);
  const [currentBoard, setBoard] = useRecoilState(board);
  const isDisabled = ((useRecoilValue(rows) + useRecoilValue(round) - currentTurn - 1) === row ? false : true);
  
  const onSelected = () => {
    setSelected(true);

    if (props.value === 1) {
      setTurn(currentTurn + 1);
    } else {
      alert('Round lost! :(');
      setTurn(1);
      setRound(1);
      setBoard(currentBoard + 1);
      // restart game
    }

    if (props.value === 1 && row === 0) {
      alert('Round won!');
      setTurn(1);
      setRound(currentRound + 1);
      setBoard(currentBoard + 1);
      // start new round with extra column
    }
  }
  return (
    <StyledPane className="pane" name={props.name} value={props.value}
            onClick={onSelected} selected={selected} disabled={isDisabled}>
      {props.value}
    </StyledPane>    // temporary, for debugging
  );
}
export default Pane;

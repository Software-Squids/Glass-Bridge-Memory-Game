import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

import { cols, board, turn, round } from '../../states/';

const StyledDialog = styled(Dialog)`
  
`;


function OptionsDialog({ open, setOptionsOpen }) {
  const setColCount = useSetRecoilState(cols);
  const setTurn = useSetRecoilState(turn);
  const setRound = useSetRecoilState(round);
  const [currentBoard, setBoard] = useRecoilState(board);

  const closeDialog = (event) => {
    setOptionsOpen(false);
  }

  const changeDifficulty = (rows) => {
    setColCount(rows);

    setBoard(currentBoard + 1);
    setTurn(1);
    setRound(1);
    console.log(currentBoard);
    closeDialog();
  }

  return (
    <StyledDialog open={open} onClose={closeDialog}>
      <DialogTitle>Options</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Difficulty:
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => changeDifficulty(2)}>Easy</Button>
        <Button onClick={() => changeDifficulty(3)}>Medium</Button>
        <Button onClick={() => changeDifficulty(4)}>Hard</Button>
      </DialogActions>
    </StyledDialog>
  )
}

export { OptionsDialog }
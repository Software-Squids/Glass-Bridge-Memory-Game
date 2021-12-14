import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Button } from '@mui/material';

import Bridge from './Bridge'
import { OptionsDialog } from '../../components/Dialogs'
import { TransparentAppBar, SquidText } from '../../components';
import { rows, cols, round, board } from '../../states';


const StyledGame = styled.div`
  // css
`

const StyledBox = styled.div`
  position: relative;
`;

function GamePage() {
  const gameKey = useRecoilValue(board);
  const gameRows = useRecoilValue(rows);
  const gameCols = useRecoilValue(cols);
  const gameRound = useRecoilValue(round);
  
  const [optionsOpen, setOptionsOpen] = useState(false);

  function getDifficulty(cols) {
    if (cols === 2) {
      return "easy";
    } else if (cols === 3) {
      return "medium";
    } else {
      return "hard";
    }
  }

  return (
    <StyledGame key={gameKey}>
      <StyledBox>
        <TransparentAppBar />
        <h1><SquidText>glass bridge</SquidText></h1>
      </StyledBox>
      <Bridge rows={gameRows + gameRound - 1}
              cols={gameCols}></Bridge>
      <SquidText>DIFFICULTY: {getDifficulty(gameCols)}&emsp;ROUND: {gameRound}</SquidText>
      <Button variant='outlined' onClick={() => setOptionsOpen(true)}>Options</Button>
      <Button variant='contained'>asdfasdf</Button>
      <OptionsDialog open={optionsOpen} setOptionsOpen={setOptionsOpen} />
    </StyledGame>
    
  )
}

export default GamePage

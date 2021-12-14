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

  return (
    <StyledGame key={gameKey}>
      <StyledBox>
        <TransparentAppBar />
        <h1><SquidText>glass bridge</SquidText></h1>
      </StyledBox>
      <Bridge rows={gameRows + gameRound - 1}
              cols={gameCols}></Bridge>
      <SquidText>ROUND: {gameRound}</SquidText>
      <Button variant='outlined' onClick={() => setOptionsOpen(true)}>Options</Button>
      <Button variant='contained'>asdfasdf</Button>
      <OptionsDialog open={optionsOpen} setOptionsOpen={setOptionsOpen} />
    </StyledGame>
    
  )
}

export default GamePage

import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import Bridge from './Bridge'
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

  return (
    <StyledGame key={gameKey}>
      <StyledBox>
        <TransparentAppBar />
        <h1><SquidText>glass bridge</SquidText></h1>
      </StyledBox>
      <Bridge rows={gameRows + gameRound - 1}
              cols={gameCols}></Bridge>
      <SquidText>ROUND: {gameRound}</SquidText>
    </StyledGame>
    
  )
}

export default GamePage

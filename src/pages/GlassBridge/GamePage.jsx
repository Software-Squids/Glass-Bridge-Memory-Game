import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import Bridge from './Bridge'
import { BackArrow, SquidText } from '../../components';
import { rows, cols, round, board } from '../../states';


const StyledGame = styled.div`
  // css
`

function GamePage() {
  return (
    <StyledGame key={useRecoilValue(board)}>
      <BackArrow />
      <h1><SquidText>glass bridge</SquidText></h1>
      <Bridge rows={useRecoilValue(rows) + (useRecoilValue(round) - 1)}
              cols={useRecoilValue(cols)}></Bridge>
      <SquidText>ROUND: {useRecoilValue(round)}</SquidText>
    </StyledGame>
    
  )
}

export default GamePage

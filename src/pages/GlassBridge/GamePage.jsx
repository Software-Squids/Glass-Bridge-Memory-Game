import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import Bridge from './Bridge'
import { BackArrow, SquidText } from '../../components';
import { rows, cols, round, board } from '../../states';


const StyledGame = styled.div`
  // css
`

const StyledBox = styled.div`
  position: relative;
`;

function GamePage() {
  return (
    <StyledGame key={useRecoilValue(board)}>
      <StyledBox>
        <BackArrow />
        <h1><SquidText>glass bridge</SquidText></h1>
      </StyledBox>
      <Bridge rows={useRecoilValue(rows) + (useRecoilValue(round) - 1)}
              cols={useRecoilValue(cols)}></Bridge>
      <SquidText>ROUND: {useRecoilValue(round)}</SquidText>
    </StyledGame>
    
  )
}

export default GamePage

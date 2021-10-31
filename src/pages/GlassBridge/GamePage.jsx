import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import Bridge from './Bridge'
import { rows, cols, round, board } from '../../states';


const StyledGame = styled.div`
  // css
`

function GamePage() {
  return (
    <StyledGame key={useRecoilValue(board)}>
      <Bridge rows={useRecoilValue(rows) + useRecoilValue(round) - 1}
              cols={useRecoilValue(cols)}></Bridge>
      Round: {useRecoilValue(round)}
    </StyledGame>
    
  )
}

export default GamePage

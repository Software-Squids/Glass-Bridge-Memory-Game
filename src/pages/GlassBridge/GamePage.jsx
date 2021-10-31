import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import Bridge from './Bridge'
import { rows, cols, round } from '../../states';


const StyledGame = styled.div`
  // css
`

function GamePage() {
  return (
    <StyledGame>
      <Bridge rows={useRecoilValue(rows) + useRecoilValue(round) - 1} cols={useRecoilValue(cols)}></Bridge>
    </StyledGame>
  )
}

export default GamePage
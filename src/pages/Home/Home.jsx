import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { SquidText } from '../../components';


const StyledHome = styled.div`
  /* Temporary to render vertically, CSS goes here! */
  a {
    display: flex;
    flex-direction: column;
  }
`

/* /Scores and /Help are currently empty */
// ADD: <SquidText>Glass Bridge</SquidText> and make it work
function Home() {
  return (
    <StyledHome>
      <Link to="/Play">New Game</Link>
      <Link to="/Scores">High Score</Link>
      <Link to="/Help">Help</Link>
    </StyledHome>
  );
}

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@mui/material/Button';

import { SquidText } from '../../components';
import { TransparentAppBar } from '../../components';

const StyledHome = styled.div`
  a, button {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: #DF245C;
    font-size: 1.5vw;
  }
`

/* /Scores and /Help are currently empty */
function Home() {
  return (
    <StyledHome>
      <TransparentAppBar home/>
      <h1><SquidText>glass bridge</SquidText></h1>
      <Link to="/Play"><Button><SquidText>new game</SquidText></Button></Link>
      <Link to="/Scores"><Button><SquidText>high scores</SquidText></Button></Link>
      <Link to="/Helper"><Button><SquidText>help</SquidText></Button></Link>
    </StyledHome>
  );
}

export default Home;

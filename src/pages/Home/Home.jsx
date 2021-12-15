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
      <h1 style={{marginTop:0}}><SquidText>glass bridge</SquidText></h1>
      <Link to="/Play"><Button style={{marginBottom:10}}><SquidText>new game</SquidText></Button></Link>
      <Link to="/Scores"><Button style={{marginBottom:10}}><SquidText>high scores</SquidText></Button></Link>
      <Link to="/Helper"><Button style={{marginBottom:10}}><SquidText>help</SquidText></Button></Link>
    </StyledHome>
  );
}

export default Home;

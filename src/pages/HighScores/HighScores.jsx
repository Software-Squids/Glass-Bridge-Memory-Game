import React from 'react';
import '../../App.css';
import { SquidText } from '../../components';
import styled from 'styled-components';

const StyledBox = styled.div`
  position: relative;
`;


function HighScoresPage() {
    return (
        <StyledBox>
        <h1><SquidText> high scores </SquidText></h1>
        </StyledBox>
    );
}
export default HighScoresPage;
    //return <h1 className='scores'> High Score </h1>;

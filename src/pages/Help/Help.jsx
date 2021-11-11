import React from 'react';
import '../../App.css';
import { SquidText } from '../../components';
import styled from 'styled-components';

const StyledBox = styled.div`
  position: relative;
`;


function HelpPage() {
    return (
        <StyledBox>
        <h1><SquidText> Help </SquidText></h1>
        </StyledBox>
    );
}
export default HelpPage;
import React from 'react';
import styled from 'styled-components';


// Does not have an accent color like on figma. I don't know how to do that
const StyledText = styled.h1`
font-family: 'GameOfSquids';
`;

function SquidText(props) {
  return (
    <StyledText>{props.children}</StyledText>
  );
}

export { SquidText };

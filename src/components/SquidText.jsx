import React from 'react';
import styled from 'styled-components';


// Does not have an accent color like on figma. I don't know how to do that
const StyledText = styled.p`
  font-family: 'GameOfSquids';
  margin-bottom: 0;
  margin-top: 0;

  font-size: ${props => props.size ? props.size : ""};
`;

function SquidText({
  children,
  size=null,
  ...props
}) {
  return (
    <StyledText {...props} size={size}>{children}</StyledText>
  );
}

export { SquidText };

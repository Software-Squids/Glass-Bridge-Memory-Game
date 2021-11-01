import React, { Text } from 'react';
import styled from 'styled-components';


const StyledText = styled.text`
font-family: 'GameOfSquids';
color: 'pink';
`;

function SquidText(props) {
  return (
    <Text>{props.text}</Text>
  );
}
export { SquidText };

import React, { useState } from 'react';
import styled from 'styled-components';


const StyledPane = styled.button`
  background-color: ${props => props.selected ? "pink" : "white"};
`;


function Pane(props) {
  // const [selected, setSelected] = useRecoilState(selectedState);
  const [selected, setSelected] = useState(false);

  const onSelected = () => {
    setSelected(true);
  }

  return (
    <StyledPane className="pane" name={props.name} value={props.value}
            onClick={onSelected} selected={selected}>
      {props.value}
    </StyledPane>    // temporary, for debugging
  );
}
export default Pane;

import React from 'react';
import { atom, useRecoilState } from 'recoil';
import styled from 'styled-components';


/* currently updates all tiles when one is clicked */
const selectedState = atom({
  key: 'selectedState',
  default: false
});

const StyledPane = styled.div`
  background-color: ${props => props.selected ? "pink" : "white"};
`;


function Pane(props) {
  const [selected, setSelected] = useRecoilState(selectedState);

  const onSelected = (event) => {
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

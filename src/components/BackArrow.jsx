import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';


const StyledArrow = styled.button`

`;


function BackArrow() {
  let history = useHistory();
    
  return (
      <StyledArrow className="back" onClick={() => history.goBack()}>
          <BiArrowBack />
      </StyledArrow>
  );
}
export { BackArrow };

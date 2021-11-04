import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import IconButton from "@mui/material/IconButton";


const StyledArrow = styled(IconButton)`
  color: #DF245C;
  
  position: fixed;
  top: 0;
  left: 0;
  margin: 10px;
  width: 60px;
  height: 60px;
  font-size: 2vw;
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

import React from 'react';
import { MdAccountCircle } from 'react-icons/md';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';


const StyledUser = styled(IconButton)`
  color: #DF245C;
`;


function UserButton() {
  return (
    <StyledUser>
      <MdAccountCircle />
    </StyledUser>
  )
}
export { UserButton };

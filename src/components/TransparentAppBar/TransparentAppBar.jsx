import React from 'react';
import styled from 'styled-components';
import { AppBar, Box, Toolbar } from '@mui/material';

import { BackArrow, UserButton } from '..';


const StyledAppBar = styled(AppBar)`
  background-color: transparent;
  position: sticky;
`

const StyledBox = styled(Box)`
  display: flex;
  flex-grow: 1;
`


function TransparentAppBar(props) {
  return (
    <StyledAppBar>
      <Toolbar>
        <StyledBox>
          {!props.home && <BackArrow />}
        </StyledBox>
        <UserButton />
      </Toolbar>
    </StyledAppBar>
  )
}
export {TransparentAppBar};

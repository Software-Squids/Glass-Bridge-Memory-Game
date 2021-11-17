import React from 'react';
import styled from 'styled-components';
import { AppBar, Box, Toolbar } from '@mui/material';

import { BackArrow, UserButton } from '..';


const StyledAppBar = styled(AppBar)`
  box-shadow: none;
  position: sticky;
`

const StyledBox = styled(Box)`
  display: flex;
  flex-grow: 1;
`


function TransparentAppBar(props) {
  return (
    <StyledAppBar color="transparent">
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

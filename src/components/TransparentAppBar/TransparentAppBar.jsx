import React from 'react';
import styled from 'styled-components';
import { AppBar, Box, Toolbar } from '@mui/material';
import { SquidText } from '../SquidText'
import { BackArrow, UserButton } from '..';
import { useRecoilValue } from 'recoil';
import { userState as userStateAtom } from '../../states';


const StyledAppBar = styled(AppBar)`
  box-shadow: none;
  /* position: sticky; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
`

const StyledBox = styled(Box)`
  display: flex;
  flex-grow: 1;
`


function TransparentAppBar(props) {
  const userState = useRecoilValue(userStateAtom)

  return (
    <StyledAppBar color="transparent">
      <Toolbar>
        <StyledBox>
          {!props.home && <BackArrow />}
        </StyledBox>
        <UserButton />
        {userState.auth && userState.username && (
          <SquidText size="18px">{userState.username}</SquidText>
        )}
      </Toolbar>
    </StyledAppBar>
  )
}
export {TransparentAppBar};

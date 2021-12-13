import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

import { getCookie, authHeader } from './cookieOperations';
import { user, userState } from '../../states'
import { initialUserState } from '../../states/user';


const StyledDialog = styled(Dialog)`

`


function SignoutDialog(props) {
  const { open, setSignoutOpen } = props;

  const [usr, setUser] = useRecoilState(user);
  const setUserState = useSetRecoilState(userState)

  const closeDialog = (event) => {
    setSignoutOpen(false);
  }

  const signout = (event) => {
    fetch('https://glass-bridge.herokuapp.com/api/v1/user/signout', {
      method: 'GET',
      headers: authHeader()
    }).then((response) => {
      return response.json();
    }).then((responseJson) => {
      if (!responseJson.ok) {
        throw responseJson;
      }
      setUser('');
      setUserState(initialUserState)
      closeDialog();
    }).catch((e) => {
      console.log('error:', e)
      // alert(e.message); // temp alert, not actually signing in
      setUser('');
      setUserState(initialUserState)
      closeDialog();
    })
  }

  return (
    <StyledDialog open={open} onClose={closeDialog}>
      <DialogTitle>Sign Out?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {usr}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant='outlined' onClick={closeDialog}>Cancel</Button>
        <Button variant='contained' onClick={signout}>Sign Out</Button>
      </DialogActions>
    </StyledDialog>
  )
}

export { SignoutDialog } 

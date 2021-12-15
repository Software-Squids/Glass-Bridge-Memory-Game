import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useHistory } from 'react-router-dom'
import { setCookie } from './cookieOperations';
import { user, userState } from '../../states'
import { initialUserState } from '../../states/user';


const StyledDialog = styled(Dialog)`

`


function SignoutDialog({
  open,
  setSignoutOpen,
  ...props
}) {
  const history = useHistory();

  const [usr, setUser] = useRecoilState(user);
  const setUserState = useSetRecoilState(userState)

  const closeDialog = (event) => {
    setSignoutOpen(false);
  }

  const signout = (event) => {
    fetch('https://glass-bridge.herokuapp.com/api/v1/user/signout')
      .then((response) => {
      return response.json();
    }).then((responseJson) => {
      if (!responseJson.ok) {
        throw responseJson;
      }
      setUser('');
      setUserState(initialUserState)
      setCookie("access_token", "")
      // redirect
      history.push("/")
      closeDialog();
    }).catch((e) => {
      console.log('error:', e)
      // alert(e.message); // temp alert, not actually signing in
      setUser('');
      setUserState(initialUserState)
      setCookie("access_token", "")
      // redirect
      history.push("/")
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

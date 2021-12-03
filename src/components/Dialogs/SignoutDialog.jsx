import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

import { getCookie, authHeader } from './cookieOperations';
import { user } from '../../states'


const StyledDialog = styled(Dialog)`

`


function SignoutDialog(props) {
  const { open, setSignoutOpen } = props;

  const [usr, setUser] = useRecoilState(user);

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
      closeDialog();
    }).catch((e) => {
      alert(e.message); // temp alert, not actually signing in
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

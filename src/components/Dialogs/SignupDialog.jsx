import React, { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

import { setCookie } from './cookieOperations';
import { user, userState } from '../../states'


const StyledDialog = styled(Dialog)`
  
`


function SignupDialog(props) {
  const { open, setLoginOpen, setSignupOpen } = props;
  const [error, setError] = useState(null);

  const [usrname, setUsername] = useState('');
  const [passwd, setPasswd] = useState('');
  const [confirm_passwd, setConfirmPasswd] = useState('');

  const [, setUser] = useRecoilState(user);
  const setUserState = useSetRecoilState(userState)

  const closeDialogs = (event) => {
    setLoginOpen(false);
    setSignupOpen(false);
    setError(null);
  }
  
  const switchLogin = (event) => {
    setLoginOpen(true);
    setSignupOpen(false);
  }

  const handleUsername = (event) => {
    setUsername(event.target.value);
  }

  const handlePassword = (event) => {
    setPasswd(event.target.value);
  }

  const handleConfirmPassword = (event) => {
    setConfirmPasswd(event.target.value);
  }

  const signup = (event) => {
    event.preventDefault();
    setError(null);
    fetch('http://localhost:5000/api/v1/user/signup', {
      method: 'POST',
      body: new URLSearchParams({
        'username': usrname,
        'password': passwd,
        'confirm_password': confirm_passwd
      })
    }).then((response) => {
      return response.json();
    }).then((responseJson) => {
      if (!responseJson.ok) {
        throw responseJson;
      }
      const token = responseJson["access_token"] || ""
      setCookie('access_token', token);
      setUser(responseJson.data.user_id);
      setUserState({...responseJson.data, username: usrname, auth: true })
      closeDialogs();
    }).catch((e) => {
      setError(e.message);
    });
  }

  return (
    <StyledDialog open={open} onClose={closeDialogs}>
      <form>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To submit high scores, please login or create an account.
          </DialogContentText>
          <TextField onChange={handleUsername}
            autoFocus
            id="username"
            label="Username"
            type="text"
            autoComplete='off'
            fullWidth
            margin="dense"
            variant="filled"
            error={error?.charAt(0) === 'U'}
            helperText={error?.charAt(0) === 'U' && error}
          />
          <TextField onChange={handlePassword}
            id="password"
            label="Password"
            type="password"
            autoComplete="off"
            fullWidth
            margin="dense"
            variant="filled"
            error={error?.charAt(0) === 'P'}
            helperText={error?.charAt(0) === 'P' && error}
          />
          <TextField onChange={handleConfirmPassword}
            id="confirm_password"
            label="Confirm Password"
            type="password"
            autoComplete="off"
            fullWidth
            margin="dense"
            variant="filled"
            error={error?.charAt(0) === 'P'}
            helperText={error?.charAt(0) === 'P' && error}
          />
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={switchLogin}>Login</Button>
          <Button variant='contained' type="submit" onClick={signup}>Create Account</Button>
        </DialogActions>
      </form>
    </StyledDialog>
  );
}

export { SignupDialog }

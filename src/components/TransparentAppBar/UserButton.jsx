import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { MdAccountCircle } from 'react-icons/md';
import { Button, IconButton, TextField, Dialog, DialogActions, DialogContent,
         DialogContentText, DialogTitle } from '@mui/material';

import { username, password, confirm_password, account_key } from '../../states';


const StyledUser = styled(IconButton)`
  color: #DF245C;
`;

const StyledDialog = styled(Dialog)`
`


function UserButton(props) {
  const [open, setOpen] = useState(false);
  
  const [usrname, setUsername] = useRecoilState(username);
  const [passwd, setPasswd] = useRecoilState(password);
  const [confirm_passwd, setConfirmPasswd] = useRecoilState(confirm_password);
  const [key, setKey] = useRecoilState(account_key)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleUser(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPasswd(event.target.value);
  }

  function handleConfirmPassword(event) {
    setConfirmPasswd(event.target.value);
  }

  const login = () => {
    // TODO: make response prettier and actually log the user in
    // Currently, this is just changing states and attempting a login.
    fetch('https://glass-bridge.herokuapp.com/api/v1/user/signin', {
      method: 'POST',
      body: new URLSearchParams({
        'username': usrname,
        'password': passwd
      })
    })
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      alert("Username: " + usrname + "\nPassword: " + passwd + "\n\n" + JSON.stringify(myJson));
    })
  }

  return (
    <>
    <StyledUser onClick={handleOpen}>
      <MdAccountCircle />
    </StyledUser>
    <StyledDialog open={open} onClose={handleClose}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To submit high scores, please login or create an account.
        </DialogContentText>
        <TextField onChange={handleUser}
          autoFocus
          id="username"
          label="Username"
          type="text"
          autoComplete='off'
          fullWidth
          margin="dense"
          variant="filled"
        />
        <TextField onChange={handlePassword}
          id="password"
          label="Password"
          type="password"
          autoComplete="off"
          fullWidth
          margin="dense"
          variant="filled"
        />
        <TextField onChange={handleConfirmPassword}
          id="confirm_password"
          label="Confirm Password"
          type="password"
          autoComplete="off"
          fullWidth
          margin="dense"
          variant="filled"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close (will be Create Account)</Button>
        <Button onClick={login}>Login</Button>
      </DialogActions>
    </StyledDialog>
    </>
  )
}
export { UserButton };

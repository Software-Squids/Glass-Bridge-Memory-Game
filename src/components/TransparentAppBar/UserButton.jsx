import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { MdAccountCircle, MdSwitchAccount } from 'react-icons/md';
import { IconButton } from '@mui/material';

import { user } from '../../states'
import { LoginDialog, SignupDialog, SignoutDialog} from '../Dialogs';

const StyledUser = styled(IconButton)`
  color: #DF245C;
`;


function UserButton(props) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [signoutOpen, setSignoutOpen] = useState(false);

  const usr = useRecoilValue(user);

  const handleOpen = () => {
    if (usr === '') {
      setLoginOpen(true);
    } else {
      setSignoutOpen(true);
    }
  }

  return (
    <>
    <StyledUser onClick={handleOpen}>
      {usr === '' ? <MdAccountCircle /> : <MdSwitchAccount />}
    </StyledUser>
    <LoginDialog open={loginOpen}
      setLoginOpen={setLoginOpen} setSignupOpen={setSignupOpen} />
    <SignupDialog open={signupOpen}
      setLoginOpen={setLoginOpen} setSignupOpen={setSignupOpen} />
    <SignoutDialog open={signoutOpen} setSignoutOpen={setSignoutOpen} />
    </>
  )
}
export { UserButton };

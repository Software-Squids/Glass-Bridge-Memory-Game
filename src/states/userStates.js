import { atom } from 'recoil';

const username = atom({
  key: 'username',
  default: ''
});

const password = atom({
  key: 'password',
  default: ''
});

const confirm_password = atom({
  key: 'confirm_password',
  default: ''
});

const account_key = atom({
  key: 'account_key',
  default: ''
})
export { username, password, confirm_password, account_key };

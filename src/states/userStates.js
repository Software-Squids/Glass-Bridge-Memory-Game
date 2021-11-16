import { atom } from 'recoil';


const user = atom({
  key: 'user',
  default: 'false'
})

export { user };

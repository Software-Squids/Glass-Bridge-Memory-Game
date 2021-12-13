import {atom} from 'recoil';

export const initialUserState = {
    auth: false, 
    userName: "",
    user_id: ""
}

const userState = atom({
    key: "user-state", 
    default: initialUserState
})

export {userState}; 
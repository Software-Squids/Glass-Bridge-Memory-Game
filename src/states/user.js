import {atom} from 'recoil';

export const initialUserState = {
    auth: false, 
    username: "",
    user_id: ""
}

const userState = atom({
    key: "user-state", 
    default: initialUserState
})

export {userState}; 
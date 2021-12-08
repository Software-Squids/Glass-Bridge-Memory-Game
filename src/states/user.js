import {atom} from 'recoil';

const userState = atom({
    key: "user-state", 
    default: { 
        auth: false, 
        userName: ""
    }
})

export {userState}; 
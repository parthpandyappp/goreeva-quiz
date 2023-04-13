import {
    atom
} from 'recoil';

const authState = atom({
    key: "authstate",
    default: {
        authUser: localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : null,
        isLoggedIn: localStorage.getItem("isLoggedIn")
            ? JSON.parse(localStorage.getItem("isLoggedIn"))
            : false,
    },
});

export { authState };
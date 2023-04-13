import {
    atom
} from 'recoil';

const quizState = atom({
    key: "quizstate",
    default: []
});

export { quizState };
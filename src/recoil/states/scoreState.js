import {
    atom
} from 'recoil';

const scoreState = atom({
    key: "scorestate",
    default: 0
});

export { scoreState };
import { atom } from 'recoil';


const rows = atom({
  key: 'rows',
  default: 10
});

const cols = atom({
  key: 'cols',
  default: 2
});

const round = atom({
  key: 'round',
  default: 1
});

const turn = atom({
  key: 'turn',
  default: 1
});

const twoPlayer = atom({
  key: 'twoPlayer',
  default: false
});

const hasLost = atom({
  key: 'hasLost',
  default: false
});

const board = atom({
  key: 'board',
  default: 1
});

export { rows, cols, round, turn, twoPlayer, hasLost, board };

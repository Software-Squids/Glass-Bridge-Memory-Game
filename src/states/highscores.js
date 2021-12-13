import { atom } from 'recoil'

export const highscoresState = atom({
  key: "highscores",
  default: []
})
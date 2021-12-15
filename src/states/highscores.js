import { atom } from 'recoil'

export const initialHighscores = {
  easy: [],
  medium: [],
  hard: [],
}

export const highscoresState = atom({
  key: "highscores",
  default: initialHighscores
})
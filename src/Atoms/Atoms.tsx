import { atom } from "recoil";

export const focusState = atom<boolean>({
  key: 'focusState' ,
  default: false
})
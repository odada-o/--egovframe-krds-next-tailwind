import { atom } from 'recoil'

interface User {
  name: string
  age: number
}

export const userState = atom<User | null>({
  key: 'userState',
  default: null,
})

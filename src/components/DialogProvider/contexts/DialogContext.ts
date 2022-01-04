import { createContext } from 'react'

export interface DialogContextValue {
  ask?: (question: string) => Promise<string>
  isAsking: boolean
}

export const DialogContext = createContext<DialogContextValue>({
  isAsking: false
})

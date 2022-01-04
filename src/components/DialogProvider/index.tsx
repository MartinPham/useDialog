import { useCallback, useMemo, useState } from 'react'
import { Dialog } from './components/Dialog'
import { DialogContext, DialogContextValue } from './contexts/DialogContext'

interface DialogHandler {
  resolve: (answer: string) => void
  reject: (error: Error) => void
}

interface DialogProviderProps {
  children: JSX.Element | JSX.Element[] | null
}

export const DialogProvider = ({
  children
}: DialogProviderProps) => {
  const [dialogQuestion, setDialogQuestion] = useState('')
  const [dialogIsVisible, toggleDialogVisibility] = useState(false)
  const [dialogHandler, setDialogHandler] = useState<DialogHandler | null>(null)

  const value: DialogContextValue = useMemo(() => {
    return {
      ask: async (question: string) => {
        setDialogQuestion(question)
        toggleDialogVisibility(true)
        
        return new Promise((resolve, reject) => {
          setDialogHandler({
            resolve,
            reject
          })
        })
      },
      isAsking: false
    }
  }, [
    setDialogQuestion,
    toggleDialogVisibility,
    setDialogHandler
  ])

  const handleDialogReply = useCallback((answer: string | null) => {
    toggleDialogVisibility(false)

    if (dialogHandler !== null) {
      if (answer !== null) {
        dialogHandler.resolve(answer)
      } else {
        dialogHandler.reject(new Error('NO_ANSWER'))
      }
    }
  }, [
    toggleDialogVisibility,
    dialogHandler
  ])

  return (
    <DialogContext.Provider value={{
      ...value,
      isAsking: dialogIsVisible
    }}>
      <div>
        <Dialog
          visible={dialogIsVisible}
          question={dialogQuestion}
          onReply={handleDialogReply}
        />
      </div>

      {children}
    </DialogContext.Provider>
  )
}
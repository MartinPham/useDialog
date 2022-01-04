import { MouseEvent } from 'react'
import './Dialog.css'

interface DialogProps {
  question: string
  visible: boolean
  onReply: (answer: string | null) => void
}

export const Dialog = ({
  question,
  visible,
  onReply
}: DialogProps) => {
  return visible ? (
    <div
      className='Dialog-background'
      onClick={() => {
        onReply(null)
      }}
    >
      <div className='Dialog-container'>
        <h1>{question}</h1>
        <button onClick={(event: MouseEvent) => {
          event.stopPropagation()
          onReply('Yes')
        }}>Yes</button>
        &nbsp;
        <button onClick={(event: MouseEvent) => {
          event.stopPropagation()
          onReply('No')
        }}>No</button>
      </div>
    </div>
  ) : null
}
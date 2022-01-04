import { useCallback, useState } from 'react'
import './Example.css'
import logo from 'images/logo.svg'
import { useDialog } from 'components/DialogProvider/hooks/useDialog'

export const Example = () => {
    const [answer, setAnswer] = useState<string | null>(null)
    const { ask, isAsking } = useDialog()

    const askNow = useCallback(async () => {
        try {
            const answer = await ask!('Are you ok?')
            setAnswer(`Answered: ${answer}`)
        } catch (error: any) {
            setAnswer(`Error: ${error.message}`)
        }
    }, [ask])

    return (
        <header className='Example-header'>
            <img src={logo} className='Example-logo' alt='logo' />
            <button
                onClick={() => askNow()}
            >
                {isAsking ? 'ASKING...' : 'ASK!'}
            </button>

            <p>
                {answer}
            </p>
        </header>
    )
}
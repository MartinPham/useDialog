import './App.css'
import { DialogProvider } from 'components/DialogProvider'
import { Example } from 'components/Example'


export const App = () => {
  return (
    <DialogProvider>
      <div className='App'>
        <Example />
      </div>
    </DialogProvider>
  )
};

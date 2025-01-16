import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Tracker } from './components/Tracker'
import './global.css'

export default function App() {

  return (
    <>
      <Header />
      <NewTask />
      <Tracker />
    </>
  )
}

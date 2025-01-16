import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Tasks } from './components/Tasks'
import { Tracker } from './components/Tracker'
import './global.css'

export default function App() {

  return (
    <>
      <Header />
      <NewTask />
      <Tracker />
      <Tasks />
    </>
  )
}

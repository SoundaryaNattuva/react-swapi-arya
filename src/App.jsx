import { useState } from 'react'
import './App.css'
import Ship from './components/Ships/Ships'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Ship />
    </main>

  )
}

export default App

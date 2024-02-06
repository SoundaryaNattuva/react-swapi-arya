import { useState } from 'react'
import { Route, Routes, userNavigate} from 'react-router-dom'
import './App.css'
import Ships from './components/Ships/Ships'
import ShipDetails from './components/ShipDetails/ShipDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Routes>
        <Route path='/ships' element={<Ships />}/>
      </Routes>
    </main>

  )
}
import { Form } from 'react-router-dom'

export default App

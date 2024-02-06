import { useState } from 'react'
import { Route, Routes, useNavigate} from 'react-router-dom'
import './App.css'
import Ships from './components/Ships/Ships'
import Nav from './components/Nav/Nav'
import ShipDetails from './components/ShipDetails/ShipDetail'

function App() {

  return (
    <main>
      <Nav />
      <Routes>
        <Route path='/ships' element={
          <Ships
          />
        }/>
        <Route 
          path="/shipdetails/:shipId"
          element={<ShipDetails />} 
        />
      </Routes>
    </main>

  )
}
import { Form } from 'react-router-dom'

export default App

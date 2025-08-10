import { useState } from 'react'
import 'animate.css';
import './App.css'
import Pages1 from './pages/Pages1'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pages2 from './pages/Pages2'
function App() {
  

  return (
    <div className="App" >
      <Router>
        <Routes>
         <Route path='/' element={<Pages1 />} />
         <Route path='/pages2/:id' element={<Pages2 />} />
        </Routes>
      </Router>

       
    </div>
  )
}

export default App

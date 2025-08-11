import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Index from './pages/Index'
import About from './pages/About'
import './App.css'

function App() {
 

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
        
          </Routes>

        </Router>
      </div>
    </>
  )
}

export default App

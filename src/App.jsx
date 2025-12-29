import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar'
import AppRoutes from './Routes'
import ScrollToTop from './components/ScrollToTop'
function App() {
  const [count, setCount] = useState(0)

  return (
        <Router>
          
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <AppRoutes />
        </main>
      </div>
    </Router>

  )
}

export default App

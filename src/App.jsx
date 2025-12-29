import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar'
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

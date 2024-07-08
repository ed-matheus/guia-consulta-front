import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Componentes
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import FetchModalities from './components/requisitions/FetchModalities'

// Pages
import Home from './pages/Home'
import User from './pages/User'
import Dashboard from './pages/Dashboard'

function App() {
  const [pageTitle, setPageTitle] = useState('Página Inicial')
  const location = useLocation()

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setPageTitle('Página Inicial')
        break
      case '/usuario':
        setPageTitle('Usuário')
        break
      case '/dashboard':
        setPageTitle('Dashboard')
        break
      default:
        setPageTitle('Página Inicial')
    }
  }, [location.pathname])

  return (
    <div className='App d-flex'>
        <Sidebar />
        <div className='d-flex flex-column w-100'>
          <Navbar page={pageTitle} />
          <FetchModalities />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/usuario' element={<User />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </div>
    </div>
  )
}

export default App

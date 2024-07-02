import './App.css'

// Componentes
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div className='App d-flex'>
      <Sidebar />
      <Navbar />
    </div>
  )
}

export default App

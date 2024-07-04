import './App.css'

// Componentes
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import FetchModalities from './components/requisitions/FetchModalities'

function App() {
  return (
    <div className='App d-flex'>
      <Sidebar />
      <div className='d-flex flex-column w-100'>
        <Navbar />
        <FetchModalities />
      </div>
    </div>
  )
}

export default App

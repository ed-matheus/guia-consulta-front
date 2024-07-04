import './App.css'

// Componentes
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import DataFetcher from './components/DataFetcher'

function App() {
  return (
    <div className='App d-flex'>
      <Sidebar />
      <div className='d-flex flex-column w-100'>
        <Navbar />
        <DataFetcher />
      </div>
    </div>
  )
}

export default App

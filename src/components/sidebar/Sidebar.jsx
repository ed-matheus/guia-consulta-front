// CSS
import './Sidebar.css'

import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <nav className='sidebar h-100' >
            <div className='logo mb-5 d-flex align-items-center justify-content-center'>
                <h4>Guia de Consulta</h4>
            </div>

            <div className='links'>
                <NavLink to="/" className='mb-4'>
                    <i class="fa-solid fa-house"></i> Home
                </NavLink>
                <NavLink to="/usuario" className='mb-4'>
                    <i class="fa-solid fa-user"></i> Usuário
                </NavLink>
                <NavLink to="/dashboard" className='mb-4'>
                    <i class="fa-solid fa-gauge"></i> Dashboard
                </NavLink>
            </div>
        </nav>
    )
}

export default Sidebar
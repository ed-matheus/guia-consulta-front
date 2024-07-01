import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar h-100' >
            <div className='logo py-3'>
                <h4>Guia de Consulta</h4>
            </div>

            <div className='links'>
                <a href="#" className='mb-3'>
                    <i class="fa-solid fa-house"></i> Home
                </a>
                <a href="#" className='mb-3'>Usuário</a>
                <a href="#">Dashboard</a>
            </div>
        </div>
    )
}

export default Sidebar
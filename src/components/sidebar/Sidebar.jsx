import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar h-100' >
            <div className='logo mb-5 d-flex align-items-center justify-content-center'>
                <h4>Guia de Consulta</h4>
            </div>

            <div className='links'>
                <a href="#" className='mb-4'>
                    <i class="fa-solid fa-house"></i> Home
                </a>
                <a href="#" className='mb-4'>
                <i class="fa-solid fa-user"></i> Usuário
                </a>
                <a href="#">
                    <i class="fa-solid fa-gauge"></i> Dashboard
                </a>
            </div>
        </div>
    )
}

export default Sidebar
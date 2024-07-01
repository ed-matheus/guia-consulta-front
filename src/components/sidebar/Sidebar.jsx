import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar h-100' >
            <div className='logo'>
                <h4>Guia de Consulta</h4>
            </div>

            <div className='links'>
                <a href="#">Home</a>
                <a href="#">Usuário</a>
                <a href="#">Dashboard</a>
            </div>
        </div>
    )
}

export default Sidebar
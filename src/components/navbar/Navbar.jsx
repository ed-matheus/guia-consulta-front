import './Navbar.css'
import userAvatar from '/avatar.png'

const Navbar = (props) => {
    return (
        <nav className='navbar bg-body-tertiary w-100 px-3'>
            <div className='container-fluid'>
                <span className='display-6'>{props.page}</span>

                <div className='user_info d-flex align-items-center'>
                    <span className='fw-bold fs-5'>Username</span>
                    <div className='avatar ms-3'>
                        <img src={userAvatar} alt="" width={50} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
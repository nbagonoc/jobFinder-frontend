import { Link } from 'react-router-dom'

import { useAuthContext } from '../../hooks/useAuthContext'

const Navigation = () => {
    const {user, dispatch} = useAuthContext()

    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        dispatch({type: 'LOGOUT'})
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Navbar
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-between"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">
                        {user && user.role === 'admin' && (
                            <li className="nav-item">
                                <Link to="/jobs/create" className="nav-link">
                                    Create
                                </Link>
                            </li>
                        )}
                        <li className="nav-item">
                            <Link to="/jobs" className="nav-link">
                                Jobs
                            </Link>
                        </li>
                    </ul>
                    <div className=''>
                        {user && (
                            <div>
                                <span className="text-light nav-item me-2">
                                    Welcome {user.name}
                                </span>
                                <button onClick={(e) => handleLogout(e)} className="btn btn-danger btn-sm">
                                    Logout
                                </button>
                            </div>
                        )}
                        {!user && (
                            <div>
                                <Link to="/login" className="btn btn-success btn-sm me-1">
                                    Login
                                </Link>
                                <Link to="/register" className="btn btn-primary btn-sm me-1">
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation

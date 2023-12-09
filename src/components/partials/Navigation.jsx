import { Link, useNavigate, useLocation } from 'react-router-dom'

import { useAuthContext } from '../../hooks/useAuthContext'

const Navigation = () => {
    const { user, dispatch } = useAuthContext()
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        dispatch({ type: 'LOGOUT' })
        navigate('/login')
    }
    // todo: move items to separate components to simplify/clean-up the code
    return (
        !(
            location.pathname === '/register' ||
            location.pathname === '/register-applicant' ||
            location.pathname === '/register-recruiter' ||
            location.pathname === '/login'
        ) && (
            <nav className='navbar navbar-expand-sm bg-white shadow-sm mb-3'>
                <div className='container-lg'>
                    <Link to='/' className='navbar-brand fw-bold text-primary'>
                        JobFinder
                    </Link>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div
                        className='collapse navbar-collapse justify-content-between'
                        id='navbarSupportedContent'
                    >
                        <ul className='navbar-nav mr-auto'>
                            {user && user.role === 'recruiter' && (
                                <li className='nav-item'>
                                    <Link
                                        to='/jobs/owned'
                                        className='nav-link'
                                    >
                                        My Jobs
                                    </Link>
                                </li>

                            )}
                            <li className='nav-item'>
                                <Link to='/jobs' className='nav-link'>
                                    Jobs
                                </Link>
                            </li>
                        </ul>
                        <ul className='navbar-nav'>
                            {user && (
                                <li className='nav-item dropdown'>
                                    <a
                                        className='nav-link dropdown-toggle'
                                        href='#'
                                        role='button'
                                        data-bs-toggle='dropdown'
                                        aria-expanded='false'
                                    >
                                        Welcome {user.name}
                                    </a>
                                    <ul className='dropdown-menu'>
                                        {user && user.role === 'recruiter' && (
                                            <li className='border-bottom'>
                                                <a
                                                    className='dropdown-item'
                                                    href='#'
                                                >
                                                    Dashboard (soon)
                                                </a>
                                            </li>
                                        )}
                                        <li className='border-bottom'>
                                            <a
                                                className='dropdown-item'
                                                href='/profile'
                                            >
                                                Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className='dropdown-item'
                                                onClick={(e) => handleLogout(e)}
                                                href='#'
                                            >
                                                Logout
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            )}
                            {!user && (
                                <>
                                    <Link
                                        to='/login'
                                        className='btn btn-success btn-sm me-0 me-sm-1'
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to='/register'
                                        className='btn btn-primary btn-sm mt-2 mt-sm-0'
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    )
}

export default Navigation

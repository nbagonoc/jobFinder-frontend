import { Link } from 'react-router-dom'

import LoginForm from './LoginForm'

const LoginFormContainer = () => {
    return (
        <div className='d-flex flex-column min-vh-100 min-vw-100'>
            <div className='d-md-flex flex-grow-1 justify-content-center align-items-center'>
                <div className='col-md-6 col-lg-4 col-xl-3 mx-auto'>
                    <div className='card'>
                        <div className='card-header'>
                            <div className='row'>
                                <div className='col-6'>
                                    <h3 className='mb-0'>Login</h3>
                                </div>
                                <div className='col-6'>
                                    <Link
                                        to='/'
                                        className='btn btn-sm btn-secondary float-end'
                                    >
                                        Home
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <LoginForm />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p className='text-center'>
                            Not yet registered?{' '}
                            <Link
                                className='btn btn-sm btn-secondary'
                                to='/register'
                            >
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginFormContainer

import { Link, useLocation } from 'react-router-dom'

import RegisterForm from './RegisterForm'
import RegisterRecruiterForm from './RegisterRecruiterForm'

const RegisterFormContainer = () => {
    const location = useLocation()
    return (
        <div className='d-flex flex-column min-vh-100 min-vw-100'>
            <div className='d-md-flex flex-grow-1 justify-content-center align-items-center'>
                <div className='col-md-8 col-lg-4 mx-auto'>
                    <div className='card'>
                        <div className='card-header'>
                            <div className='row'>
                                <div className='col-6'>
                                    <h3 className='mb-0'>Register</h3>
                                </div>
                                <div className='col-6'>
                                    <Link
                                        to='/register'
                                        className='btn btn-sm btn-secondary float-end'
                                    >
                                        Back
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            {location.pathname === '/register-applicant' ? (
                                <RegisterForm />
                            ) : (
                                <RegisterRecruiterForm />
                            )}
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p className='text-center'>
                            Already signed-up?{' '}
                            <Link
                                className='btn btn-sm btn-secondary'
                                to='/login'
                            >
                                Log-in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterFormContainer

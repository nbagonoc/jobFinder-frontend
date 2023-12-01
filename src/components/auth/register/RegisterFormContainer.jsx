import { Link, useLocation } from 'react-router-dom'

import FullVerticalFluid from '../../partials/FullVerticalFluid'
import RegisterForm from './RegisterForm'
import RegisterRecruiterForm from './RegisterRecruiterForm'

const RegisterFormContainer = () => {
    const location = useLocation()
    return (
        <FullVerticalFluid>
            <div className='col-md-6 col-lg-4 col-xl-3 mx-auto'>
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
                        <Link className='btn btn-sm btn-secondary' to='/login'>
                            Log-in
                        </Link>
                    </p>
                </div>
            </div>
        </FullVerticalFluid>
    )
}

export default RegisterFormContainer

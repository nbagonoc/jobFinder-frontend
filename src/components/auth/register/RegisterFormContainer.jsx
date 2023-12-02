import { Link, useLocation } from 'react-router-dom'

import FullVerticalFluid from '../../partials/FullVerticalFluid'
import RegisterForm from './RegisterForm'
import RegisterRecruiterForm from './RegisterRecruiterForm'

const RegisterFormContainer = () => {
    const location = useLocation()
    return (
        <FullVerticalFluid>
            <div className='col-sm-6 col-lg-4 col-xl-3'>
                <div className='card'>
                    <div className='card-header'>
                        <h1 className='mb-0 fs-3 text-center'>Sign-up</h1>
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
                        Already signed-up?&nbsp;
                        <Link className='btn btn-sm btn-success' to='/login'>
                            Log-in
                        </Link>
                    </p>
                    <p className='text-center text-muted fw-lighter'>
                        Not sure?&nbsp;
                        <Link
                            className=''
                            to='/'
                        >
                            Go Home
                        </Link>
                    </p>
                </div>
            </div>
        </FullVerticalFluid>
    )
}

export default RegisterFormContainer

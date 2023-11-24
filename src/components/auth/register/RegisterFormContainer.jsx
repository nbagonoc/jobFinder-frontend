import { Link, useLocation } from 'react-router-dom'

import RegisterForm from './RegisterForm'
import RegisterRecruiterForm from './RegisterRecruiterForm'

const RegisterFormContainer = () => {
    const location = useLocation()
    return (
        <div className='col-md-8 col-lg-4 mx-auto'>
            <div className='card'>
                <div className='card-header'>
                    <div className='row'>
                        <div className='col-6'>
                            <h3 className='mb-0'>Register</h3>
                        </div>
                        <div className='col-6'>
                            <Link
                                to='/'
                                className='btn btn-secondary float-end'
                            >
                                Cancel
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='card-body'>
                {location.pathname === '/register-applicant' ? (
                    <RegisterForm />
                ):(
                    <RegisterRecruiterForm />
                )}
                    
                </div>
            </div>
        </div>
    )
}

export default RegisterFormContainer

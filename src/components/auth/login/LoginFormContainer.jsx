import { Link } from 'react-router-dom'

import FullVerticalFluid from '../../partials/FullVerticalFluid'
import LoginForm from './LoginForm'

const LoginFormContainer = () => {
    return (
        <FullVerticalFluid>
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
                            className='btn btn-sm btn-primary'
                            to='/register'
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </FullVerticalFluid>
    )
}

export default LoginFormContainer

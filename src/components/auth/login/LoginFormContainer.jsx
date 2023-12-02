import { Link } from 'react-router-dom'

import FullVerticalFluid from '../../partials/FullVerticalFluid'
import LoginForm from './LoginForm'

const LoginFormContainer = () => {
    return (
        <FullVerticalFluid>
            <div className='col-sm-6 col-lg-4 col-xl-3'>
                <div className='card'>
                    <div className='card-header'>
                        <h1 className='mb-0 fw-bold fs-3 text-center'>Sign-in</h1>
                    </div>
                    <div className='card-body'>
                        <LoginForm />
                    </div>
                </div>
                <div className='mt-3'>
                    <p className='text-center text-secondary fw-light'>
                        Not yet registered?&nbsp;
                        <Link
                            className='btn btn-sm btn-primary'
                            to='/register'
                        >
                            Register
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

export default LoginFormContainer

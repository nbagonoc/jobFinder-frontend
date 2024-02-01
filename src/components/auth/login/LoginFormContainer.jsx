import { Link } from 'react-router-dom'

import FullVerticalFluid from '../../partials/layouts/FullVerticalFluid'
import AlertMessage from '../../partials/AlertMessage/AlertMessage'
import LoginForm from './LoginForm'

const LoginFormContainer = () => {
    return (
        <FullVerticalFluid>
            <div className='col-sm-6 col-lg-4 col-xxl-2'>
                <AlertMessage />
                <div className='card'>
                    <div className='card-header'>
                        <h1 className='mb-0 fw-bold fs-3 text-center'>Sign-in</h1>
                    </div>
                    <div className='card-body'>
                        <LoginForm />
                    </div>
                </div>
                <div className='mt-3'>
                    <p className='text-center text-secondary fw-light mb-0'>
                        Not yet registered?&nbsp;
                        <Link
                            className=''
                            to='/register'
                        >
                            Register
                        </Link>
                    </p>
                    <p className='text-center text-secondary fw-light'>
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

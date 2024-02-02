import { Link } from 'react-router-dom'

import FullVerticalFluid from '../../partials/layouts/FullVerticalFluid'
import RegisterForm from './RegisterForm'

const RegisterFormContainer = () => {
    return (
        <FullVerticalFluid>
            <div className='col-sm-6 col-lg-4 col-xxl-2'>
                <div className='card'>
                    <div className='card-header'>
                        <h1 className='mb-0 fs-3 text-center'>Sign-up</h1>
                    </div>
                    <div className='card-body'>
                        <RegisterForm />
                    </div>
                </div>
                <div className='mt-3'>
                    <p className='text-center text-secondary fw-light mb-0'>
                        Already signed-up?&nbsp;
                        <Link className='' to='/login'>
                            Log-in
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

export default RegisterFormContainer

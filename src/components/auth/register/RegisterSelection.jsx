import { Link } from 'react-router-dom'

import FullVertical from '../../partials/FullVertical'

const RegisterSelection = () => {
    return (
        <FullVertical>
            <div className='mb-3 mt-3'>
                <h1 className='text-center fw-bold fs-2 text-primary'>Sign-Up</h1>
                <h3 className='text-center fw-light fs-4 text-secondary'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates, velit deleniti sint rerum quod sed blanditiis
                    deserunt autem optio, quibusdam commodi nihil nemo.
                    Accusantium consequatur alias cum id ut animi!
                </h3>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <Link
                        to='/register-applicant'
                        className='text-decoration-none'
                    >
                        <div className='card p-5'>
                            <div className='card-body'>
                                <h2 className='text-center fw-bold fs-4 text-primary'>
                                    Sign-up as Applicant
                                </h2>
                                <p className='text-secondary fw-light'>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Iusto, dolore placeat?
                                    Unde veniam repellendus pariatur. Asperiores
                                    numquam illo repellat deleniti at, qui
                                    dolorem facilis nulla cumque, enim sit unde
                                    beatae.
                                </p>
                                <div className='text-center'>
                                    <Link
                                        className='btn btn-primary'
                                        to='/register-applicant'
                                    >
                                        Sign-up as Applicant
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='mt-3 mt-md-0 col-md-6'>
                    <Link
                        to='/register-recruiter'
                        className='text-decoration-none'
                    >
                        <div className='card p-5'>
                            <div className='card-body'>
                                <h2 className='text-center fw-bold fs-4 text-primary'>
                                    Sign-up as Recruiter
                                </h2>
                                <p className='text-secondary fw-light'>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Iusto, dolore placeat?
                                    Unde veniam repellendus pariatur. Asperiores
                                    numquam illo repellat deleniti at, qui
                                    dolorem facilis nulla cumque, enim sit unde
                                    beatae.
                                </p>
                                <div className='text-center'>
                                    <Link
                                        className='btn btn-primary'
                                        to='/register-recruiter'
                                    >
                                        Sign-up as Recruiter
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Link>
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
        </FullVertical>
    )
}

export default RegisterSelection

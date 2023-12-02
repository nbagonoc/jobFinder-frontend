import { Link } from 'react-router-dom'

import FullVertical from '../../partials/FullVertical'

const RegisterSelection = () => {
    return (
        <FullVertical>
            <div className='mb-3'>
                <h1 className='text-center fw-bold text-primary'>Sign-Up</h1>
                <h3 className='text-center'>
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
                                <h2 className='text-center fw-bold text-primary'>
                                    Sign-up as Applicant
                                </h2>
                                <p className='fw-light'>
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
                                <h2 className='text-center fw-bold text-primary'>
                                    Sign-up as Recruiter
                                </h2>
                                <p className='fw-light'>
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
                <p className='text-center'>
                    Already signed-up?{' '}
                    <Link className='btn btn-sm btn-success' to='/login'>
                        Log-in
                    </Link>
                </p>
            </div>
        </FullVertical>
    )
}

export default RegisterSelection

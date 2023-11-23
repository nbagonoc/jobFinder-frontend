import { Link } from 'react-router-dom'

const RegisterSelection = () => {
    return (
        <div className='row'>
            <div className='col-md-6  vertical-align'>
                <Link to='/register-applicant' className='text-decoration-none'>
                    <div className='card p-5'>
                        <div className='card-body'>
                            <h1 className='text-center fw-bold'>Sign-up as Applicant</h1>
                            <p className='fw-light'>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Iusto, dolore placeat? Unde
                                veniam repellendus pariatur. Asperiores numquam
                                illo repellat deleniti at, qui dolorem facilis
                                nulla cumque, enim sit unde beatae.
                            </p>
                            <div className='text-center'>
                                <Link className='btn btn-primary' to='/register-applicant'>
                                    Sign-up as Applicant
                                </Link>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className='mt-3 mt-md-0 col-md-6'>
                <Link to='/register-recruiter' className='text-decoration-none'>
                    <div className='card p-5'>
                        <div className='card-body'>
                            <h1 className='text-center fw-bold'>Sign-up as Recruiter</h1>
                            <p className='fw-light'>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Iusto, dolore placeat? Unde
                                veniam repellendus pariatur. Asperiores numquam
                                illo repellat deleniti at, qui dolorem facilis
                                nulla cumque, enim sit unde beatae.
                            </p>
                            <div className='text-center'>
                                <Link className='btn btn-primary' to='/register-recruiter'>
                                    Sign-up as Recruiter
                                </Link>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default RegisterSelection

import { Link } from 'react-router-dom'
import JobCreateForm from './JobCreateForm'

const JobCreateFormContainer = () => {
    return (
        <div className='container'>
            <div className='col-md-8 col-lg-6 mx-auto'>
                <div className='card'>
                    <div className='card-header'>
                        <div className='row'>
                            <div className='col-6'>
                                <h3 className='text-capitalize mb-0'>
                                    Create job post
                                </h3>
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
                        <JobCreateForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCreateFormContainer

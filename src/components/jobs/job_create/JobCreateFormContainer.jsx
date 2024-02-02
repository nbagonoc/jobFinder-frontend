import Default from '../../partials/layouts/Default'
import JobCreateForm from './JobCreateForm'

const JobCreateFormContainer = () => {
    return (
        <Default>
            <div className='col-md-8 col-lg-6 mx-auto'>
                <div className='card'>
                    <div className='card-header'>
                        <h1 className='mb-0 fw-bold fs-3 text-center'>Create job post</h1>
                    </div>
                    <div className='card-body'>
                        <JobCreateForm />
                    </div>
                </div>
            </div>
        </Default>
    )
}

export default JobCreateFormContainer

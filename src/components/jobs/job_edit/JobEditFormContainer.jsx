import Default from '../../partials/layouts/Default'
import JobEditForm from './JobEditForm'

const JobEditFormContainer = () => {
    return (
        <Default>
            <div className='col-md-8 col-lg-6 mx-auto'>
                <div className='card'>
                    <div className='card-header'>
                        <h1 className='mb-0 fw-bold fs-3 text-center'>Edit job post</h1>
                    </div>
                    <div className='card-body'>
                        <JobEditForm />
                    </div>
                </div>
            </div>
        </Default>
    )
}

export default JobEditFormContainer

import JobCreateForm from './JobCreateForm'

const JobCreateFormContainer = () => {
    return (
        <div className='container'>
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
        </div>
    )
}

export default JobCreateFormContainer

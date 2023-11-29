import JobListDetailsRecruiter from './JobListDetailsRecruiter'
import AlertMessage from '../../partials/AlertMessage'

const JobListContainerRecruiter = () => {
    return (
        <div className='container'>
            <div className='col-md-8 col-lg-6 mx-auto mt-3'>
                <AlertMessage />
                <JobListDetailsRecruiter />
            </div>
        </div>
    )
}

export default JobListContainerRecruiter

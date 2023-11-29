import JobListDetailsRecruiter from './JobListDetailsRecruiter'
import AlertMessage from '../../partials/AlertMessage'

const JobListContainerRecruiter = () => {
    return (
        <div className='container'>
            <div className='col-md-8 col-lg-6 mx-auto'>
                <AlertMessage />
                <JobListDetailsRecruiter />
            </div>
        </div>
    )
}

export default JobListContainerRecruiter

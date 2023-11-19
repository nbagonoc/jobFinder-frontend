import JobListDetailsRecruiter from './JobListDetailsRecruiter'
import AlertMessage from '../../partials/AlertMessage'

const JobListContainerRecruiter = () => {
    return (
        <div className='JobListContainerRecruiter col-md-8 col-lg-6 mx-auto' data-testid='JobListContainerRecruiter'>
            <AlertMessage />
            <JobListDetailsRecruiter />
        </div>
    )
}

export default JobListContainerRecruiter

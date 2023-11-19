import JobListDetailsRecruiter from './JobListDetailsRecruiter'
import AlertMessage from '../../partials/AlertMessage'

const JobListContainerRecruiter = () => {
    return (
        <div className='JobListContainerRecruiter' data-testid='JobListContainerRecruiter'>
            <AlertMessage />
            <JobListDetailsRecruiter />
        </div>
    )
}

export default JobListContainerRecruiter

import JobListDetails from './JobListDetails'
import AlertMessage from '../../partials/AlertMessage'

const JobListContainer = () => {
    return (
        <div className='JobListContainer col-md-8 col-lg-6 mx-auto' data-testid='JobListContainer'>
            <AlertMessage />
            <JobListDetails />
        </div>
    )
}

export default JobListContainer

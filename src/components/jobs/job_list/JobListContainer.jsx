import JobListDetails from './JobListDetails'
import AlertMessage from '../../partials/AlertMessage'

const JobListContainer = () => {
    return (
        <div className='container'>
            <div className='col-md-8 col-lg-6 mx-auto mt-3'>
                <AlertMessage />
                <JobListDetails />
            </div>
        </div>
    )
}

export default JobListContainer

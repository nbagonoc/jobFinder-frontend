import JobListDetails from './JobListDetails'
import JobListFilter from './JobListFilter'
import AlertMessage from '../../partials/AlertMessage'

const JobListContainer = () => {
    return (
        <div className='container-lg'>
            <AlertMessage />
            <div className='row'>
                <div className='col-md-5 mb-3'>
                    <JobListFilter/>
                </div>
                <div className='col-md-7'>
                    <JobListDetails />
                </div>
            </div>
        </div>
    )
}

export default JobListContainer

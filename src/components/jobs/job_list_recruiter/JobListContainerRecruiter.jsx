import JobListDetailsRecruiter from './JobListDetailsRecruiter'
import JobListFilter from './JobListFilter'
import AlertMessage from '../../partials/AlertMessage'

const JobListContainerRecruiter = () => {
    return (
        <div className='container-lg'>
            <AlertMessage />
            <div className='row'>
                <div className='col-md-5'>
                    <JobListFilter />
                </div>
                <div className='col-md-7'>
                    <JobListDetailsRecruiter />
                </div>
            </div>
        </div>
    )
}

export default JobListContainerRecruiter

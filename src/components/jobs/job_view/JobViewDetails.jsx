import PropTypes from 'prop-types'

import JobViewActions from './JobViewActions'

const JobViewDetails = ({ job }) => {
    return (
        <div>
            <h6 className='text-muted fw-light text-lowercase'>
                {job.position} | {job.company} | {job.location}
            </h6>
            <p>{job.description}</p>
            <JobViewActions ids={{'_id': job._id, 'recruiter': job.recruiter}} />
        </div>
    )
}

JobViewDetails.propTypes = {
    job: PropTypes.object.isRequired,
}

export default JobViewDetails

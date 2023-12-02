import PropTypes from 'prop-types'

import JobViewActions from './JobViewActions'

const JobViewSubDetails = ({ job }) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <h1 className='card-title fw-bold text-primary fs-4'>{job.title}</h1>
                <h6 className='fw-bold'>
                    Company: <span className='text-muted fw-light'>{job.company}</span>
                </h6>
                <h6 className='fw-bold'>
                    Position: <span className='text-muted fw-light'>{job.position}</span>
                </h6>
                <h6 className='fw-bold'>
                    Salary: <span className='text-muted fw-light'>{job.salary}</span>
                </h6>
                <h6 className='fw-bold'>
                    Location: <span className='text-muted fw-light'>{job.location}</span>
                </h6>
                <h6 className='text-muted fw-light text-lowercase'>
                    <span className='badge bg-primary me-1'>
                        {job.category}
                    </span>
                    <span className='badge bg-primary me-1'>
                        {job.arrangement}
                    </span>
                    <span className='badge bg-primary me-1'>{job.type}</span>
                </h6>
                <JobViewActions
                    ids={{ _id: job._id, recruiter: job.recruiter }}
                />
            </div>
        </div>
    )
}

JobViewSubDetails.propTypes = {
    job: PropTypes.object.isRequired,
}

export default JobViewSubDetails

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const JobListDetails = ({job}) => {
    return (
        <Link to={`/jobs/view/${job._id}`} className='link-primary text-capitalize text-decoration-none'>
            <div className="card mb-3">
                <div className="card-body">
                    <h3 className="card-title fw-bold text-primary fs-5">
                        {job.title}
                    </h3>
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
                </div>
            </div>
        </Link>
    )
}

JobListDetails.propTypes = {
    job: PropTypes.object.isRequired,
}

export default JobListDetails

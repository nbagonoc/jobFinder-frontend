import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const JobListDetails = ({ job }) => {
    return (
        <div className='col-sm-6 col-lg-12'>
            <Link
                to={`/jobs/view/${job._id}`}
                className='link-primary text-capitalize text-decoration-none'
            >
                <div className='card mb-3'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <h3 className='card-title fw-bold text-primary fs-5'>
                                    {job.title}
                                </h3>
                            </div>
                            <div className='col-lg-3'>
                                <h6 className='fw-bold'>
                                    <span className='text-muted fw-light'>
                                        {job.position}
                                    </span>
                                </h6>
                            </div>
                            <div className='col-lg-3'>
                                <span className='badge bg-primary me-1'>
                                    {job.category}
                                </span>
                            </div>
                            <div className='col-lg-2'>
                                <span className='badge bg-primary me-1'>
                                    {job.applicants.length}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

JobListDetails.propTypes = {
    job: PropTypes.object.isRequired,
}

export default JobListDetails

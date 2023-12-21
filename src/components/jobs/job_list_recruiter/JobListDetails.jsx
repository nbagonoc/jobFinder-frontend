import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const JobListDetails = ({ job }) => {
    return (
        <div className='col-sm-6 col-lg-12'>
            <div className='card mb-3 mb-lg-1'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <h6 className='card-title fw-bold text-primary fs-6'>
                                {job.title}
                            </h6>
                        </div>
                        <div className='col-lg-3'>
                            <h6 className='fw-bold'>
                                <span className='text-muted fw-light'>
                                    {job.position}
                                </span>
                            </h6>
                        </div>
                        <div className='col-lg-2'>
                            <span className='badge bg-primary me-1'>
                                {job.category}
                            </span>
                        </div>
                        <div className='col-lg-1'>
                            <span className='badge bg-primary me-1'>
                                {job.applications.length}
                            </span>
                        </div>
                        <div className='col-lg-3 mt-1 mt-lg-0'>
                            <hr className='d-block d-lg-none'/>
                            <Link
                                to={`/jobs/view/${job._id}`}
                                className='btn btn-secondary btn-sm me-1'
                            >
                                view job
                            </Link>
                            {job.applications.length > 0 && (
                                <Link
                                    to={`/jobs/${job._id}/applicants`}
                                    className='btn btn-secondary btn-sm me-1'
                                >
                                    view applicants
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

JobListDetails.propTypes = {
    job: PropTypes.object.isRequired,
}

export default JobListDetails

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ApplicationListDetails = ({ jobApplicant }) => {
    return (
        <div className='col-sm-6 col-lg-12'>
            <div className='card mb-3 mb-lg-1'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <h3 className='card-title fw-bold text-primary fs-5'>
                                {jobApplicant.user.firstName} {jobApplicant.user.lastName}
                            </h3>
                        </div>
                        <div className='col-lg-3'>
                            <h6 className='fw-bold'>
                                <span className='text-muted fw-light'>
                                    {jobApplicant.user.email}
                                </span>
                            </h6>
                        </div>
                        <div className='col-lg-2'>
                            <h6 className='fw-bold'>
                                <span className='text-muted fw-light'>
                                    {jobApplicant.status}
                                </span>
                            </h6>
                        </div>
                        <div className='col-lg-4 mt-1 mt-lg-0'>
                            <hr className='d-block d-lg-none'/>
                            <Link
                                to={`/applicant/${jobApplicant.user._id}`}
                                className='btn btn-secondary btn-sm me-1'
                            >
                                View
                            </Link>
                            <Link
                                to={`/`}
                                className='btn btn-secondary btn-sm me-1'
                            >
                                Deny
                            </Link>
                            <Link
                                to={`/`}
                                className='btn btn-secondary btn-sm me-1'
                            >
                                Whitelist
                            </Link>
                            <Link
                                to={`/`}
                                className='btn btn-success btn-sm me-1'
                            >
                                Approve
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ApplicationListDetails.propTypes = {
    jobApplicant: PropTypes.object.isRequired,
}

export default ApplicationListDetails

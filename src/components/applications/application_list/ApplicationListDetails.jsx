import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ApplicationListDetails = ({ application }) => {
    return (
        <div className='col-sm-6 col-lg-12'>
            <Link
                to={`/jobs/view/${application.job._id}`}
                className='text-decoration-none'
            >
                <div className='card mb-3 mb-lg-1'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                    <h6 className='card-title fw-bold text-primary fs-6'>
                                        {application.job.title}
                                    </h6>
                            </div>
                            <div className='col-lg-3'>
                                <h6 className='fw-bold'>
                                    <span className='text-muted fw-light'>
                                        {application.job.position}
                                    </span>
                                </h6>
                            </div>
                            <div className='col-lg-3'>
                                <h6 className='fw-bold'>
                                    <span className='text-muted fw-light'>
                                        {application.job.company}
                                    </span>
                                </h6>
                            </div>
                            <div className='col-lg-2'>
                                <h6 className='fw-bold'>
                                    <span
                                        className={`fw-light ${
                                                        application.status == 'Denied' ? 'text-danger' :
                                                        application.status == 'Approved' ? 'text-success' : 
                                                        application.status == 'Whitelisted' ? 'text-primary' :
                                                    'text-muted' }`}
                                    >
                                        {application.status}
                                    </span>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

ApplicationListDetails.propTypes = {
    application: PropTypes.object.isRequired,
}

export default ApplicationListDetails

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ApplicantListActions from './ApplicantListActions'

const ApplicationListDetails = ({ applicant }) => {
    return (
        <div className='col-sm-6 col-lg-12'>
            <div className='card mb-3 mb-lg-1'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <Link
                                to={`/applicant/${applicant.user._id}`}
                                className='text-decoration-none'
                            >
                                <h6 className='card-title fw-bold text-primary fs-6'>
                                    {applicant.user.firstName}{' '}
                                    {applicant.user.lastName}
                                </h6>
                            </Link>
                        </div>
                        <div className='col-lg-3'>
                            <h6 className='fw-bold'>
                                <span className='text-muted fw-light'>
                                    {applicant.user.email}
                                </span>
                            </h6>
                        </div>
                        <div className='col-lg-2'>
                            <h6 className='fw-bold'>
                                <span
                                    className={`fw-light ${
                                                    applicant.status == 'Denied' ? 'text-danger' :
                                                    applicant.status == 'Approved' ? 'text-success' : 
                                                    applicant.status == 'Whitelisted' ? 'text-warning' :
                                                'text-muted' }`}
                                >
                                    {applicant.status}
                                </span>
                            </h6>
                        </div>
                        <ApplicantListActions applicationId={applicant._id}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

ApplicationListDetails.propTypes = {
    applicant: PropTypes.object.isRequired,
}

export default ApplicationListDetails

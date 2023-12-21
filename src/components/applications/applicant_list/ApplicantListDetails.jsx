import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ApplicantListActions from './ApplicantListActions'

const ApplicationListDetails = ({ jobApplicant }) => {
    return (
        <div className='col-sm-6 col-lg-12'>
            <div className='card mb-3 mb-lg-1'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <Link
                                to={`/applicant/${jobApplicant.user._id}`}
                                className='text-decoration-none'
                            >
                                <h3 className='card-title fw-bold text-primary fs-5'>
                                    {jobApplicant.user.firstName}{' '}
                                    {jobApplicant.user.lastName}
                                </h3>
                            </Link>
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
                                <span
                                    className={`fw-light ${
                                                    jobApplicant.status == 'Denied' ? 'text-danger' :
                                                    jobApplicant.status == 'Approved' ? 'text-success' : 
                                                    jobApplicant.status == 'Whitelisted' ? 'text-warning' :
                                                'text-muted' }`}
                                >
                                    {jobApplicant.status}
                                </span>
                            </h6>
                        </div>
                        <ApplicantListActions applicationId={jobApplicant._id}/>
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

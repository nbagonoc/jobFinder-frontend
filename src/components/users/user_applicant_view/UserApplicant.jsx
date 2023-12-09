import PropTypes from 'prop-types'

const UserApplicant = ({ applicant }) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <h1 className='card-title fw-bold text-primary fs-4'>
                    {`${applicant.firstName} ${applicant.lastName}`}
                </h1>
                <h6 className='fw-bold'>
                    Phone: <span className='text-muted fw-light'>Phone</span>
                </h6>
                <h6 className='fw-bold'>
                    Email: <span className='text-muted fw-light'>{applicant.email}</span>
                </h6>
                <h6 className='fw-bold'>
                    Location:{' '}
                    <span className='text-muted fw-light'>Location</span>
                </h6>
            </div>
        </div>
    )
}

UserApplicant.propTypes = {
    applicant: PropTypes.object.isRequired,
}

export default UserApplicant

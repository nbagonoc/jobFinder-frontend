import PropTypes from 'prop-types'

const Profile = ({ applicant }) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <img
                    src={applicant.photo}
                    alt='profile'
                    className='rounded-circle mx-auto d-block img-fluid'
                    style={{ width: '150px', height: '150px' }}
                />
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

Profile.propTypes = {
    applicant: PropTypes.object.isRequired,
}

export default Profile

import PropTypes from 'prop-types'

const UserProfile = ({ profile }) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <h1 className='card-title fw-bold text-primary fs-4'>
                    {`${profile.firstName} ${profile.lastName}`}
                </h1>
                <h6 className='fw-bold'>
                    Phone: <span className='text-muted fw-light'>Phone</span>
                </h6>
                <h6 className='fw-bold'>
                    Email: <span className='text-muted fw-light'>{profile.email}</span>
                </h6>
                <h6 className='fw-bold'>
                    Location:{' '}
                    <span className='text-muted fw-light'>Location</span>
                </h6>
            </div>
        </div>
    )
}

UserProfile.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default UserProfile

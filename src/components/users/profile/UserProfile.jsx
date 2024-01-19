import PropTypes from 'prop-types'

const UserProfile = ({ profile }) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <img
                    src={profile.photo} //need to refactor multer to crop image to square
                    alt='profile'
                    className='rounded-circle mx-auto d-block img-fluid'
                    style={{ width: '150px', height: '150px' }}
                />
                <h1 className='card-title fw-bold text-primary text-center fs-4'>
                    {`${profile.firstName} ${profile.lastName}`}
                </h1>
                <h6 className='fw-bold'>
                    Phone: <span className='text-muted fw-light'>Phone</span>
                </h6>
                <h6 className='fw-bold'>
                    Email:{' '}
                    <span className='text-muted fw-light'>{profile.email}</span>
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

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserProfile = ({ profile }) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <img
                    src={profile.photo}
                    alt='profile'
                    className='rounded-circle mx-auto d-block img-fluid'
                    style={{ width: '150px', height: '150px' }}
                />
                <h1 className='card-title fw-bold text-primary text-center fs-4 mb-0'>
                    {`${profile.firstName} ${profile.lastName}`}
                </h1>
                {profile && profile.company && (
                <h6 className='card-title text-primary text-center'>
                    {`${profile.company}`}
                </h6>
                )}
                <h6 className='fw-bold mt-3'>
                    Phone: <span className='text-muted fw-light'>{profile.phone}</span>
                </h6>
                <h6 className='fw-bold'>
                    Email:{' '}
                    <span className='text-muted fw-light'>{profile.email}</span>
                </h6>
                <h6 className='fw-bold'>
                    Location:{' '}
                    <span className='text-muted fw-light'>Location</span>
                </h6>
                <Link to={`/profile/edit`} className='btn btn-secondary btn-sm'>
                    Edit
                </Link>
            </div>
        </div>
    )
}

UserProfile.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default UserProfile
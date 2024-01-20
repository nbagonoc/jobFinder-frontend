import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserAbout = ({ profile }) => {
    return (
        <div className='card'>
            <div className='card-header'>
                <h3 className='fw-bold fs-5 mt-2'>About</h3>
            </div>
            <div className='card-body'>
                <p className='text-muted fw-light'>
                    {profile.about.about}
                </p>
                <Link to={`/profile/edit`} className='btn btn-primary btn-sm'>
                    Edit About
                </Link>
            </div>
        </div>
    )
}

UserAbout.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default UserAbout

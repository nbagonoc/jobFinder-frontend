import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const About = ({ profile = {} }) => {
    return (
        <div className='card'>
            <div className='card-header'>
                <h3 className='fw-bold fs-5 mt-2'>About {profile.company}</h3>
            </div>
            <div className='card-body'>
                {profile.about && profile.about.about ? (
                    <p className='text-muted fw-light'>{profile.about.about}</p>
                ) : (
                    <p className='text-muted fw-light'>No about information available.</p>
                )}
                <Link
                    to={`/about/edit`}
                    className='btn btn-secondary btn-sm'
                >
                    Edit
                </Link>
            </div>
        </div>
    )
}

About.propTypes = {
    profile: PropTypes.object,
}

export default About

import PropTypes from 'prop-types'

const About = ({ about }) => {
    return (
        <div className='card'>
            <div className='card-header'>
                <h3 className='fw-bold fs-5 mt-2'>About</h3>
            </div>
            <div className='card-body'>
                {about && about.about ? (
                    <p className='text-muted fw-light'>{about.about}</p>
                ) : (
                    <p className='text-muted fw-light'>No about information available.</p>
                )}
            </div>
        </div>
    )
}

About.propTypes = {
    about: PropTypes.object.isRequired,
}

export default About
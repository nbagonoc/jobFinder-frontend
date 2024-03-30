import PropTypes from 'prop-types'

const View = ({ skill }) => {

    return (
        <div>
            <h6 className='text-muted fw-light'>
                {skill.skill}
            </h6>
        </div>
    )
}

View.propTypes = {
    skill: PropTypes.object.isRequired,
}

export default View

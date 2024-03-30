import PropTypes from 'prop-types'

const View = ({ experience }) => {
    const fromDate = new Date(experience.from).toLocaleDateString()
    const toDate = new Date(experience.to).toLocaleDateString()

    return (
        <div>
            <h3 className='card-title fw-bold fs-6'>{experience.title}</h3>
            <h6 className='fw-bold'>
                Company:{' '}
                <span className='text-muted fw-light'>{experience.company}</span>
            </h6>
            <h6 className='fw-bold'>
                Description:{' '}
                <span className='text-muted fw-light'>{experience.description}</span>
            </h6>
            <h6 className='fw-bold'>
                year:{' '}
                <span className='text-muted fw-light'>
                    {fromDate} - {experience.current ? 'Current' : toDate}
                </span>
            </h6>
        </div>
    )
}

View.propTypes = {
    experience: PropTypes.object.isRequired,
}

export default View

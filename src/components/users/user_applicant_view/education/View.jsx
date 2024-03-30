import PropTypes from 'prop-types'

const View = ({ education }) => {
    const fromDate = new Date(education.from).toLocaleDateString()
    const toDate = new Date(education.to).toLocaleDateString()

    return (
        <div>
            <h3 className='card-title fw-bold fs-6'>{education.school}</h3>
            <h6 className='fw-bold'>
                Degree:{' '}
                <span className='text-muted fw-light'>{education.degree}</span>
            </h6>
            <h6 className='fw-bold'>
                year:{' '}
                <span className='text-muted fw-light'>
                    {fromDate} - {education.current ? 'Current' : toDate}
                </span>
            </h6>
        </div>
    )
}

View.propTypes = {
    education: PropTypes.object.isRequired,
}

export default View

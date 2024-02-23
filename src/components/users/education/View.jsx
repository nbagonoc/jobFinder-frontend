import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const View = ({ education }) => {
    const fromDate = new Date(education.from).toLocaleDateString();
    const toDate = new Date(education.to).toLocaleDateString();

    return (
        <div>
            <h3 className='card-title fw-bold fs-6'>{education.school}</h3>
            <h6 className='fw-bold'>
                Degree:{' '}
                <span className='text-muted fw-light'>{education.degree}</span>
            </h6>
            <h6 className='fw-bold'>
                year:{' '}
                <span className='text-muted fw-light'>{fromDate} - {toDate}</span>
            </h6>
            <Link to={`/profile/edit`} className='btn btn-secondary btn-sm'>
                Edit
            </Link>
            <Link to={`/profile/edit`} className='btn btn-danger btn-sm ms-1'>
                Delete
            </Link>
        </div>
    )
}

View.propTypes = {
    education: PropTypes.object.isRequired,
}

export default View

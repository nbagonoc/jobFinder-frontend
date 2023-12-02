import PropTypes from 'prop-types'

const JobViewDetails = ({ job }) => {
    return (
        <div className='card'>
            <div className='card-header'>
                <h3 className='fw-bold fs-5 mt-2'>About the job</h3>
            </div>
            <div className='card-body'>
                <p>{job.description}</p>
            </div>
        </div>
    )
}

JobViewDetails.propTypes = {
    job: PropTypes.object.isRequired,
}

export default JobViewDetails

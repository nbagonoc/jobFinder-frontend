import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const JobViewDetails = ({ job }) => {
    return (
        <div className='card'>
            <div className='card-header'>
                <div className='row'>
                    <div className='col-6'>
                        <h3 className='fw-bold fs-4'>About the job</h3>
                    </div>
                    <div className='col-6'>
                        <Link
                            to='/jobs'
                            className='btn btn-secondary float-end'
                        >
                            Back
                        </Link>
                    </div>
                </div>
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

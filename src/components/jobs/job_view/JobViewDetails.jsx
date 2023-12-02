import PropTypes from 'prop-types'

import JobViewActions from './JobViewActions'

const JobViewDetails = ({ job }) => {
    const formatCategory = (category) => {
        return category ? category.split('_').join(' ') : ''
    }

    return (
        <div>
            <h6 className='text-muted fw-light text-lowercase'>
                {job.position} |&nbsp;
                {formatCategory(job.category)} |
                {job.salary} |&nbsp;
                {job.company} |&nbsp;
                {job.location} |&nbsp;
                {job.arrangement} |&nbsp;
                {job.type}
            </h6>
            <p>{job.description}</p>
            <JobViewActions ids={{'_id': job._id, 'recruiter': job.recruiter}} />
        </div>
    )
}

JobViewDetails.propTypes = {
    job: PropTypes.object.isRequired,
}

export default JobViewDetails

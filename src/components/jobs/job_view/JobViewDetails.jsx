import PropTypes from 'prop-types'

const JobViewDetails = ({job}) => {
  return (
    <div>
      <h6 className="text-muted">{job.position} | {job.company} | {job.location}</h6>
      <p>{job.description}</p>
    </div>
  )
}

JobViewDetails.propTypes = {
  job: PropTypes.object.isRequired,
}

export default JobViewDetails
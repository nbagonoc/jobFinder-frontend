import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom'

import ListJobActions from './ListJobActions';

const ListJobDetails = ({ job }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
            <Link to={`/view/${job._id}`} className='link-primary text-capitalize text-decoration-none'>
                <h5 className="card-title">
                    {job.title}
                </h5>
            </Link>
                <h6 className="text-muted">{job.position} | {job.company} | {job.location}</h6>
                <ListJobActions _id={job._id} />                
            </div>
        </div>
    );
};

ListJobDetails.propTypes = {
    job: PropTypes.object.isRequired,
};

export default ListJobDetails;

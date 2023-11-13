import { PropTypes } from 'prop-types';

import ListJobActions from './ListJobActions';

const ListJobDetails = ({ job }) => {
    return (
        <tr data-testid='ListJobDetails'>
            <td>{job.name}</td>
            <td>{job.weight}</td>
            <td>{job.size}</td>
            <ListJobActions _id={job._id} />
        </tr>
    );
};

ListJobDetails.propTypes = {
    job: PropTypes.object.isRequired,
};

export default ListJobDetails;

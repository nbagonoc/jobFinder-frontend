import JobListDetails from './JobListDetails';
import AlertMessage from '../../partials/AlertMessage';

const JobListContainer = () => {

    return (
        <div className="JobListContainer" data-testid='JobListContainer'>
            <AlertMessage/>
            <JobListDetails/>
        </div>
    );
};

export default JobListContainer;

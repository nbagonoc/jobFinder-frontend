import ListJobDetails from './ListJobDetails';
import AlertMessage from '../../partials/AlertMessage';

const ListJobContainer = () => {

    return (
        <div className="ListJobContainer" data-testid='ListJobContainer'>
            <AlertMessage/>
            <ListJobDetails/>
        </div>
    );
};

export default ListJobContainer;

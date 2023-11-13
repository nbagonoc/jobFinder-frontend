import ListJobTable from './ListJobTable';
import AlertMessage from '../../partials/AlertMessage';

const ListJobContainer = () => {

    return (
        <div className="ListJobContainer" data-testid='ListJobContainer'>
            <AlertMessage/>
            <ListJobTable/>
        </div>
    );
};

export default ListJobContainer;

import ListJobTable from './ListJobTable';
import AlertMessage from '../../partials/AlertMessage';

const ListJobContainer = () => {

    return (
        <div className='card' data-testid='ListJobContainer'>
            <div className='card-body'>
                    <AlertMessage/>
                    <ListJobTable/>
            </div>
        </div>
    );
};

export default ListJobContainer;

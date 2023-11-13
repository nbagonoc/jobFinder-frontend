import axios from 'axios';
import { useEffect } from 'react';

import { API } from '../../../API';
import { useGlobalContext } from '../../../hooks/useGlobalContext';
import ListJobDetails from './ListJobDetails';

const ListJobTable = () => {
    const {jobs, dispatch} = useGlobalContext()

    useEffect(() => {
        const getjobs = async () => {
            try {
                const response = await axios.get(API);
                const jobs = response.data;
                dispatch({type: 'SET_JOBS', payload: {jobs}})
            } catch (err) {
                console.log(err); //just log error. No need to show to user
            }
        };
        getjobs();
    }, [dispatch]);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Weight</th>
                    <th>Size</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
            {jobs && jobs.length >= 1 ? (
                jobs.map((job) => (
                    <ListJobDetails
                        key={job._id}
                        job={job}
                    />
                ))
            ) : (
                <tr>
                    <td colSpan="4" className="text-center">
                        No jobs found... 
                    </td>
                </tr>
                )
            }
            </tbody>
        </table>
    );
};

export default ListJobTable;

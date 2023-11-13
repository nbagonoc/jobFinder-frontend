import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

import { jobsAPI } from '../../../API';
import { useJobContext } from '../../../hooks/useJobContext';
import JobListActions from './JobListActions';

const JobListDetails = () => {
    const {jobs, dispatch} = useJobContext()

    useEffect(() => {
        const getjobs = async () => {
            try {
                const response = await axios.get(jobsAPI);
                const jobs = response.data;
                dispatch({type: 'SET_JOBS', payload: {jobs}})
            } catch (err) {
                console.log(err); //just log error. No need to show to user
            }
        };
        getjobs();
    }, [dispatch]);

    return (
        <div>
            {jobs && jobs.length >= 1 ? (
                jobs.map((job) => (
                    <div className="card mb-3" key={job._id}>
                    <div className="card-body">
                        <Link to={`/view/${job._id}`} className='link-primary text-capitalize text-decoration-none'>
                            <h5 className="card-title">
                                {job.title}
                            </h5>
                        </Link>
                        <h6 className="text-muted">{job.position} | {job.company} | {job.location}</h6>
                        <JobListActions _id={job._id} />                
                    </div>
        </div>
                ))
            ) : (
                    <div colSpan="4" className="text-center">
                        No jobs found... 
                    </div>
                )
            }
        </div>
    );
};

export default JobListDetails;

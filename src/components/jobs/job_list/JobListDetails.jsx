import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

import { jobsAPI } from '../../../API';
import { useJobContext } from '../../../hooks/useJobContext';

const JobListDetails = () => {
    const {jobs, dispatch} = useJobContext()

    const formatCategory = (category) => {
        return category ? category.split('_').join(' ') : ''
    }

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
                        <Link to={`/jobs/view/${job._id}`} className='link-primary text-capitalize text-decoration-none'>
                            <h5 className="card-title fw-bold">
                                {job.title}
                            </h5>
                        </Link>
                        <p className="text-muted fw-light text-lowercase">{job.position} | {formatCategory(job.category)} | {job.salary} | {job.company} | {job.location}</p>
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

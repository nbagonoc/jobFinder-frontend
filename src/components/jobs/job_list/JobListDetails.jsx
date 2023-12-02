import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

import { jobsAPI } from '../../../API';
import { useJobContext } from '../../../hooks/useJobContext';

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
                    <Link to={`/jobs/view/${job._id}`} key={job._id} className='link-primary text-capitalize text-decoration-none'>
                        <div className="card mb-3">
                            <div className="card-body">
                                <h3 className="card-title fw-bold text-primary fs-5">
                                    {job.title}
                                </h3>
                                <h6 className='fw-bold'>
                                    Company: <span className='text-muted fw-light'>{job.company}</span>
                                </h6>
                                <h6 className='fw-bold'>
                                    Position: <span className='text-muted fw-light'>{job.position}</span>
                                </h6>
                                <h6 className='fw-bold'>
                                    Salary: <span className='text-muted fw-light'>{job.salary}</span>
                                </h6>
                                <h6 className='fw-bold'>
                                    Location: <span className='text-muted fw-light'>{job.location}</span>
                                </h6>
                                <h6 className='text-muted fw-light text-lowercase'>
                                    <span className='badge bg-primary me-1'>
                                        {job.category}
                                    </span>
                                    <span className='badge bg-primary me-1'>
                                        {job.arrangement}
                                    </span>
                                    <span className='badge bg-primary me-1'>{job.type}</span>
                                </h6>
                            </div>
                        </div>
                    </Link>
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

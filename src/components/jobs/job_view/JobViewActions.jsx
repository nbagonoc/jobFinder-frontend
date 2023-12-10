import { useState } from 'react';

import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { PropTypes } from 'prop-types'

import { jobsAPI } from '../../../API'
import { useJobContext } from '../../../hooks/useJobContext'
import { useAuthContext } from '../../../hooks/useAuthContext'

const JobViewActions = ({ ids, job }) => {
    const { dispatch } = useJobContext()
    const { user, token } = useAuthContext()
    const navigate = useNavigate()
    const [isDisabled, setIsDisabled] = useState(false);

    const handleDelete = async (e, _id) => {
        e.preventDefault()
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        try {
            const response = await axios.delete(`${jobsAPI}/${_id}`, { headers })
            const message = response.data.message

            dispatch({
                type: 'DELETE_JOB',
                payload: {
                    alert: {
                        message,
                        success: true,
                    },
                },
            })
            navigate('/jobs/owned')
        } catch (error) {
            const message = error.response.data.message

            dispatch({
                type: 'DELETE_JOB',
                payload: {
                    alert: {
                        message,
                        success: false,
                    },
                },
            })
            // navigate('/jobs/owned')
        }
    }

    const handleApply = async (e, _id) => {
        e.preventDefault()
        setIsDisabled(true)

        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        try {
            const response = await axios.post(`${jobsAPI}/${_id}/apply`, {}, { headers })
            const message = response.data.message
            job.applicants.push(user._id)
            const updatedJob = job

            dispatch({
                type: 'APPLY_JOB',
                payload: {
                    job: updatedJob,
                    alert: {
                        message,
                        success: true,
                    },
                },
            })

        } catch (error) {
            const message = error.response.data.message
            dispatch({
                type: 'APPLY_JOB',
                payload: {
                    alert: {
                        message,
                        success: false,
                    },
                },
            })
        }
    }

    return (
        <div>
            <hr />
            {user && user.role === 'recruiter' && user._id === ids.recruiter ? (
                <div className='action-buttons'>
                    <Link
                        to={`/jobs/edit/${ids._id}`}
                        className='btn btn-secondary btn-sm me-1'
                    >
                        Edit
                    </Link>
                    <button
                        className='btn btn-warning btn-sm me-1'
                    >
                        Close
                    </button>
                    <button
                        onClick={(e) => handleDelete(e, ids._id)}
                        className='btn btn-danger btn-sm'
                    >
                        Delete
                    </button>
                </div>
            ) : (
                <div className='action-buttons'>
                    {(Array.isArray(job.applications) && job.applications.some(app => app.user?._id === user._id)) || isDisabled ? (
                        <button
                            className='btn btn-secondary'
                            disabled
                        >
                            Already applied
                        </button>
                    ) : (
                        <button
                            onClick={(e) => handleApply(e, ids._id)}
                            className='btn btn-success'
                        >
                            Apply
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}

JobViewActions.propTypes = {
    ids: PropTypes.object.isRequired,
    job: PropTypes.object.isRequired,
}

export default JobViewActions

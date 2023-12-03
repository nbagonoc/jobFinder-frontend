import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { PropTypes } from 'prop-types'

import { jobsAPI } from '../../../API'
// import { useGlobalContext } from '../../../hooks/useGlobalContext'
import { useJobContext } from '../../../hooks/useJobContext'
import { useAuthContext } from '../../../hooks/useAuthContext'

const JobViewActions = ({ ids }) => {
    // const { dispatch } = useGlobalContext()
    const { dispatch } = useJobContext()
    const { user, token } = useAuthContext()
    const navigate = useNavigate()

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
                    // _id, //why do we need this?
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

    return (
        <div>
            <hr />
            {user && user.role === 'recruiter' && user._id === ids.recruiter ? (
                <div className='action-buttons'>
                    {console.log(user)}
                    <Link
                        to={`/jobs/edit/${ids._id}`}
                        className='btn btn-secondary btn-sm me-1'
                    >
                        Edit
                    </Link>
                    <button
                        // onClick={(e) => handleDelete(e, ids._id)}
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
                    <button
                        // onClick={(e) => handleDelete(e, ids._id)}
                        className='btn btn-success me-1'
                    >
                        Apply
                    </button>
                </div>
            )}
        </div>
    )
}

JobViewActions.propTypes = {
    ids: PropTypes.object.isRequired,
}

export default JobViewActions

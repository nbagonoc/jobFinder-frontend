import axios from 'axios'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

import { API } from '../../../API'
import { useGlobalContext } from '../../../hooks/useGlobalContext'
import { useAuthContext } from '../../../hooks/useAuthContext'

const JobViewActions = ({ ids }) => {
    const { dispatch } = useGlobalContext()
    const { user } = useAuthContext()

    const handleDelete = async (e, _id) => {
        try {
            e.preventDefault()
            const response = await axios.delete(`${API}/${_id}`)
            const message = response.data.success.message
            dispatch({
                type: 'DELETE_JOB',
                payload: {
                    _id,
                    alert: {
                        message,
                        success: true,
                    },
                },
            })
        } catch (err) {
            const message = err.response.data.errors.message
            dispatch({
                type: 'DELETE_JOB',
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
            {user && user.role === 'recruiter' &&  user._id === ids.recruiter && (
                <div>
                    {console.log(user)}
                    <Link
                        to={`/jobs/edit/${ids._id}`}
                        className='btn btn-secondary btn-sm me-1'
                    >
                        Edit
                    </Link>
                    <button
                        onClick={(e) => handleDelete(e, ids._id)}
                        className='btn btn-danger btn-sm'
                    >
                        Delete
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

import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useCallback } from 'react'

import { jobsAPI } from '../../../API'
import AlertMessage from '../../partials/AlertMessage'
import { useJobContext } from '../../../hooks/useJobContext'
import ViewJobDetails from './JobViewDetails'
import JobViewSubDetails from './JobViewSubDetails'

const JobViewContainer = () => {
    const { _id } = useParams()
    const { job, dispatch } = useJobContext()

    // reset states when component unmounts
    const resetState = useCallback(() => {
        dispatch({ type: 'SET_JOB', payload: { job: {}, alert: {} } })
    }, [dispatch])

    useEffect(() => {
        const getjob = async () => {
            try {
                const response = await axios.get(`${jobsAPI}/${_id}`)
                const job = response.data
                dispatch({ type: 'SET_JOB', payload: { job } })
            } catch (err) {
                let message = 'Something went wrong!'
                if (err && err.response) {
                    message = err.response.data.errors.message
                }
                dispatch({
                    type: 'SET_JOB',
                    payload: {
                        alert: {
                            message,
                            success: false,
                        },
                    },
                })
            }
        }
        getjob()
        return resetState // reset states when component unmounts
    }, [_id, dispatch, resetState])

    return (
        <div className='container-lg'>
            <div className='row'>
                <div className='col-md-5 mb-3'>
                    {job && <JobViewSubDetails job={job} />}
                </div>
                <div className='col-md-7'>
                    <AlertMessage />
                    {job && <ViewJobDetails job={job} />}
                </div>
            </div>
        </div>
    )
}

export default JobViewContainer

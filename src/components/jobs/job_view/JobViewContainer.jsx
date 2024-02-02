import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useCallback } from 'react'

import { jobsAPI } from '../../../API'
import { useJobContext } from '../../../hooks/useJobContext'
import ViewJobDetails from './JobViewDetails'
import JobViewSubDetails from './JobViewSubDetails'
import CompanyAboutDetails from '../../company/company_about/CompanyAboutDetails'
import Default from '../../partials/layouts/Default'

const JobViewContainer = () => {
    const { _id } = useParams()
    const { job, dispatch } = useJobContext()

    // reset states when component unmounts
    const resetState = useCallback(() => {
        dispatch({
            type: 'SET_JOB',
            payload: {
                job: {},
                alert: {},
            },
        })
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
        <Default>
            <div className='row'>
                <div className='col-md-5 col-lg-4 col-xl-3 mb-3'>
                    {job && <JobViewSubDetails job={job} />}
                </div>
                <div className='col-md-7 col-lg-8 col-xl-9 mb-3'>
                    <div className='row'>
                        <div className='col-xl-8 mb-3'>
                            {job && <ViewJobDetails job={job} />}
                        </div>
                        <div className='col-xl-4 mb-3'>
                            <CompanyAboutDetails />
                        </div>
                    </div>
                </div>
            </div>
        </Default>
    )
}

export default JobViewContainer

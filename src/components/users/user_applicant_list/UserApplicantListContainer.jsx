import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import { jobsAPI } from '../../../API'
import { useJobContext } from '../../../hooks/useJobContext'
import { useAuthContext } from '../../../hooks/useAuthContext'

import UserApplicantColumnTitle from './UserApplicantColumnTitle'
import UserApplicantListDetails from './UserApplicantListDetails'
import AlertMessage from '../../partials/AlertMessage/AlertMessage'

const UserApplicantListContainer = () => {
    const { _id } = useParams()
    const { jobApplicants, dispatch } = useJobContext()
    const { token } = useAuthContext()

    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        const getjobs = async () => {
            try {
                const response = await axios.get(`${jobsAPI}/${_id}/applicants`, {
                    headers,
                })
                const jobApplicants = response.data
                dispatch({ type: 'SET_JOB_APPLICANTS', payload: { jobApplicants } })
            } catch (err) {
                console.log(err) //just log error. No need to show to user
            }
        }
        getjobs()
    }, [dispatch, token, _id])

    return (
        <div className='container-xxl'>
            <AlertMessage />
            <UserApplicantColumnTitle />
            <div className='row'>
                {jobApplicants && jobApplicants.length >= 1 ? (
                    jobApplicants.map((jobApplicant, index) => (
                        <UserApplicantListDetails jobApplicant={jobApplicant} key={index} />
                    ))
                ) : (
                    <div colSpan='4' className='text-center'>
                        No applicants found...
                    </div>
                )}
            </div>
        </div>
    )
}

export default UserApplicantListContainer

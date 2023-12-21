import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useCallback, useEffect } from 'react'

import { applicationsAPI } from '../../../API'
import { useApplicationContext } from '../../../hooks/useApplicationContext'
import { useAuthContext } from '../../../hooks/useAuthContext'

import ApplicantListColumnTitle from './ApplicantListColumnTitle'
import ApplicantListDetails from './ApplicantListDetails'
import AlertMessage from '../../partials/AlertMessage/AlertMessage'

const ApplicantListContainer = () => {
    const { _id } = useParams()
    const { applicants, dispatch } = useApplicationContext()
    const { token } = useAuthContext()

    //reset states when component unmounts
    const resetState = useCallback(() => {
        dispatch({
            type: 'SET_APPLICANTS',
            payload: {
                applicants: [],
                alert: {},
            },
        })
    }, [dispatch])

    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        const getApplicants = async () => {
            try {
                const response = await axios.get(`${applicationsAPI}/${_id}/job`, { headers })
                const applicants = response.data
                dispatch({ type: 'SET_APPLICANTS', payload: { applicants } })
            } catch (err) {
                console.log(err) //just log error. No need to show to user
            }
        }
        getApplicants()
        return resetState // reset states when component unmounts
    }, [dispatch, token, _id, resetState])

    return (
        <div className='container-xxl'>
            <AlertMessage />
            <ApplicantListColumnTitle />
            <div className='row'>
                {applicants && applicants.length >= 1 ? (
                    applicants.map((applicant, index) => (
                        <ApplicantListDetails applicant={applicant} key={index} />
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

export default ApplicantListContainer

import axios from 'axios'
import { useEffect } from 'react'

import { applicationsAPI } from '../../../API'
import { useApplicationContext } from '../../../hooks/useApplicationContext'
import { useAuthContext } from '../../../hooks/useAuthContext'

import ApplicationListDetails from './ApplicationListDetails'
import ApplicationListColumnTitle from './ApplicationListColumnTitle'
import AlertMessage from '../../partials/AlertMessage/AlertMessage'

const ApplicationListContainer = () => {
    const { applications, dispatch } = useApplicationContext()
    const { token } = useAuthContext()

    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        const getApplications = async () => {
            try {
                const response = await axios.get(`${applicationsAPI}`, { headers })
                const applications = response.data
                dispatch({ type: 'SET_APPLICATIONS', payload: { applications } })
            } catch (error) {
                console.log(error) //just log error. No need to show to user
            }
        }
        getApplications()
    }, [dispatch, token])

    return (
        <div className='container-xxl'>
            <AlertMessage />
            <ApplicationListColumnTitle />
            <div className='row'>
                {applications && applications.length >= 1 ? (
                    applications.map((application, index) => (
                        <ApplicationListDetails application={application} key={index} />

                    ))
                ) : (
                <div colSpan='4' className='text-center'>
                    No applications found...
                </div>
                )}
            </div>
        </div>
    )
}

export default ApplicationListContainer

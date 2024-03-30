import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import { usersAPI } from '../../../API'
import { useUserContext } from '../../../hooks/useUserContext'
import { useAuthContext } from '../../../hooks/useAuthContext'

import UserAbout from '../profile/UserAbout'
import EducationList from './education/List'
import ExperienceList from './experience/List'
import UserSkills from '../profile/UserSkills'
import UserApplicant from './UserApplicant'
import Default from '../../partials/layouts/Default'

const UserApplicantContainer = () => {
    const { _id } = useParams()
    const { applicant, dispatch } = useUserContext()
    const { token } = useAuthContext()
    

    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        const getApplicant = async () => {
            try {
                const response = await axios.get(`${usersAPI}/view/${_id}`, {
                    headers,
                })
                const applicant = response.data
                dispatch({
                    type: 'SET_APPLICANT',
                    payload: { applicant },
                })
            } catch (error) {
                let message = 'Something went wrong!'
                if (error && error.response) {
                    message = error.response.data.errors.message
                }
                dispatch({
                    type: 'SET_APPLICANT',
                    payload: {
                        alert: {
                            message,
                            success: false,
                        },
                    },
                })
            }
        }
        getApplicant()
    }, [dispatch, token, _id, applicant])

    return (
        <Default>
            {applicant ? (
                <div className='row'>
                    <div className='col-md-5 col-lg-4 col-xl-3 mb-3'>
                        <UserApplicant applicant={applicant} />
                    </div>
                    <div className='col-md-7 col-lg-8 col-xl-9 mb-3'>
                        <div className='row'>
                            <div className='col-xl-8'>
                                <div className='mb-3'>
                                    <EducationList id={applicant._id}/>
                                </div>
                                <div className='mb-3'>
                                    <ExperienceList id={applicant._id}/>
                                </div>
                                <div className='mb-3'>
                                    <UserSkills />
                                </div>
                            </div>
                            <div className='col-xl-4 mb-3'>
                                <UserAbout />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h3>Loading...</h3> //iterate to spinner
            )}
        </Default>
    )
}

export default UserApplicantContainer

import axios from 'axios'
import { useEffect } from 'react'

import { usersAPI } from '../../../API'

import UserAbout from './UserAbout'
import EducationList from '../education/List'
import ExperienceList from '../experience/List'
import UserSkills from './UserSkills'
import UserProfile from './UserProfile'
import Default from '../../partials/layouts/Default'

import { useUserContext } from '../../../hooks/useUserContext'
import { useAuthContext } from '../../../hooks/useAuthContext'

const UserProfileContainer = () => {
    const { profile, dispatch } = useUserContext()
    const { user, token } = useAuthContext()

    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        const getProfile = async () => {
            try {
                const response = await axios.get(`${usersAPI}/profile`, { headers })
                const profile = response.data
                dispatch({
                    type: 'SET_PROFILE',
                    payload: { profile },
                })
            } catch (error) {
                let message = error.response.data.message
                dispatch({
                    type: 'SET_PROFILE',
                    payload: {
                        alert: {
                            message,
                            success: false,
                        },
                    },
                })
            }
        }
        getProfile()
    }, [dispatch, token])
    return (
        <Default>
            {profile ? (
                <div className='row'>
                    <div className='col-md-5 col-lg-4 col-xl-3 mb-3'>
                        <UserProfile profile={profile} />
                    </div>
                    <div className='col-md-7 col-lg-8 col-xl-9 mb-3'>
                        {user && user.role === 'applicant' && (
                            <div className='row'>
                                <div className='col-xl-8'>
                                    <div className='mb-3'>
                                        <EducationList />
                                    </div>
                                    <div className='mb-3'>
                                        <ExperienceList />
                                    </div>
                                    <div className='mb-3'>
                                        <UserSkills />
                                    </div>
                                </div>
                                <div className='col-xl-4 mb-3'>
                                    <UserAbout profile={profile} />
                                </div>
                            </div>
                        )}
                        {user && user.role === 'recruiter' && (
                            <div className='row'>
                                <div className='col-xl-12'>
                                    <UserAbout profile={profile} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <h3>Loading...</h3> //iterate to spinner
            )}
        </Default>
    )
}

export default UserProfileContainer

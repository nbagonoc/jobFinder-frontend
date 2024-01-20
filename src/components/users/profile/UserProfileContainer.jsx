import axios from 'axios'
import { useEffect } from 'react'

import { usersAPI } from '../../../API'

import UserAbout from './UserAbout'
import UserEducation from './UserEducation'
import UserExperience from './UserExperience'
import UserSkills from './UserSkills'
import UserProfile from './UserProfile'
import { useUserContext } from '../../../hooks/useUserContext'
import { useAuthContext } from '../../../hooks/useAuthContext'

const UserProfileContainer = () => {
    const { profile, dispatch } = useUserContext()
    const { token } = useAuthContext()

    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        const getProfile = async () => {
            try {
                const response = await axios.get(`${usersAPI}/profile`, {
                    headers,
                })
                const profile = response.data
                console.log(profile)
                dispatch({
                    type: 'SET_PROFILE',
                    payload: { profile },
                })
            } catch (error) {
                let message = 'Something went wrong!'
                if (error && error.response) {
                    message = error.response.data.errors.message
                }
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
        <div className='container-xxl'>
            {profile ? (
                <div className='row'>
                    <div className='col-md-5 col-lg-4 col-xl-3 mb-3'>
                        <UserProfile profile={profile} />
                    </div>
                    <div className='col-md-7 col-lg-8 col-xl-9 mb-3'>
                        <div className='row'>
                            <div className='col-xl-8'>
                                <div className='mb-3'>
                                    <UserEducation />
                                </div>
                                <div className='mb-3'>
                                    <UserExperience />
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
        </div>
    )
}

export default UserProfileContainer

import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { usersAPI } from '../../../API'
import { useUserContext } from '../../../hooks/useUserContext'
import { useAuthContext } from '../../../hooks/useAuthContext'

import About from './about/About'
import EducationList from './education/List'
import ExperienceList from './experience/List'
import SkillList from './skill/List'
import Profile from './profile/Profile'
import Default from '../../partials/layouts/Default'

const UserApplicantContainer = () => {
    const { _id } = useParams()
    const { dispatch } = useUserContext()
    const { token } = useAuthContext()
    const [applicant, setApplicant] = useState(null)
    

    useEffect(() => {
        const getApplicant = async () => {
            try {
                const headers = {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
                const response = await axios.get(`${usersAPI}/view/${_id}`, { headers })
                const applicantData = response.data
                dispatch({
                    type: 'SET_APPLICANT',
                    payload: { applicant: applicantData },
                })
                setApplicant(applicantData)
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
                setApplicant({})
            }
        }
        applicant === null ? getApplicant() : null
    }, [dispatch, token, _id, applicant])

    return (
        <Default>
            {applicant ? (
                <div className='row'>
                    <div className='col-md-5 col-lg-4 col-xl-3 mb-3'>
                        <Profile applicant={applicant} />
                    </div>
                    <div className='col-md-7 col-lg-8 col-xl-9 mb-3'>
                        <div className='row'>
                            <div className='col-xl-8'>
                                <div className='mb-3'>
                                    {applicant.education && <EducationList educations={applicant.education}/>}
                                </div>
                                <div className='mb-3'>
                                    {applicant.experience && <ExperienceList experiences={applicant.experience}/>}
                                </div>
                                <div className='mb-3'>
                                    {applicant.skill && <SkillList skills={applicant.skill}/>}
                                </div>
                            </div>
                            <div className='col-xl-4 mb-3'>
                                {applicant.about && <About about={applicant.about}/>}
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

import { useEffect, useState } from 'react'

import axios from 'axios'
import PropTypes from 'prop-types'

import { experiencesAPI } from '../../../../API'
import { useExperienceContext } from '../../../../hooks/useExperienceContext'
import { useAuthContext } from '../../../../hooks/useAuthContext'

import View from './View'

const List = ({ id }) => {
    const { dispatch } = useExperienceContext()
    const { token } = useAuthContext()
    const [experiences, setExperiences] = useState(null)

    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        const getExperiences = async () => {
            try {
                const response = await axios.get(`${experiencesAPI}/${id}/user`, { headers })
                const experiencesData = response.data
                dispatch({
                    type: 'SET_EXPERIENCES',
                    payload: { experiencesData },
                })
                setExperiences(experiencesData)
            } catch (error) {
                let message = error.response.data.message
                dispatch({
                    type: 'SET_EXPERIENCES',
                    payload: {
                        alert: {
                            message,
                            success: false,
                        },
                    }
                })
                setExperiences([])
            }
        }
        getExperiences()
    }, [experiences, dispatch, token, id, setExperiences])

    if (experiences === null) {
        return <div>Loading...</div>
    }

    return (
        <div className='card'>
            <div className='card-header'>
                <h3 className='fw-bold fs-5 mt-2'>Experience</h3>
            </div>
            <div className='card-body'>
                {experiences.length === 0 && (
                    <div className='alert alert-info' role='alert'>
                        No experience found
                    </div>
                )}
                {experiences.map((experience, index) => (
                    <div key={experience._id}>
                        <View experience={experience} />
                        {index !== experiences.length - 1 && <hr />}
                    </div>
                ))}
            </div>
        </div>
    )
}

List.propTypes = {
    id: PropTypes.string.isRequired,
}

export default List

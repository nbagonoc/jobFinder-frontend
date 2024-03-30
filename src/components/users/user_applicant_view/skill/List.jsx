import { useEffect, useState } from 'react'

import axios from 'axios'
import PropTypes from 'prop-types'

import { skillsAPI } from '../../../../API'
import { useSkillContext } from '../../../../hooks/useSkillContext'
import { useAuthContext } from '../../../../hooks/useAuthContext'

import View from './View'

const List = ({ id }) => {
    const { dispatch } = useSkillContext()
    const { token } = useAuthContext()
    const [skills, setSkills] = useState(null)

    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        const getSkills = async () => {
            try {
                const response = await axios.get(`${skillsAPI}/${id}/user`, { headers })
                const skillsData= response.data
                dispatch({
                    type: 'SET_SKILLS',
                    payload: { skillsData},
                })
                setSkills(skillsData)
            } catch (error) {
                let message = error.response.data.message
                dispatch({
                    type: 'SET_SKILLS',
                    payload: {
                        alert: {
                            message,
                            success: false,
                        },
                    },
                })
                setSkills([])
            }
        }
        getSkills()
    }, [skills, dispatch, token, id, setSkills])

    if (skills === null) {
        return <div>Loading...</div>
    }

    return (
        <div className='card'>
            <div className='card-header'>
                <h3 className='fw-bold fs-5 mt-2'>Skills</h3>
            </div>
            <div className='card-body'>
                {skills.length === 0 && (
                    <div className='alert alert-info' role='alert'>
                        No skill found
                    </div>
                )}
                {skills.map((skill, index) => (
                    <div key={skill._id}>
                        <View skill={skill} />
                        {index !== skills.length - 1 && <hr />}
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

import { useEffect, useState } from 'react'

import axios from 'axios'
import { Button } from 'react-bootstrap'

import { skillsAPI } from '../../../../API'
import { useSkillContext } from '../../../../hooks/useSkillContext'
import { useAuthContext } from '../../../../hooks/useAuthContext'

import View from './View'
import CreateModal from './CreateModal'

const List = () => {
    const [showCreateModal, setShowCreateModal] = useState(false)
    const { skills, dispatch } = useSkillContext()
    const { token } = useAuthContext()

    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        const getSkills = async () => {
            try {
                const response = await axios.get(`${skillsAPI}`, {
                    headers,
                })
                const skills = response.data
                dispatch({
                    type: 'SET_SKILLS',
                    payload: { skills },
                })
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
            }
        }
        getSkills()
    }, [dispatch, token])

    return (
        <div className='card'>
            <div className='card-header'>
                <h3 className='fw-bold fs-5 mt-2'>Skill</h3>
            </div>
            <div className='card-body'>
                {skills.length === 0 && (
                    <div className='alert alert-info' role='alert'>
                        No skill found
                    </div>
                )}
                {skills.map((skill) => (
                    <div key={skill._id}>
                        <View skill={skill} />
                        <hr />
                    </div>
                ))}
                <Button
                    variant='secondary'
                    className='btn btn-secondary btn-sm me-1'
                    onClick={() => setShowCreateModal(true)}
                >
                    Create
                </Button>
                <CreateModal
                    showCreateModal={showCreateModal}
                    onHide={() => setShowCreateModal(false)}
                    title='Create skill'
                />
            </div>
        </div>
    )
}

export default List

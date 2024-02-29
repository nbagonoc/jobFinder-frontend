import { useEffect, useState } from 'react'

import axios from 'axios'
import { Button } from 'react-bootstrap'

import { experiencesAPI } from '../../../API'
import { useExperienceContext } from '../../../hooks/useExperienceContext'
import { useAuthContext } from '../../../hooks/useAuthContext'

import View from './View'
import CreateModal from './CreateModal'

const List = () => {
    const [showCreateModal, setShowCreateModal] = useState(false)
    const { experiences, dispatch } = useExperienceContext()
    const { token } = useAuthContext()

    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        const getExperiences = async () => {
            try {
                const response = await axios.get(`${experiencesAPI}`, {
                    headers,
                })
                const experiences = response.data
                dispatch({
                    type: 'SET_EXPERIENCES',
                    payload: { experiences },
                })
            } catch (error) {
                let message = error.response.data.message
                dispatch({
                    type: 'SET_EXPERIENCES',
                    payload: {
                        alert: {
                            message,
                            success: false,
                        },
                    },
                })
            }
        }
        getExperiences()
    }, [dispatch, token])

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
                {experiences.map((experience) => (
                    <div key={experience._id}>
                        <View experience={experience} />
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
                    title='Create experience'
                />
            </div>
        </div>
    )
}

export default List

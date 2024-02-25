import { useEffect, useState } from 'react'

import axios from 'axios'
import { Button } from 'react-bootstrap'

import { educationsAPI } from '../../../API'
import { useEducationContext } from '../../../hooks/useEducationContext'
import { useAuthContext } from '../../../hooks/useAuthContext'

import View from './View'
import CreateModal from './CreateModal'

const List = () => {
    const [showCreateModal, setShowCreateModal] = useState(false)
    const { educations, dispatch } = useEducationContext()
    const { token } = useAuthContext()

    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        const getEducations = async () => {
            try {
                const response = await axios.get(`${educationsAPI}`, {
                    headers,
                })
                const educations = response.data
                dispatch({
                    type: 'SET_EDUCATIONS',
                    payload: { educations },
                })
            } catch (error) {
                let message = error.response.data.message
                dispatch({
                    type: 'SET_EDUCATIONS',
                    payload: {
                        alert: {
                            message,
                            success: false,
                        },
                    },
                })
            }
        }
        getEducations()
    }, [dispatch, token])

    return (
        <div className='card'>
            <div className='card-header'>
                <h3 className='fw-bold fs-5 mt-2'>Education</h3>
            </div>
            <div className='card-body'>
                {educations.length === 0 && (
                    <div className='alert alert-info' role='alert'>
                        No education found
                    </div>
                )}
                {educations.map((education) => (
                    <div key={education._id}>
                        <View education={education} />
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
                    title='Create education'
                />
            </div>
        </div>
    )
}

export default List

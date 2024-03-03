import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import axios from 'axios'
import { Modal, Button } from 'react-bootstrap'

import { experiencesAPI } from '../../../API'
import { useExperienceContext } from '../../../hooks/useExperienceContext'
import { useAuthContext } from '../../../hooks/useAuthContext'
import Form from './Form'

const CreateModal = ({ showCreateModal, onHide, title }) => {
    const { errors,  dispatch } = useExperienceContext()
    const { token } = useAuthContext()
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        from: '',
        to: '',
        current: false,
        description: '',
    })
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    }
    const resetFormData = () => {
        setFormData({
            title: '',
            company: '',
            from: '',
            to: '',
            current: false,
            description: '',
        })
    }

    useEffect(() => {
        resetFormData()
    }, [showCreateModal])

    const onChange = (e) => {
        const { name, type, checked, value } = e.target;
        // Handle checkboxes separately
        const newValue = type === 'checkbox' ? checked : value;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: newValue,
        }));
    }
    // We needed to get the experiences everyafter submit
    // why? Well, we just can't add the newly created experience in the state
    // because we need the ID just in case the user edits that newly created experience
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

    // Refactor this in the future to be a more reusable component
    const onSubmit = async (e) => {
        e.preventDefault()

        const experience = {
            title: formData.title,
            company: formData.company,
            from: formData.from,
            to: formData.to,
            current: formData.current,
            description: formData.description,
        }
        try {
            const response = await axios.post(`${experiencesAPI}`, experience, { headers })
            const message = response.data.message

            dispatch({
                type: 'CREATE_EXPERIENCE',
                payload: {
                    alert: {
                        message,
                        success: true,
                    },
                },
            })
            onHide()
            getExperiences()

        } catch (error) {
            const errors = error.response.data
            const message = error.response.data.message

            dispatch({
                type: 'CREATE_EXPERIENCE',
                payload: {
                    errors,
                    alert: {
                        message,
                        success: false,
                    },
                },
            })
        }
    }

    return (
        <Modal show={showCreateModal} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form
                    formData={formData}
                    errors={errors}
                    onChange={onChange}
                    onSubmit={onSubmit}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="success"
                    onClick={(e) => {
                        onSubmit(e)
                    }}
                >
                    Save
                </Button>
                <Button
                    variant="secondary"
                    onClick={onHide}
                >
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

CreateModal.propTypes = {
    showCreateModal: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
}

export default CreateModal

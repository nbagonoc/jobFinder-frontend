import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

import axios from 'axios'
import { Modal, Button } from 'react-bootstrap'

import { experiencesAPI } from '../../../API'
import { useExperienceContext } from '../../../hooks/useExperienceContext'
import { useAuthContext } from '../../../hooks/useAuthContext'
import Form from './Form'

const EditModal = ({ showEditModal, onHide, title, experience }) => {
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

    useEffect(() => {
        setFormData({
            title: experience.title,
            company: experience.company,
            from: experience.from,
            to: experience.to,
            current: experience.current,
            description: experience.description,
        })
    }, [experience])

    const onChange = (e) => {
        const { name, type, checked, value } = e.target;
        // Handle checkboxes separately
        const newValue = type === 'checkbox' ? checked : value;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: newValue,
        }));
    }

    // Refactor this in the future to be a more reusable component
    const onSubmit = async (e) => {
        e.preventDefault()
        const experienceFormData = {
            _id: experience._id,
            title: formData.title,
            company: formData.company,
            from: formData.from,
            to: formData.to,
            current: formData.current,
            description: formData.description,
        }

        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        try {
            const response = await axios.put(`${experiencesAPI}/${experience._id}`, experienceFormData, { headers })
            const message = response.data.message

            dispatch({
                type: 'UPDATE_EXPERIENCE',
                payload: {
                    alert: {
                        message,
                        success: true,
                    },
                    updatedEducation: experienceFormData
                },
            })
            onHide()
        } catch (error) {
            const errors = error.response.data
            const message = error.response.data.message

            dispatch({
                type: 'UPDATE_EXPERIENCE',
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
        <Modal show={showEditModal} onHide={onHide} centered>
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

EditModal.propTypes = {
    showEditModal: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    experience: PropTypes.object.isRequired,
}

export default EditModal

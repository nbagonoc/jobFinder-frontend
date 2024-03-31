import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

import axios from 'axios'
import { Modal, Button } from 'react-bootstrap'

import { educationsAPI } from '../../../../API'
import { useEducationContext } from '../../../../hooks/useEducationContext'
import { useAuthContext } from '../../../../hooks/useAuthContext'
import Form from './Form'

const EditModal = ({ showEditModal, onHide, title, education }) => {
    const { errors,  dispatch } = useEducationContext()
    const { token } = useAuthContext()
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        from: '',
        to: '',
        current: false,
    })

    useEffect(() => {
        setFormData({
            school: education.school,
            degree: education.degree,
            from: education.from,
            to: education.to,
            current: education.current,
        })
    }, [education])

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
        const educationFormData = {
            _id: education._id,
            school: formData.school,
            degree: formData.degree,
            from: formData.from,
            to: formData.to,
            current: formData.current,
        }

        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        try {
            const response = await axios.put(`${educationsAPI}/${education._id}`, educationFormData, { headers })
            const message = response.data.message

            dispatch({
                type: 'UPDATE_EDUCATION',
                payload: {
                    alert: {
                        message,
                        success: true,
                    },
                    updatedEducation: educationFormData
                },
            })
            onHide()
        } catch (error) {
            const errors = error.response.data
            const message = error.response.data.message

            dispatch({
                type: 'UPDATE_EDUCATION',
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
    education: PropTypes.object.isRequired,
}

export default EditModal

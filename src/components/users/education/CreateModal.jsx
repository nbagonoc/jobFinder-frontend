import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import axios from 'axios'
import { Modal, Button } from 'react-bootstrap'

import { educationsAPI } from '../../../API'
import { useEducationContext } from '../../../hooks/useEducationContext'
import { useAuthContext } from '../../../hooks/useAuthContext'
import Form from './Form'

const CreateModal = ({ showCreateModal, onHide, title }) => {
    const { errors,  dispatch } = useEducationContext()
    const { token } = useAuthContext()
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        from: '',
        to: '',
        current: false,
    })
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    }
    useEffect(() => {
        dispatch({ type: 'CLEANER' })
    }, [dispatch])

    const onChange = (e) => {
        const { name, value } = e.target
        // const { name, type, checked, value } = e.target;
        // Handle checkboxes separately
        // const newValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: value,
        })

        // setFormData((prevFormData) => ({
        //     ...prevFormData,
        //     [name]: newValue,
        // }));
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

    // Refactor this in the future to be a more reusable component
    const onSubmit = async (e) => {
        e.preventDefault()

        const education = {
            school: formData.school,
            degree: formData.degree,
            from: formData.from,
            to: formData.to,
            current: formData.current,
        }
        console.log(education)
        try {
            const response = await axios.post(`${educationsAPI}`, education, { headers })
            const message = response.data.message

            dispatch({
                type: 'CREATE_EDUCATION',
                payload: {
                    alert: {
                        message,
                        success: true,
                    },
                },
            })
            onHide()
            getEducations()

        } catch (error) {
            const errors = error.response.data
            const message = error.response.data.message

            dispatch({
                type: 'CREATE_EDUCATION',
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

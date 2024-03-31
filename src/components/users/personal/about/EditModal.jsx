import { useState, useEffect } from 'react'

import axios from 'axios'
import PropTypes from 'prop-types'
import { Modal, Button } from 'react-bootstrap'

import { aboutsAPI } from '../../../../API'
import { useUserContext } from '../../../../hooks/useUserContext'
import { useAuthContext } from '../../../../hooks/useAuthContext'
import Form from './Form'

const EditModal = ({ showEditModal, onHide, title, about }) => {
    const { errors,  dispatch } = useUserContext()
    const { token } = useAuthContext()
    const [formData, setFormData] = useState({
        about: '',
    })

    useEffect(() => {
        setFormData({
            about: about.about,
        })
    }, [about])

    const onChange = (e) => {
        const { name, value } = e.target;

        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const aboutFormData = {
            about: formData.about,
        }

        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        try {
            const response = await axios.put(`${aboutsAPI}`, aboutFormData, { headers })
            const message = response.data.message

            dispatch({
                type: 'UPDATE_ABOUT',
                payload: {
                    alert: {
                        message,
                        success: true,
                    },
                    updatedAbout: aboutFormData
                },
            })
            onHide()
        } catch (error) {
            const errors = error.response.data
            const message = error.response.data.message

            dispatch({
                type: 'UPDATE_ABOUT',
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
    about: PropTypes.object.isRequired,
}

export default EditModal

import { useState, useEffect } from 'react'

import axios from 'axios'
import PropTypes from 'prop-types'
import { Modal, Button } from 'react-bootstrap'

import { usersAPI } from '../../../../API'
import { useUserContext } from '../../../../hooks/useUserContext'
import { useAuthContext } from '../../../../hooks/useAuthContext'
import Form from './Form'

const EditModal = ({ showEditModal, onHide, title, profile }) => {
    const { errors,  dispatch } = useUserContext()
    const { token } = useAuthContext()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        photo: '',
    })

    useEffect(() => {
        setFormData({
            firstName: profile.firstName,
            lastName: profile.lastName,
            phone: profile.phone,
            photo: null
        })
    }, [profile])

    const onChange = (e) => {
        const { name, value, files } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'photo' ? files[0] : value,
        }));
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const profileFormData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone,
            photo: formData.photo,
        }

        const headers = {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        }

        try {
            const response = await axios.put(`${usersAPI}`, profileFormData, { headers })
            const message = response.data.message

            dispatch({
                type: 'UPDATE_PROFILE',
                payload: {
                    alert: {
                        message,
                        success: true,
                    },
                    updatedProfile: profileFormData
                },
            })
            onHide()
            window.location.reload() // need to reload the page to fetch the new photo
        } catch (error) {
            const errors = error.response.data
            const message = error.response.data.message

            dispatch({
                type: 'UPDATE_PROFILE',
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
    profile: PropTypes.object.isRequired,
}

export default EditModal

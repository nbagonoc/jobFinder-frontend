import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

import axios from 'axios'
import { Modal, Button } from 'react-bootstrap'

import { skillsAPI } from '../../../API'
import { useSkillContext } from '../../../hooks/useSkillContext'
import { useAuthContext } from '../../../hooks/useAuthContext'
import Form from './Form'

const EditModal = ({ showEditModal, onHide, title, skill }) => {
    const { errors,  dispatch } = useSkillContext()
    const { token } = useAuthContext()
    const [formData, setFormData] = useState({
        skill: '',
    })

    useEffect(() => {
        setFormData({
            skill: skill.skill,
        })
    }, [skill])

    const onChange = (e) => {
        const { name, value } = e.target;

        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    }

    // Refactor this in the future to be a more reusable component
    const onSubmit = async (e) => {
        e.preventDefault()
        const skillFormData = {
            _id: skill._id,
            skill: formData.skill,
        }

        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        try {
            const response = await axios.put(`${skillsAPI}/${skill._id}`, skillFormData, { headers })
            const message = response.data.message

            dispatch({
                type: 'UPDATE_SKILL',
                payload: {
                    alert: {
                        message,
                        success: true,
                    },
                    updatedSkill: skillFormData
                },
            })
            onHide()
        } catch (error) {
            const errors = error.response.data
            const message = error.response.data.message

            dispatch({
                type: 'UPDATE_SKILL',
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
    skill: PropTypes.object.isRequired,
}

export default EditModal

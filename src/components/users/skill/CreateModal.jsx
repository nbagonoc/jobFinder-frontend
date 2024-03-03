import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import axios from 'axios'
import { Modal, Button } from 'react-bootstrap'

import { skillsAPI } from '../../../API'
import { useSkillContext } from '../../../hooks/useSkillContext'
import { useAuthContext } from '../../../hooks/useAuthContext'
import Form from './Form'

const CreateModal = ({ showCreateModal, onHide, title }) => {
    const { errors,  dispatch } = useSkillContext()
    const { token } = useAuthContext()
    const [formData, setFormData] = useState({
        skill: '',
    })
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    }
    const resetFormData = () => {
        setFormData({
            skill: '',
        })
    }

    useEffect(() => {
        resetFormData()
    }, [showCreateModal])

    const onChange = (e) => {
        const { name, value } = e.target;

        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    }
    // We needed to get the skills everyafter submit
    // why? Well, we just can't add the newly created skill in the state
    // because we need the ID just in case the user edits that newly created skills
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

    // Refactor this in the future to be a more reusable component
    const onSubmit = async (e) => {
        e.preventDefault()

        const skill = {
            skill: formData.skill,
        }
        try {
            const response = await axios.post(`${skillsAPI}`, skill, { headers })
            const message = response.data.message

            dispatch({
                type: 'CREATE_SKILL',
                payload: {
                    alert: {
                        message,
                        success: true,
                    },
                },
            })
            onHide()
            getSkills()

        } catch (error) {
            const errors = error.response.data
            const message = error.response.data.message

            dispatch({
                type: 'CREATE_SKILL',
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

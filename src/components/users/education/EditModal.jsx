import PropTypes from 'prop-types'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'

import { educationsAPI } from '../../../API'
import { useEducationContext } from '../../../hooks/useEducationContext'
import { useAuthContext } from '../../../hooks/useAuthContext'

const EditModal = ({ showEditModal, onHide, title, education }) => {
    const { errors,  dispatch } = useEducationContext()
    const { token } = useAuthContext()
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        from: '',
        to: '',
    })

    useEffect(() => {
        dispatch({ type: 'CLEANER' })
        setFormData({
            school: education.school,
            degree: education.degree,
            from: education.from,
            to: education.to,
        })
    }, [dispatch, education])

    const onChange = (e) => {
        const { name, value } = e.target

        setFormData({
            ...formData,
            [name]: value,
        })
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
                
                {/* need to move this to a separate component */}
                <form onSubmit={onSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='school' className='form-label'>
                            School
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='school'
                            name='school'
                            value={formData && formData.school ? formData.school : ''}
                            onChange={onChange}
                        />
                        <span className='text-danger'>
                            {errors && errors.school ? errors.school : ''}
                        </span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='degree' className='form-label'>
                            Degree
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='degree'
                            name='degree'
                            value={formData && formData.degree ? formData.degree : ''}
                            onChange={onChange}
                        />
                        <span className='text-danger'>
                            {errors && errors.degree ? errors.degree : ''}
                        </span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='from' className='form-label'>
                            From
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='from'
                            name='from'
                            value={formData && formData.from ? formData.from : ''}
                            onChange={onChange}
                        />
                        <span className='text-danger'>
                            {errors && errors.from ? errors.from : ''}
                        </span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='to' className='form-label'>
                            To
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='to'
                            name='to'
                            value={formData && formData.to ? formData.to : ''}
                            onChange={onChange}
                        />
                        <span className='text-danger'>
                            {errors && errors.to ? errors.to : ''}
                        </span>
                    </div>
                    <div className='mb-3'>
                        {/* <button type='submit' className='btn btn-success btn-sm me-1'>
                            Save
                        </button> */}
                        <Button
                            type='submit'
                            variant="success"
                            className='me-1'
                        >
                            Save
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={onHide}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>

            </Modal.Body>
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

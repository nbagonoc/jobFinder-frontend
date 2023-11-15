import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { jobsAPI } from '../../../API'
import AlertMessage from '../../partials/AlertMessage'
import { useJobContext } from '../../../hooks/useJobContext'

export const JobEditForm = () => {
    const { _id } = useParams()
    const { alert, errors, dispatch } = useJobContext()
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        position: '',
        description: '',
    })
    const navigate = useNavigate()

    useEffect(() => {
        dispatch({ type: 'CLEANER' })

        const getJob = async () => {
            try {
                const response = await axios.get(`${jobsAPI}/${_id}`)
                const job = response.data
                setFormData({
                    title: job.title,
                    company: job.company,
                    location: job.location,
                    position: job.position,
                    description: job.description,
                })
            } catch (err) {
                let message = 'Something went wrong!'
                if (err.response && err.response.data) {
                    message = err.response.data.errors.message
                }
                dispatch({
                    type: 'SET_JOB',
                    payload: {
                        alert: {
                            message,
                            success: false,
                        },
                    },
                })
            }
        }

        getJob()
    }, [_id, dispatch])

    const onChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const job = {
                name: formData.name,
                weight: formData.weight,
                size: formData.size,
            }
            const response = await axios.put(`${jobsAPI}/${_id}`, job)
            const message = response.data.success.message
            dispatch({
                type: 'EDIT_JOB',
                payload: {
                    alert: {
                        message,
                        success: true,
                    },
                },
            })
            navigate('/')
        } catch (err) {
            const errors = err.response.data.errors
            dispatch({ type: 'EDIT_JOB', payload: { errors, alert: {} } })
        }
    }

    return (
        <div>
            {(alert === null || typeof alert !== 'object' || Object.keys(alert).length !== 0) ? (
                <form onSubmit={onSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='title'>Title</label>
                        <input
                            id='title'
                            name='title'
                            autoComplete='off'
                            type='text'
                            placeholder='Enter title'
                            className={`form-control ${
                                errors && errors.title ? 'border-danger' : ''
                            }`}
                            onChange={onChange}
                            value={formData && formData.title ? formData.title : ''}
                        />
                        <span className='text-danger'>
                            {errors && errors.title ? errors.title : ''}
                        </span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='company'>Company name</label>
                        <input
                            id='company'
                            name='company'
                            type='text'
                            placeholder='Enter company name'
                            className={`form-control ${
                                errors && errors.company ? 'border-danger' : ''
                            }`}
                            onChange={onChange}
                            value={formData && formData.company ? formData.company : ''}
                        />
                        <span className='text-danger'>
                            {errors && errors.company ? errors.company : ''}
                        </span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='location'>Location</label>
                        <input
                            id='location'
                            name='location'
                            type='text'
                            placeholder='Enter job location'
                            className={`form-control ${
                                errors && errors.location ? 'border-danger' : ''
                            }`}
                            onChange={onChange}
                            value={formData && formData.location ? formData.location : ''}
                        />
                        <span className='text-danger'>
                            {errors && errors.location ? errors.location : ''}
                        </span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='size'>Position</label>
                        <input
                            id='position'
                            name='position'
                            type='text'
                            placeholder='Enter job position'
                            className={`form-control ${
                                errors && errors.position ? 'border-danger' : ''
                            }`}
                            onChange={onChange}
                            value={formData && formData.position ? formData.position : ''}
                        />
                        <span className='text-danger'>
                            {errors && errors.position ? errors.position : ''}
                        </span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='size'>Description</label>
                        <textarea
                            id='description'
                            name='description'
                            type='text'
                            placeholder='Enter job description'
                            rows='5'
                            className={`form-control ${
                                errors && errors.description
                                    ? 'border-danger'
                                    : ''
                            }`}
                            onChange={onChange}
                            value={formData && formData.description ? formData.description : ''}
                        />
                        <span className='text-danger'>
                            {errors && errors.description ? errors.description : ''}
                        </span>
                    </div>
                    <div className='mb-3'>
                        <button type='submit' className='btn btn-primary'>
                            Save
                        </button>
                    </div>
                </form>
            ) : (
                <AlertMessage />
            )}
        </div>
    )
}

export default JobEditForm

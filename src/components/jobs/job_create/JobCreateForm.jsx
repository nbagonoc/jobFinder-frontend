import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { jobsAPI } from '../../../API'
import { useJobContext } from '../../../hooks/useJobContext'

export const JobCreateForm = () => {
    const { errors, dispatch } = useJobContext()
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
    }, [dispatch])

    const onChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const job = {
            title: formData.title,
            company: formData.company,
            location: formData.location,
            position: formData.position,
            description: formData.description,
        }

        try {
            const response = await axios.post(jobsAPI, job)
            const message = response.data
            
            dispatch({
                type: 'CREATE_JOB',
                payload: {
                    alert: {
                        message,
                        success: true,
                    },
                },
            })
            navigate('/')
        } catch (error) {
            const errors = error.response.data
            const message = error.response.data.message
            dispatch({
                type: 'CREATE_JOB',
                payload: {
                    errors,
                    alert: {
                        message,
                        success: false,
                    },
                }
            })
        }
    }

    return (
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
                    value={formData.title}
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
                    value={formData.company}
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
                    value={formData.location}
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
                    value={formData.position}
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
                        errors && errors.description ? 'border-danger' : ''
                    }`}
                    onChange={onChange}
                    value={formData.description}
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
    )
}

export default JobCreateForm

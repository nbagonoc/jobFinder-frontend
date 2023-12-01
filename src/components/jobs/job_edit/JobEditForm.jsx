import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { jobsAPI } from '../../../API'
import AlertMessage from '../../partials/AlertMessage'
import { useJobContext } from '../../../hooks/useJobContext'
import { useAuthContext } from '../../../hooks/useAuthContext'

export const JobEditForm = () => {
    const { _id } = useParams()
    const { alert, errors, dispatch } = useJobContext()
    const { token } = useAuthContext()
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        category: '',
        salary: '',
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
                    category: job.category,
                    salary: job.salary,
                    position: job.position,
                    description: job.description,
                })
            } catch (error) {
                let message = 'Something went wrong!'

                if (error.response && error.response.data) {
                    message = error.response.data.errors.message
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
        const job = {
            title: formData.title,
            company: formData.company,
            location: formData.location,
            category: formData.category,
            salary: formData.salary,
            position: formData.position,
            description: formData.description,
        }

        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        try {
            const response = await axios.put(`${jobsAPI}/${_id}`, job, {
                headers,
            })
            const message = response.data
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
        } catch (error) {
            const errors = error.response.data

            dispatch({
                type: 'EDIT_JOB',
                payload: {
                    errors,
                    alert: {},
                },
            })
        }
    }

    return (
        <div>
            {alert !== null ||
            typeof alert === 'object' ||
            Object.keys(alert).length !== 0 ? (
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
                            value={
                                formData && formData.title ? formData.title : ''
                            }
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
                            value={
                                formData && formData.company
                                    ? formData.company
                                    : ''
                            }
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
                            value={
                                formData && formData.location
                                    ? formData.location
                                    : ''
                            }
                        />
                        <span className='text-danger'>
                            {errors && errors.location ? errors.location : ''}
                        </span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='size'>Category</label>
                        <select
                            className={`form-select ${
                                errors && errors.category ? 'border-danger' : ''
                            }`}
                            id='category'
                            name='category'
                            onChange={onChange}
                            value={formData.category}
                            defaultValue={formData.category}
                            aria-label='Select category'
                        >
                            <option value='' disabled>
                                Select category
                            </option>
                            <option value='it'>IT</option>
                            <option value='business_management'>
                                Business Management
                            </option>
                            <option value='healthcare'>Healthcare</option>
                            <option value='education'>Education</option>
                            <option value='engineering'>Engineering</option>
                            <option value='sales_customer_service'>
                                Sales and Customer Service
                            </option>
                            <option value='creative_arts_design'>
                                Creative Arts and Design
                            </option>
                            <option value='science_research'>
                                Science and Research
                            </option>
                            <option value='hospitality_tourism'>
                                Hospitality and Tourism
                            </option>
                        </select>
                        <span className='text-danger'>
                            {errors && errors.category ? errors.category : ''}
                        </span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='size'>Salary</label>
                        <input
                            id='salary'
                            name='salary'
                            type='text'
                            placeholder='Enter job salary'
                            className={`form-control ${
                                errors && errors.salary ? 'border-danger' : ''
                            }`}
                            onChange={onChange}
                            value={formData.salary}
                        />
                        <span className='text-danger'>
                            {errors && errors.salary ? errors.salary : ''}
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
                            value={
                                formData && formData.position
                                    ? formData.position
                                    : ''
                            }
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
                            value={
                                formData && formData.description
                                    ? formData.description
                                    : ''
                            }
                        />
                        <span className='text-danger'>
                            {errors && errors.description
                                ? errors.description
                                : ''}
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

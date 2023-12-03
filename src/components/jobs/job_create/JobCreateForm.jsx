import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { jobsAPI } from '../../../API'
import { useJobContext } from '../../../hooks/useJobContext'
import { useAuthContext } from '../../../hooks/useAuthContext'

export const JobCreateForm = () => {
    const { errors, dispatch } = useJobContext()
    const { token } = useAuthContext()
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        category: '',
        salary: '',
        position: '',
        arrangement: '',
        type: '',
        description: '',
    })
    const navigate = useNavigate()

    useEffect(() => {
        dispatch({ type: 'CLEANER' })
    }, [dispatch])

    const onChange = (e) => {
        const { name, value } = e.target
        const newValue = name === 'salary' ? parseInt(value) : value // convert salary to number/int

        setFormData({
            ...formData,
            [name]: newValue,
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
            arrangement: formData.arrangement,
            type: formData.type,
            description: formData.description,
        }
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        try {
            const response = await axios.post(jobsAPI, job, { headers })
            const message = response.data.message

            dispatch({
                type: 'CREATE_JOB',
                payload: {
                    alert: {
                        message,
                        success: true,
                    },
                },
            })
            navigate('/jobs/owned')
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
                },
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
                <label htmlFor='size'>Category</label>
                <select
                    className={`form-select ${
                        errors && errors.category ? 'border-danger' : ''
                    }`}
                    id='category'
                    name='category'
                    onChange={onChange}
                    value={formData.category}
                    aria-label='Select category'
                >
                    <option value='' disabled>
                        Select category
                    </option>
                    <option value='Information and Technology'>
                        Information and Technology
                    </option>
                    <option value='Business and Management'>
                        Business and Management
                    </option>
                    <option value='Healthcare'>Healthcare</option>
                    <option value='Education'>Education</option>
                    <option value='Engineering'>Engineering</option>
                    <option value='Sales and Customer Service'>
                        Sales and Customer Service
                    </option>
                    <option value='Creative Arts and Design'>
                        Creative Arts and Design
                    </option>
                    <option value='Science and Research'>
                        Science and Research
                    </option>
                    <option value='Hospitality and Tourism'>
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
                    type='number'
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
                <label htmlFor='size'>Arrangement</label>
                <select
                    className={`form-select ${
                        errors && errors.arrangement ? 'border-danger' : ''
                    }`}
                    id='arrangement'
                    name='arrangement'
                    onChange={onChange}
                    value={formData.arrangement}
                    aria-label='Select arrangement'
                >
                    <option value='' disabled>
                        Select arrangement
                    </option>
                    <option value='On-site'>On-site</option>
                    <option value='Remote'>Remote</option>
                    <option value='Hybrid'>Hybrid</option>
                </select>
                <span className='text-danger'>
                    {errors && errors.arrangement ? errors.arrangement : ''}
                </span>
            </div>
            <div className='mb-3'>
                <label htmlFor='size'>Type</label>
                <select
                    className={`form-select ${
                        errors && errors.type ? 'border-danger' : ''
                    }`}
                    id='type'
                    name='type'
                    onChange={onChange}
                    value={formData.type}
                    aria-label='Select type'
                >
                    <option value='' disabled>
                        Select type
                    </option>
                    <option value='Full-time'>Full-time</option>
                    <option value='Part-time'>Part-time</option>
                </select>
                <span className='text-danger'>
                    {errors && errors.type ? errors.type : ''}
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
                <button type='submit' className='btn btn-success btn-sm me-1'>
                    Save
                </button>
                <Link
                    to='/jobs/owned'
                    className='btn btn-secondary btn-sm'
                >
                    Cancel
                </Link>
            </div>
        </form>
    )
}

export default JobCreateForm

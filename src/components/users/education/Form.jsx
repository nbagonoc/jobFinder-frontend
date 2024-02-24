import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { educationsAPI } from '../../../API'
import { useEducationContext } from '../../../hooks/useEducationContext'
import { useAuthContext } from '../../../hooks/useAuthContext'

const Form = () => {
    const { errors,  dispatch } = useEducationContext()
    const { token } = useAuthContext()
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        from: '',
        to: '',
    })
    const navigate = useNavigate()

    useEffect(() => {
        dispatch({ type: 'CLEANER' })
    }, [dispatch])

    const onChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        })
    };

    const onSubmit = async (e) => {
        e.preventDefault()

        const education = {
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
            navigate('/profile')
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
        <div>
            <form onSubmit={onSubmit}>
                <div className='mb-3'>
                    <label htmlFor='school' className='form-label'>
                        School Name
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='school'
                        name='school'
                        value={formData.school}
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
                        value={formData.degree}
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
                        type='date'
                        className='form-control'
                        id='from'
                        name='from'
                        value={formData.from}
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
                        type='date'
                        className='form-control'
                        id='to'
                        name='to'
                        value={formData.to}
                        onChange={onChange}
                    />
                    <span className='text-danger'>
                        {errors && errors.to ? errors.to : ''}
                    </span>
                </div>
                <div className='mb-3'>
                    <button type='submit' className='btn btn-success btn-sm me-1'>
                        Update
                    </button>
                    <Link
                        to={`/profile`}
                        className='btn btn-secondary btn-sm'
                    >
                        Cancel
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Form

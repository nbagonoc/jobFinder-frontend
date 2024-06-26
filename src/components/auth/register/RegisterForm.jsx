import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { authAPI } from '../../../API'
import { useAuthContext } from '../../../hooks/useAuthContext'

const RegisterForm = () => {
    const location = useLocation()
    const { errors, dispatch } = useAuthContext()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        password: '',
        password2: '',
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
        const user = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            company: formData.company,
            email: formData.email,
            role: location.pathname === '/register-recruiter' ? 'recruiter' : 'applicant',
            password: formData.password,
            password2: formData.password2,
        }

        try {
            const response = await axios.post(`${authAPI}/register`, user)
            const message = response.data
            dispatch({
                type: 'REGISTER',
                payload: {
                    alert: {
                        message,
                        success: true,
                    },
                },
            })
            navigate('/login')
        } catch (error) {
            const errors = error.response.data
            const message = error.response.data.message
            dispatch({
                type: 'REGISTER',
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
                <label htmlFor='firstName'>First name:</label>
                <input
                    id='firstName'
                    name='firstName'
                    autoComplete='given-name'
                    type='text'
                    placeholder='Enter first name'
                    className={`form-control ${
                        errors && errors.firstName ? 'border-danger' : ''
                    }`}
                    onChange={onChange}
                    value={formData.firstName}
                />
                <span className='text-danger'>
                    {errors && errors.firstName ? errors.firstName : ''}
                </span>
            </div>
            <div className='mb-3'>
                <label htmlFor='lastName'>Last name:</label>
                <input
                    id='lastName'
                    name='lastName'
                    autoComplete='family-name'
                    type='text'
                    placeholder='Enter last name'
                    className={`form-control ${
                        errors && errors.lastName ? 'border-danger' : ''
                    }`}
                    onChange={onChange}
                    value={formData.lastName}
                />
                <span className='text-danger'>
                    {errors && errors.lastName ? errors.lastName : ''}
                </span>
            </div>
            {location.pathname === '/register-recruiter' && (
                <div className='mb-3'>
                    <label htmlFor='company'>Company:</label>
                    <input
                        id='company'
                        name='company'
                        autoComplete='organization'
                        type='text'
                        placeholder='Enter company'
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
            )}
            <div className='mb-3'>
                <label htmlFor='email'>email:</label>
                <input
                    id='email'
                    name='email'
                    autoComplete='email'
                    type='email'
                    placeholder='Enter email'
                    className={`form-control ${
                        errors && errors.email ? 'border-danger' : ''
                    }`}
                    onChange={onChange}
                    value={formData.email}
                />
                <span className='text-danger'>
                    {errors && errors.email ? errors.email : ''}
                </span>
            </div>
            <div className='mb-3'>
                <label htmlFor='password'>Password:</label>
                <input
                    id='password'
                    name='password'
                    autoComplete='off'
                    type='password'
                    placeholder='Enter password'
                    className={`form-control ${
                        errors && errors.password ? 'border-danger' : ''
                    }`}
                    onChange={onChange}
                    value={formData.password}
                />
                <span className='text-danger'>
                    {errors && errors.password ? errors.password : ''}
                </span>
            </div>
            <div className='mb-3'>
                <label htmlFor='password2'>Confirm Password:</label>
                <input
                    id='password2'
                    name='password2'
                    autoComplete='off'
                    type='password'
                    placeholder='Enter confirm password'
                    className={`form-control ${
                        errors && errors.password ? 'border-danger' : ''
                    }`}
                    onChange={onChange}
                    value={formData.password2}
                />
                <span className='text-danger'>
                    {errors && errors.password2 ? errors.password2 : ''}
                </span>
            </div>
            <div className='mb-3'>
                <button type='submit' className='btn btn-primary'>
                    Register
                </button>
            </div>
        </form>
    )
}

export default RegisterForm

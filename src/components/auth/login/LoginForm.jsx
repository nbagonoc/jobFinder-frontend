import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

import { authAPI } from '../../../API'
import { useAuthContext } from '../../../hooks/useAuthContext'

const LoginForm = () => {
    const { errors, dispatch } = useAuthContext()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const navigate = useNavigate()

    useEffect(() => {
        dispatch({ type: 'CLEARER' })
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
        const credentials = {
            email: formData.email,
            password: formData.password,
        }
        try {
            const response = await axios.post(`${authAPI}/login`, credentials)
            const token = response.data.token
            localStorage.setItem('token', token)
            const decodedToken = jwtDecode(token)
            const user = { _id: decodedToken._id, name: decodedToken.firstName, role: decodedToken.role }

            dispatch({
                type: 'LOGIN',
                payload: { token, user },
            })
            navigate('/')
        } catch (error) {
            const errors = error.response.data.errors
            const message = error.response.data.message
            dispatch({
                type: 'LOGIN',
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
                <label htmlFor='email'>Email</label>
                <input
                    id='email'
                    name='email'
                    autoComplete='email'
                    type='input'
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
                <label htmlFor='password'>Password</label>
                <input
                    id='password'
                    name='password'
                    autoComplete='current-password'
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
                <button type='submit' className='btn btn-primary'>
                    Login
                </button>
            </div>
        </form>
    )
}

export default LoginForm

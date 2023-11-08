import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { API } from '../../../API'
import { useGlobalContext } from '../../../hooks/useGlobalContext'

const RegisterForm = () => {
    const { errors, dispatch } = useGlobalContext()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
    })
    const navigate = useNavigate()

    useEffect(() => {
        dispatch({ type: 'CLEAR_ALERT' }) //clear-out/reset any alert messages on state
    },[dispatch])

    const onChange = (e) => {
        // console.log(e.target.name + ': ', e.target.value)
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
            email: formData.email,
            password: formData.password,
            password2: formData.password2,
        }


        try {
            const response = await axios.post(API, user);
            const message = response.data.success.message;
            dispatch({
                type: 'CREATE_USER',
                payload: {
                    alert: {
                        message,
                        success: true,
                    },
                },
            })
            navigate('/')
        } catch (err) {
            const errors = err.response.data
            dispatch({ type: 'CREATE_USER', payload: errors })
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="firstName">First name</label>
                <input
                    id="firstName"
                    name="firstName"
                    autoComplete="given-name"
                    type="text"
                    placeholder="Enter first name"
                    className={`form-control ${
                        errors && errors.firstName ? 'border-danger' : ''
                    }`}
                    onChange={onChange}
                    value={formData.firstName}
                />
                <span className="text-danger">
                    {errors && errors.firstName ? errors.firstName.message : ''}
                </span>
            </div>
            <div className="mb-3">
                <label htmlFor="lastName">Last name</label>
                <input
                    id="lastName"
                    name="lastName"
                    autoComplete="family-name"
                    type="text"
                    placeholder="Enter last name"
                    className={`form-control ${
                        errors && errors.lastName ? 'border-danger' : ''
                    }`}
                    onChange={onChange}
                    value={formData.lastName}
                />
                <span className="text-danger">
                    {errors && errors.lastName ? errors.lastName.message : ''}
                </span>
            </div>
            <div className="mb-3">
                <label htmlFor="email">email</label>
                <input
                    id="email"
                    name="email"
                    autoComplete="email"
                    type="email"
                    placeholder="Enter email"
                    className={`form-control ${
                        errors && errors.email ? 'border-danger' : ''
                    }`}
                    onChange={onChange}
                    value={formData.email}
                />
                <span className="text-danger">
                    {errors && errors.email ? errors.email.message : ''}
                </span>
            </div>
            <div className="mb-3">
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    autoComplete="off"
                    type="password"
                    placeholder="Enter password"
                    className={`form-control ${
                        errors && errors.password ? 'border-danger' : ''
                    }`}
                    onChange={onChange}
                    value={formData.password}
                />
                <span className="text-danger">
                    {errors && errors.password ? errors.password.message : ''}
                </span>
            </div>
            <div className="mb-3">
                <label htmlFor="password2">Confirm Password</label>
                <input
                    id="password2"
                    name="password2"
                    autoComplete="off"
                    type="password"
                    placeholder="Enter confirm password"
                    className={`form-control ${
                        errors && errors.password ? 'border-danger' : ''
                    }`}
                    onChange={onChange}
                    value={formData.password2}
                />
                <span className="text-danger">
                    {errors && errors.password2 ? errors.password2.message : ''}
                </span>
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </div>
        </form>
    )
}

export default RegisterForm
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { API } from '../../API'
import { useGlobalContext } from '../../hooks/useGlobalContext'

const LoginForm = () => {
    const { errors, dispatch } = useGlobalContext()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })
    const navigate = useNavigate()

    useEffect(() => {
        dispatch({ type: 'CLEAR_ALERT' }) //clear-out/reset any alert messages on globalstate
    },[dispatch])

    const onChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const item = {
            name: formData.name,
            weight: formData.weight,
            size: formData.size,
        }

        try {
            const response = await axios.post(API, item);
            const message = response.data.success.message;
            dispatch({
                type: 'CREATE_ITEM',
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
            dispatch({ type: 'CREATE_ITEM', payload: errors })
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    name="username"
                    autoComplete="off"
                    type="text"
                    placeholder="Enter username"
                    className={`form-control ${
                        errors && errors.username ? 'border-danger' : ''
                    }`}
                    onChange={onChange}
                    value={formData.username}
                />
                <span className="text-danger">
                    {errors && errors.username ? errors.username.message : ''}
                </span>
            </div>
            <div className="mb-3">
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    autoComplete="current-password"
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
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </div>
        </form>
    )
}

export default LoginForm
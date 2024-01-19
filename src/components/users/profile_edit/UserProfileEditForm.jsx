import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { usersAPI } from '../../../API'
import AlertMessage from '../../partials/AlertMessage/AlertMessage'
import { useUserContext } from '../../../hooks/useUserContext'
import { useAuthContext } from '../../../hooks/useAuthContext'

const UserProfileEditForm = () => {
    const { alert, errors,  dispatch } = useUserContext()
    const { token } = useAuthContext()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        photo: '',
    })
    const navigate = useNavigate()

    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        const getProfile = async () => {
            try {
                const response = await axios.get(`${usersAPI}/profile`, { headers })
                const profile = response.data

                setFormData({
                    firstName: profile.firstName,
                    lastName: profile.lastName,
                    photo: profile.photo,
                })
            } catch (error) {
                let message = 'Something went wrong!'
                if (error && error.response) {
                    message = error.response.data.errors.message
                }

                dispatch({
                    type: 'SET_PROFILE',
                    payload: {
                        alert: {
                            message,
                            success: false,
                        },
                    },
                })
            }
        }
        getProfile()
    }, [dispatch, token])

    const onChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        const profile = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            photo: formData.photo,
        }

        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        try {
            const response = await axios.put(`${usersAPI}`, profile, { headers })
            const message = response.data.message

            dispatch({
                type: 'SET_PROFILE',
                payload: {
                    // profile,
                    alert: {
                        message,
                        success: true,
                    },
                },
            })
            navigate('/profile')
        } catch (error) {
            let message = 'Something went wrong!'
            if (error && error.response) {
                message = error.response.data.errors.message
            }

            dispatch({
                type: 'SET_PROFILE',
                payload: {
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
            {alert !== null ||
            typeof alert === 'object' ||
            Object.keys(alert).length !== 0 ? (
                <form onSubmit={onSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='firstName' className='form-label'>
                            First Name
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='firstName'
                            name='firstName'
                            value={formData.firstName}
                            onChange={onChange}
                        />
                        <span className='text-danger'>
                            {errors && errors.firstName ? errors.firstName : ''}
                        </span>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='lastName' className='form-label'>
                            Last Name
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='lastName'
                            name='lastName'
                            value={formData.lastName}
                            onChange={onChange}
                        />
                        <span className='text-danger'>
                            {errors && errors.lastName ? errors.lastName : ''}
                        </span>
                    </div>
                    {/* file upload */}
                    <div className='mb-3'>
                        <label htmlFor='photo' className='form-label'>
                            Photo
                        </label>
                        <input
                            type='file'
                            className='form-control'
                            id='photo'
                            name='photo'
                            onChange={onChange}
                        />
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
            ) : (
                <AlertMessage />
            )}
        </div>
    )
}

export default UserProfileEditForm

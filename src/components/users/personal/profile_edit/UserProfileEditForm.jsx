// refactor this to a modal

import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { usersAPI } from '../../../../API'
import { useUserContext } from '../../../../hooks/useUserContext'
import { useAuthContext } from '../../../../hooks/useAuthContext'

const UserProfileEditForm = () => {
    const { errors,  dispatch } = useUserContext()
    const { token } = useAuthContext()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
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
                    phone: profile.phone,
                    photo: null
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
        const { name, value, files } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'photo' ? files[0] : value,
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault()

        const profile = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone,
            photo: formData.photo,
        }

        const headers = {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        }

        try {
            const response = await axios.put(`${usersAPI}`, profile, { headers })
            const message = response.data.message
            dispatch({
                type: 'UPDATE_PROFILE',
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
                type: 'UPDATE_PROFILE',
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
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>
                        Phone
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={onChange}
                    />
                    <span className='text-danger'>
                        {errors && errors.phone ? errors.phone : ''}
                    </span>
                </div>
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
        </div>
    )
}

export default UserProfileEditForm

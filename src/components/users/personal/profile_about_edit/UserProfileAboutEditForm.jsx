// refactor this to a modal

import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { aboutsAPI } from '../../../../API'
import { useUserContext } from '../../../../hooks/useUserContext'
import { useAuthContext } from '../../../../hooks/useAuthContext'

const UserProfileAboutEditForm = () => {
    const { errors, dispatch } = useUserContext()
    const { token } = useAuthContext()
    const [formData, setFormData] = useState({
        about: '',
    })
    const navigate = useNavigate()

    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        const getAbout = async () => {
            try {
                const response = await axios.get(`${aboutsAPI}`, {
                    headers,
                })
                const about = response.data
                // console.log(profile)

                setFormData({
                    about: about.about,
                })
            } catch (error) {
                // console.log(error.response.data)
                let message = error.message

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

        getAbout()
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

        const data = {
            about: formData.about,
        }

        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        try {
            const response = await axios.put(`${aboutsAPI}`, data, { headers })
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
        <form onSubmit={onSubmit}>
            <textarea
                id='about'
                required
                name='about'
                type='text'
                placeholder='About'
                rows='5'
                className={`form-control ${
                    errors && errors.about ? 'border-danger' : ''
                }`}
                onChange={onChange}
                value={formData && formData.about ? formData.about : ''}
            />
            <span className='text-danger'>
                {errors && errors.about ? errors.about : ''}
            </span>
            <div className='mt-3'>
                <button type='submit' className='btn btn-success btn-sm me-1'>
                    Save
                </button>
                <Link
                    to='/profile'
                    className='btn btn-secondary btn-sm'
                >
                    Cancel
                </Link>
            </div>
        </form>
    )
}
export default UserProfileAboutEditForm

import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { aboutsAPI } from '../../../API'
import AlertMessage from '../../partials/AlertMessage/AlertMessage'
import { useUserContext } from '../../../hooks/useUserContext'
import { useAuthContext } from '../../../hooks/useAuthContext'

const UserProfileAboutEditForm = () => {
    const { alert, errors, dispatch } = useUserContext()
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

        console.log(data)
        // console.log(`Bearer ${data.about}`)

        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        try {
            const response = await axios.put(`${aboutsAPI}`, data, { headers })
            // console.log(response.data)
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
            // console.log(error.response.data)
            // console.log(error.response.data.message)
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
            <label htmlFor='about'>About:</label>
            <textarea
                id='about'
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
            <div className='d-grid'>
                <button className='btn btn-primary' type='submit'>
                    Submit
                </button>
            </div>
        </form>
    )
}
export default UserProfileAboutEditForm

import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { educationsAPI } from '../../../API'
import { useEducationContext } from '../../../hooks/useEducationContext'
import { useAuthContext } from '../../../hooks/useAuthContext'

import View from './View'

const List = () => {
    const { educations, dispatch } = useEducationContext()
    const { token } = useAuthContext()

    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        const getEducations = async () => {
            try {
                const response = await axios.get(`${educationsAPI}`, { headers })
                const educations = response.data
                dispatch({
                    type: 'SET_EDUCATIONS',
                    payload: { educations },
                })
            } catch (error) {
                let message = error.response.data.message
                dispatch({
                    type: 'SET_EDUCATIONS',
                    payload: {
                        alert: {
                            message,
                            success: false,
                        },
                    },
                })
            }
        }
        getEducations()
    }, [dispatch, token])

    return (
        <div className='card'>
            <div className='card-header'>
                <h3 className='fw-bold fs-5 mt-2'>Education</h3>
            </div>
            <div className='card-body'>
                {educations.length === 0 && (
                    <div className='alert alert-info' role='alert'>
                        No education found
                    </div>
                )}
                {educations.map((education) => (
                    <div key={education._id}>
                        <View education={education} />
                        <hr />
                    </div>
                ))}
                <Link to={`/education/create`} className='btn btn-secondary btn-sm'>
                    Add
                </Link>
            </div>
        </div>
    )
}

export default List

import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

import axios from 'axios'

import { educationsAPI } from '../../../../API'
import { useEducationContext } from '../../../../hooks/useEducationContext'
import { useAuthContext } from '../../../../hooks/useAuthContext'

import View from './View'

const List = ({id}) => {
    const { dispatch } = useEducationContext()
    const { token } = useAuthContext()
    const [educations, setEducations] = useState(null)

    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        const getEducations = async () => {
            try {
                const response = await axios.get(`${educationsAPI}/${id}/user`, {
                    headers,
                })
                const educationsData = response.data
                dispatch({
                    type: 'SET_EDUCATIONS',
                    payload: { educationsData },
                })
                setEducations(educationsData)
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
                setEducations([])
            }
        }
        getEducations()
    }, [educations, dispatch, token, id])

    if (educations === null) {
        return <div>Loading...</div>
    }

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
                {educations.map((education, index) => (
                    <div key={education._id}>
                        <View education={education} />
                        {index !== educations.length - 1 && <hr />}
                    </div>
                ))}
            </div>
        </div>
    )
}

List.propTypes = {
    id: PropTypes.string.isRequired,
}

export default List

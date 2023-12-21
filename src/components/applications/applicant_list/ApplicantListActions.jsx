import axios from 'axios'
import PropTypes from 'prop-types'

import { applicationsAPI } from '../../../API'
import { useApplicationContext } from '../../../hooks/useApplicationContext'
import { useAuthContext } from '../../../hooks/useAuthContext'

const ApplicantListActions = ({applicationId}) => {
    const { dispatch } = useApplicationContext()
    const { token } = useAuthContext()


    const updateStatus = async (status) => {
        try {
            const headers = {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
            const response = await axios.put(`${applicationsAPI}/${applicationId}`,
            { status: status },
            { headers })

            const message = response.data.message

            dispatch({
                type: 'UPDATE_APPLICATION_STATUS',
                payload: {
                    alert: {
                        message,
                        success: true,
                    },
                },
            })
        } catch (error) {
            console.log(error) //just log error. No need to show to user
        }
    }

    return (
        <div className='col-lg-4 mt-1 mt-lg-0'>
            <hr className='d-block d-lg-none' />
            <button onClick={() => updateStatus('Denied')} className='btn btn-secondary btn-sm me-1'>
                Deny
            </button>
            <button onClick={() => updateStatus('Whitelisted')} className='btn btn-secondary btn-sm me-1'>
                Whitelist
            </button>
            <button onClick={() => updateStatus('Approved')} className='btn btn-success btn-sm me-1'>
                Approve
            </button>
        </div>
    )
}

ApplicantListActions.propTypes = {
    applicationId: PropTypes.string.isRequired,
}

export default ApplicantListActions

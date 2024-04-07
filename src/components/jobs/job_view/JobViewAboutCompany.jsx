import axios from 'axios'
import { PropTypes } from 'prop-types'
import { useEffect, useState } from 'react'

import { aboutsAPI } from '../../../API'

const JobViewAboutCompany = ({ recruiterId }) => {
    const [about, setAbout] = useState({
        about: '',
        company: ''
    })
    useEffect(() => {
        const getAbout = async () => {
            try {
                const response = await axios.get(`${aboutsAPI}/${recruiterId}`)
                const about = response.data
                setAbout({
                    about: about.about,
                    company: about.user.company
                })
            } catch (err) {
                let message = 'Something went wrong!'
                if (err && err.response) {
                    message = err.response.data.errors.message
                }
                console.log(message)
            }
        }
        getAbout()
    }, [recruiterId])
  return (
    <div className='card'>
    <div className='card-header'>
        <h3 className='fw-bold fs-5 mt-2'>About the company</h3>
    </div>
    <div className='card-body'>
        <h3 className='card-title fw-bold text-primary fs-6'>{about.company}</h3>
        {/* <h6 className='fw-bold'>
            Industry: <span className='text-muted fw-light'>Information technology</span>
        </h6>
        <h6 className='fw-bold'>
            Size: <span className='text-muted fw-light'>50</span>
        </h6>
        <h6 className='fw-bold'>
            Location: <span className='text-muted fw-light'>Manila</span>
        </h6>
        <h6 className='fw-bold'>
            Website: <span className='text-muted fw-light'>company-xyz.com</span>
        </h6> */}
        <p className='text-muted fw-light'>{about.about}</p>
    </div>
</div>
  )
}

JobViewAboutCompany.propTypes = {
    recruiterId: PropTypes.string.isRequired
}

export default JobViewAboutCompany
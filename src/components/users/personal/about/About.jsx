import { Button, } from 'react-bootstrap'
import { useState } from 'react'
import PropTypes from 'prop-types'
import EditModal from './EditModal'

const About = ({ profile = {} }) => {
    const [showEditModal, setShowEditModal] = useState(false)

    return (
        <div className='card'>
            <div className='card-header'>
                <h3 className='fw-bold fs-5 mt-2'>About {profile.company}</h3>
            </div>
            <div className='card-body'>
                {profile.about && profile.about.about ? (
                    <p className='text-muted fw-light'>{profile.about.about}</p>
                ) : (
                    <p className='text-muted fw-light'>No about information available.</p>
                )}
            <Button
                variant='secondary'
                className='btn btn-secondary btn-sm me-1'
                onClick={() => setShowEditModal(true)}
            >
                Edit
            </Button>
            </div>
            <EditModal
                showEditModal={showEditModal}
                onHide={() => setShowEditModal(false)}
                title='Edit About'
                about={profile.about ? profile.about : {}}
            />
        </div>
    )
}

About.propTypes = {
    profile: PropTypes.object,
}

export default About

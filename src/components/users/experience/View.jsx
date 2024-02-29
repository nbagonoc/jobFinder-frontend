import { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, } from 'react-bootstrap'

import DeleteModal from './DeleteModal'
import EditModal from './EditModal'

const View = ({ experience }) => {
    const [showModal, setShowModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const fromDate = new Date(experience.from).toLocaleDateString()
    const toDate = new Date(experience.to).toLocaleDateString()

    return (
        <div>
            <h3 className='card-title fw-bold fs-6'>{experience.title}</h3>
            <h6 className='fw-bold'>
                Company:{' '}
                <span className='text-muted fw-light'>{experience.company}</span>
            </h6>
            <h6 className='fw-bold'>
                Description:{' '}
                <span className='text-muted fw-light'>{experience.description}</span>
            </h6>
            <h6 className='fw-bold'>
                year:{' '}
                <span className='text-muted fw-light'>
                    {fromDate} - {experience.current ? 'Current' : toDate}
                </span>
            </h6>
            <Button
                variant='secondary'
                className='btn btn-secondary btn-sm me-1'
                onClick={() => setShowEditModal(true)}
            >
                Edit
            </Button>
            <Button
                variant='secondary'
                className='btn btn-secondary btn-sm'
                onClick={() => setShowModal(true)}
            >
                Delete
            </Button>
            <EditModal
                showEditModal={showEditModal}
                onHide={() => setShowEditModal(false)}
                title='Edit experience'
                experience={experience}
            />
            <DeleteModal
                showModal={showModal}
                onHide={() => setShowModal(false)}
                title='Please confirm'
                submitText='Yes, delete it'
                id={`${experience._id}`}
            >
                <p>Are you sure you want to delete this experience?</p>
            </DeleteModal>
        </div>
    )
}

View.propTypes = {
    experience: PropTypes.object.isRequired,
}

export default View

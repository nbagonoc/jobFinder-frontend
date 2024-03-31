import { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, } from 'react-bootstrap'

import DeleteModal from './DeleteModal'
import EditModal from './EditModal'

const View = ({ education }) => {
    const [showModal, setShowModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const fromDate = new Date(education.from).toLocaleDateString()
    const toDate = new Date(education.to).toLocaleDateString()

    return (
        <div>
            <h3 className='card-title fw-bold fs-6'>{education.school}</h3>
            <h6 className='fw-bold'>
                Degree:{' '}
                <span className='text-muted fw-light'>{education.degree}</span>
            </h6>
            <h6 className='fw-bold'>
                year:{' '}
                <span className='text-muted fw-light'>
                    {fromDate} - {education.current ? 'Current' : toDate}
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
                title='Edit education'
                education={education}
            />
            <DeleteModal
                showModal={showModal}
                onHide={() => setShowModal(false)}
                title='Please confirm'
                submitText='Yes, delete it'
                id={`${education._id}`}
            >
                <p>Are you sure you want to delete this education?</p>
            </DeleteModal>
        </div>
    )
}

View.propTypes = {
    education: PropTypes.object.isRequired,
}

export default View

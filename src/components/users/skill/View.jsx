import { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, } from 'react-bootstrap'

import DeleteModal from './DeleteModal'
import EditModal from './EditModal'

const View = ({ skill }) => {
    const [showModal, setShowModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)

    return (
        <div>
            <h6 className='text-muted fw-light'>
                {skill.skill}
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
                title='Edit skill'
                skill={skill}
            />
            <DeleteModal
                showModal={showModal}
                onHide={() => setShowModal(false)}
                title='Please confirm'
                submitText='Yes, delete it'
                id={`${skill._id}`}
            >
                <p>Are you sure you want to delete this skill?</p>
            </DeleteModal>
        </div>
    )
}

View.propTypes = {
    skill: PropTypes.object.isRequired,
}

export default View

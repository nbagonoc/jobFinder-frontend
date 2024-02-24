import PropTypes from 'prop-types';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap';

import { educationsAPI } from '../../../API';
import { useEducationContext } from '../../../hooks/useEducationContext'
import { useAuthContext } from '../../../hooks/useAuthContext'

const DeleteModal = ({ showModal, onHide, title, submitText, id, children }) => {
    const { dispatch } = useEducationContext()
    const { token } = useAuthContext()
    // const navigate = useNavigate()

    // Refactor this in the future to be a more reusable component
    const onSubmit = async (e) => {
        e.preventDefault()
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        try {
            const response = await axios.delete(`${educationsAPI}/${id}`, { headers })
            const message = response.data.message

            dispatch({
                type: 'DELETE_EDUCATION',
                payload: {
                    alert: {
                        message,
                        success: true,
                    },
                    deletedEducationId: id,
                },
            })
        } catch (error) {
            const message = error.response.data.message
            dispatch({
                type: 'DELETE_EDUCATION',
                payload: {
                    alert: {
                        message,
                        success: false,
                    },
                },
            })
        }
    }

    return (
        <Modal show={showModal} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancel
                </Button>
                <Button
                    variant="success"
                    onClick={(e) => {
                        onSubmit(e)
                        onHide()
                    }}
                >
                    {submitText}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

DeleteModal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    submitText: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default DeleteModal;

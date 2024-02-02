import PropTypes from 'prop-types'

const Alert = ({ alert, handleClose }) => {
    return (
        alert && alert.message && (
            <div
                className={`alert alert-${alert.success ? 'success' : 'warning'} alert-dismissible fade show`}
                role='alert'
            >
                <strong>{alert.message}</strong>
                <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='alert'
                    aria-label='Close'
                    onClick={handleClose}
                ></button>
            </div>
        )
    )
}

Alert.propTypes = {
    alert: PropTypes.shape({
        message: PropTypes.string,
        success: PropTypes.bool
    }),
    handleClose: PropTypes.func
}

export default Alert